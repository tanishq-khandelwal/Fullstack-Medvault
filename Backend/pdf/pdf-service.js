import PDFDocument from 'pdfkit';
import { MongoClient, ObjectId } from 'mongodb';

export async function pdfService(req, res, patientId) {
    const doc = new PDFDocument();

    try {
        const client = new MongoClient(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();

        const database = client.db('test');
        const collection = database.collection('presciptions');
        const PatientCollection = database.collection('patients');
        const DoctorCollection = database.collection('users');

        const data = await collection.find({ patient_id: patientId }).toArray();
        const patient = await PatientCollection.findOne({ _id: ObjectId.createFromHexString(patientId) });
        // const docId=await data.doc_id;
        // const doctor = await DoctorCollection.find({ doc_id: docId }).toArray();
        let doctors = [];

// Iterate over each prescription to get the doctor's information
for (const prescription of data) {
    const docId = prescription.doc_id;
    // Find the doctor using the doc_id
    const doctor = await DoctorCollection.findOne({ _id: ObjectId.createFromHexString(docId) });
    // Push the doctor's information into the doctors array
    doctors.push(doctor);
}

console.log(doctors);
        await client.close();

        if (!data || data.length === 0) {
            console.log(`Prescriptions not found for patient ID: ${patientId}`);
            return res.status(404).send('Prescriptions not found');
        }
        // console.log(docId);
        // Set response headers for PDF download
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="Prescription.pdf"');

        // Pipe PDF content directly to response stream
        doc.pipe(res);

        // Adding dynamic content from MongoDB data
        // Access fields directly from the data object
        // Set up styles
        doc.font('Helvetica');

        doc.fillColor('#0085FF').fontSize(19).text('Med',250, 10,{continued:true}).fillColor('black').text('Vault', 250, 10);

        // Add hospital and doctor details at the top
        doc.fillColor('black').fontSize(5).text(`Patient ID: ${patient._id}`, 50, 50);
        doc.moveDown();

        doc.fillColor('#2495A9').fontSize(13).text(`Dr ${doctors[0].fullName}                                                              Life Line Hospital,Pune`);
        doc.fillColor('black').fontSize(10).text(`${doctors[0].type}                                                                                                                    `,{align:'left'});
        doc.fillColor('black').fontSize(10).text(`Mob No:  ${doctors[0].mobile}                                                                                             411038`);
        doc.fillColor('black').fontSize(10).text('Ph:02114-275275                  .', { align: 'right' });
        doc.fillColor('black').fontSize(10).text('Timing:9:00 AM - 12:00 PM   .', { align: 'right' });
        doc.fillColor('black').fontSize(10).text('Closed:Thursday                   .', { align: 'right' });


        // Move the line up vertically by subtracting the desired distance from the y-coordinate
        const startY = 200 - 50; // Move the line up by 10 units
        const endY = 200 - 50; // Move the line up by 10 units

        doc.lineWidth(2); // Set the line width to make it bold
        doc.moveTo(50, startY); // Start the line at (50, startY)
        doc.lineTo(550, endY); // Draw the line to (550, endY)
        doc.stroke(); // Draw the line

        doc.moveDown(2);

        doc.fillColor('black').fontSize(8).text('Date: ' + new Date().toDateString(), { align: 'left' });

        doc.moveDown();

        // Add patient details
        doc.fillColor('black').fontSize(12).text('Patient Details :', { underline: true });
        doc.moveDown();
        doc.fillColor('black').fontSize(8).text(`Full Name: ${patient.fullName}`);
        doc.fillColor('black').fontSize(8).text(`Email: ${patient.email}`);
        doc.fillColor('black').fontSize(8).text(`Age: ${patient.age}`);
        doc.fillColor('black').fontSize(8).text(`Address: ${patient.address}`);

        const starY = 200 + 50; // Move the line up by 10 units
        const enY = 200 + 50; // Move the line up by 10 units

        doc.lineWidth(2); // Set the line width to make it bold
        doc.moveTo(50, starY); // Start the line at (50, startY)
        doc.lineTo(550, enY); // Draw the line to (550, endY)
        doc.stroke(); // Draw the line

        doc.moveDown(2);

        // Add prescription table
        const tableTop = doc.y;
        const tableLeft = 50;
        const columnWidth = 200;
        const rowHeight = 15;

        doc.lineWidth(2); // Set the line width to make it bold
        doc.moveTo(50, 270); // Start the line at (50, startY)
        doc.lineTo(550, 270); // Draw the line to (550, endY)
        doc.stroke();
        doc.fillColor('black').fontSize(12).text('Medicine Name                                           Dosage                              Duration', tableLeft, doc.y);
        

        doc.moveDown();

        // Iterate over each prescription entry
        data.forEach((prescription, index) => {
            // Calculate the vertical position for each medicine dynamically
            let medicineTop = doc.y + 5; // Initial top position for the medicines

            if (Array.isArray(prescription.medicine_names)) {
                // Handle the case when prescription.medicine_names is an array
                prescription.medicine_names.forEach((medicine, index) => {
                    const medicineTextHeight = doc.heightOfString(medicine); // Calculate the height of the current medicine text
                    const medicineY = medicineTop; // Vertical position of the current medicine
                    doc.fillColor('black').fontSize(12).text(medicine, tableLeft, medicineY);
                    doc.fillColor('black').fontSize(12).text(prescription.doses[index], tableLeft + columnWidth, medicineY);
                    medicineTop += medicineTextHeight + 5; // Increase the top position for the next medicine by the height of the current medicine plus some extra spacing
                });
            } else {
                // Handle the case when prescription.medicine_names is not an array
                // You can add custom handling here, depending on your requirements
                const medicineTextHeight = doc.heightOfString(prescription.medicine_names); // Calculate the height of the medicine text
                const medicineY = medicineTop; // Vertical position of the medicine
                doc.fillColor('black').fontSize(12).text(prescription.medicine_names, tableLeft, medicineY);
                doc.fillColor('black').fontSize(12).text(prescription.doses, tableLeft + columnWidth, medicineY);
                doc.fillColor('black').fontSize(12).text(prescription.duration+' days', tableLeft + 2 * columnWidth, medicineY);

                medicineTop += medicineTextHeight + 5; // Increase the top position for the next medicine by the height of the current medicine plus some extra spacing
            }

            // Move to the next line after each prescription entry
            doc.moveDown();

            
        });

        // Finalize PDF document
        doc.lineWidth(2); // Set the line width to make it bold
        doc.moveTo(50, 500); // Start the line at (50, startY)
        doc.lineTo(550, 500); // Draw the line to (550, endY)
        doc.stroke();
        doc.fillColor('black').fontSize(15).font('fonts/2bde80299318bf8ef0d13f69a83c7bc7.ttf').text(`${doctors[0].fullName}`, 450, 600);
        doc.fillColor('black').fontSize(14).font('Helvetica').text(`Dr. ${doctors[0].fullName}`, 420, 630);
        doc.fillColor('black').fontSize(14).font('Helvetica').text(` ${doctors[0].type}`, 420, 650);
        
        doc.end();
    } catch (error) {
        console.error('Error generating PDF:', error); 
        res.status(500).send('Error generating PDF');
    }
}
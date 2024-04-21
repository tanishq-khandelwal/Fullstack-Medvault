import AppError from '../utils/error.utils.js';
import sendEmail from '../utils/sendEmail.js';
import { MongoClient, ObjectId } from 'mongodb';

export const contactUs = async (req, res, next) => {
  try {
   
    // const { email } = req.body;

    const patientId = req.params.id;

    
    const client = new MongoClient(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    await client.connect();

   
    const database = client.db('test');
    const collection = database.collection('presciptions');
    const PatientCollection = database.collection('patients');
    const DoctorCollection = database.collection('users');
    const HealthCollection = database.collection('healthdetails');

    // Retrieve prescription data for the patient
    const data = await collection.find({ patient_id: patientId }).toArray();
    const patient = await PatientCollection.findOne({ _id: ObjectId.createFromHexString(patientId) });
    const health=await HealthCollection.find({ patientid: patientId }).toArray();


    const appointmentDate = new Date(health[0].appointmentDate);
    const formattedAppointmentDate = appointmentDate.toLocaleString();
    // Retrieve doctors associated with prescriptions
    let doctors = [];
    for (const prescription of data) {
      const docId = prescription.doc_id;
      const doctor = await DoctorCollection.findOne({ _id: ObjectId.createFromHexString(docId) });
      doctors.push(doctor);
    }

    // Close MongoClient connection
    await client.close();

    
    if (!data || data.length === 0) {
      console.log(`Prescriptions not found for patient ID: ${patientId}`);
      return res.status(404).send('Prescriptions not found');
    }

    
    const generatePDF= `https://fullstack-medvault.onrender.com/api/v1/pdf/invoice/${patientId}`
    const submitDocuments=`https://fullstack-medvault.onrender.com/api/v1/patient/form/${patientId}`

    // const generatePDF= `http://localhost:3000/api/v1/pdf/invoice/${patientId}`
    // const submitDocuments=`http://localhost:3000/api/v1/patient/form/${patientId}`

    const subject = 'Download your Prescription';
    const message = `<b>Dear ${patient.fullName}<b>,<br><br>
                            We hope this email finds you in good spirits.

                            Firstly, we extend our heartfelt wishes for your swift recovery and continued well-being.<br><br>
  
                            We are pleased to inform you that the doctor has finalized your diagnosis and your prescription is now ready for download. You can access it by clicking <a href=${generatePDF} target="_blank">Download Prescription</a><br><br>
  
                            We genuinely hope that you are satisfied with the doctor's diagnosis and treatment plan. Your health and comfort are our utmost priorities, and we strive to ensure that you receive the best possible care.<br>
                            Should you have any questions or concerns regarding your diagnosis or prescription, please don't hesitate to reach out to us. We are here to support you every step of the way.<br><br>
                            Upload your Documents by <a href=${submitDocuments} target="_blank">clicking here</a><br><br>
                            Thank you for entrusting us with your care. We wish you a speedy recovery and look forward to your continued progress.<br><br>
  

                            Your next appointment is scheduled on ${formattedAppointmentDate}<br><br>
                            Warm regards,<br><br>
  
                            Dr ${doctors[0].fullName}, <br>
                            ${doctors[0].type},<br>
                            Life Line Hospital,<br>
                            ${doctors[0].mobile}                                                                                             <br><br>


                            <span style="color: red;"><i>This email was generated through<b> MedVault</b></i></span>
                            `;

    
    await sendEmail(patient.email, subject, message);

    res.status(200).json({
      success: true,
      message: `Prescription details have been sent to ${patient.email} successfully`,
    });
  } catch (error) {

    console.error('Error processing request:', error);
    res.status(500).send('Error processing request');
  }
};
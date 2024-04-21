import HDetails from "../models/details.models.js";
import Patient from "../models/patient.models.js";
import AppError from "../utils/error.utils.js";
import User from "../models/user.models.js";

export const HealthDetails=async(req,res,next)=>{

    const{BP,sugar,symptoms,diagnosis,notes,appointmentDate,docid,patientid}=req.body;
    let details;

    try{

        const diagnosisValue = diagnosis !== undefined ? diagnosis : NaN;
        const symptomsValue=symptoms!==undefined ? symptoms:NaN;
        const notesValue=notes!==undefined ? notes:NaN;
        const BPValue=BP!==undefined ? BP:NaN;
        const sugarValue=sugar!==undefined ? sugar:NaN;
        const dateValue=appointmentDate!==undefined ? appointmentDate:NaN;

        details=await (HDetails.create({
            BP:BPValue,
            sugar:sugarValue,
            symptoms:symptomsValue,
            diagnosis:diagnosisValue,
            notes:notesValue,
            appointmentDate:dateValue,
            docid,
            patientid
        }))


        res.status(201).json({
            success: true,
            message: "Health Details Uploaded Successfully",
            details,
        });

    }catch(err){
        console.log(err);
        return next(new AppError("Error in Uploading Health Details",500))
    }

}

export const getPatientList = async (req, res, next) => {
    const { docid } = req.params;
    console.log(docid);

    try {
        // Find the doctor based on the provided docid
        const doctor = await User.findById(docid);

        if (!doctor) {
            return next(new AppError(`Doctor with id ${docid} not found`, 404));
        }

        // Find all patients associated with the doctor
        const patients = await Patient.find({ docid: docid });

        // Reverse the order of the patients array to sort it in descending order
        const sortedPatients = patients.reverse();

        // Populate health details for each patient
        const populatedPatients = await Promise.all(sortedPatients.map(async patient => {
            const patientWithDetails = { ...patient.toJSON() };
            const healthDetails = await HDetails.find({ patientid: patient._id });
            patientWithDetails.healthDetails = healthDetails;
            return patientWithDetails;
        }));

        res.status(200).json({
            success: true,
            message: `Patient List Fetched Successfully`,
            patientCount: populatedPatients.length,
            patients: populatedPatients,
        });

    } catch (err) {
        console.error(err);
        return next(new AppError(`Error Fetching Patient List for Doctor ${docid}`, 500));
    }
};

import AppError from "../utils/error.utils.js";
import Patient from "../models/patient.models.js";

export const addPatient = async (req, res, next) => {
  const { fullName, email, age, address, medication,docid,phone,gender} = req.body;
  let patient;

  if (!fullName || !email || !age || !address ||!docid || !phone || !gender) {
    return next(new AppError("All Fields are Required", 400));
  }

  try {
    // Set medication to NaN if not provided
    const medicationValue = medication !== undefined ? medication : NaN;

    patient = await Patient.create({
      fullName,
      email,
      age,
      address,
      docid,
      phone,
      gender,
      medication: medicationValue,
    });

    res.status(201).json({
      success: true,
      message: "Patient Registered Successfully",
      patient,
    });
  } catch (err) {
    console.error(err);
    return next(new AppError("Error Adding Patient", 500));
  }
};

export const getAllPatients = async (req, res, next) => {
  const {patientID}=req.body;
  try {
    const patients = await Patient.find({_id:patientID});
    res.status(200).json({
      success: true,
      count: patients.length,
      patients,
    });
  } catch (err) {
    return next(new AppError("Error Fetching Patients", 500));
  }
};


export const AllPatients = async (req, res, next) => {
  try {
    const patients = await Patient.find();
    res.status(200).json({
      success: true,
      count: patients.length,
      patients,
    });
  } catch (err) {
    return next(new AppError("Error Fetching Patients", 500));
  }
};

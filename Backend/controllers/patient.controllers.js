import AppError from "../utils/error.utils.js";
import Patient from "../models/patient.models.js";
import User from "../models/user.models.js";

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


    const user = await User.findOneAndUpdate(
      { _id: docid }, // Assuming docid is the ObjectId of the user
      { $push: { patients: patient._id } }, // Add the patient's ObjectId to the patients array
      { new: true } // Return the updated user document
    );

    if (!user) {
      return next(new AppError("Doctor not found", 404));
    }

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

import AppError from "../utils/error.utils.js";
import Prescription from "../models/prescription.models.js";

export const generatePrescription=async(req,res,next)=>{

    const{medicine_names,doses,doc_id,patient_id,duration}=req.body;
    let prescription;

    if(!medicine_names || !doses || !doc_id || !patient_id || !duration){
        return next(new AppError("All fields Required", 400));
    }

    try{
        prescription=await(Prescription.create({
            medicine_names,
            doses,
            doc_id,
            patient_id,
            duration
            
        }))


        res.status(201).json({
            success: true,
            message: "Prescription Details Submitted Successfully",
            prescription,
        });
    }catch(err){
        console.log(err);
        return next(new AppError("An Error Occured", 400));
        

    }
}
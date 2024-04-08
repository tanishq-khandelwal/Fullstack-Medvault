import { Schema, model } from "mongoose";

const prescriptionSchema=new Schema(
{


    medicine_names:{
        type:String,
        required:[true,"Medicine Name is Required"]
    },

    doses:{
        type:String,
        required:[true,"Medicine Name is Required"]
    },

    doc_id:{
        type:String,
        required:[true,"Medicine Name is Required"]
    },

    patient_id:{
        type:String,
        required:[true,"Medicine Name is Required"]
    },

    duration:{
        type:Number,
        required:[true,"Medicine Duration is required"]
    }
}
)

const Prescription=model("presciption",prescriptionSchema);
export default Prescription;
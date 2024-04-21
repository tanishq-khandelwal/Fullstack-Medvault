import { Schema, model } from "mongoose";

const patientSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Name is Required"],
    trim: true,
    maxLength: [50, "Name cannot exceed 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    trim: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
    lowercase: true,
  },
  age: {
    type: Number,
    required: [true, "Age is Required"],
  },
  phone: {
    type: Number,
    required: [true, "phone is Required"],
  },
  gender: {
    type: String,
    required: [true, "Gender is Required"],
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
  medication: {
    type: String,
    trim: true,
  },
  docid: {
    type: String,
    required: [true, "docid is required"],
  },
  
},{
  timestamps:true,
});

const Patient = model("Patient", patientSchema);
export default Patient;

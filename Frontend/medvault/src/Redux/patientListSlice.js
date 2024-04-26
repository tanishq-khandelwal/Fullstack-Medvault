import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../helper/axiosInstance";
import { PiThermometer } from "react-icons/pi";

const initialState = {
  patients: [],
  documents:[],
  error: null,
};

export const getPatient = createAsyncThunk(
  "patient/patientList",
  async (data) => {
    try {
      const promise = await axiosInstance.post(`patient/patientList/${data}`);
      const loadingToast = toast.loading("Loading Patient List");
      loadingToast;
      const res = await promise;
      toast.dismiss(loadingToast);
      // toast.success(res.data.message);
      return res.data.patients;
    } catch (error) {
      toast.error("An Error Occurred");
      toast.error(error?.response?.data?.message);
      //   return rejectWithValue(error?.response?.data?.message);
    }
  }
);

export const HealthDetails = createAsyncThunk(
  "patient/HealthDetails",
  async (data) => {
    try {
      const promise = await axiosInstance.post("patient/healthDetails", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Redirecting to Prescription Page.....");
      return promise.data;
    } catch (error) {
      toast.error("An Error Occured");
    }
  }
);


export const addPrescription=createAsyncThunk("patient/prescription",async(data)=>{
  try{
    const promise =await axiosInstance.post("patient/submitPresciption",data,{
      headers: {
        "Content-Type": "application/json",
      },
    });

    toast.success("Prescription Details Saved");
    return promise.data;
  }catch(error){
    toast.error("An Error Occured")
  }
})

export const sendMail=createAsyncThunk("patient/sendMail",async(data)=>{
  try{
    const promise=await axiosInstance.post(`send/email/${data}`)
    toast.success(promise.data.message)
    return promise.data;
  }catch(error){
    toast.error("An Error Occured while sending Mail")
  }
})


export const getDocuments = createAsyncThunk("patient/documents", async (data) => {
  try {
    const promise = await axiosInstance.get(`patient/allDocuments/${data}`);
    const loading = toast.loading("Loading");
    toast.dismiss(loading); // Dismiss loading toast regardless of promise data existence
    toast.success("Documents fetched successfully");
    return promise.data;
  } catch (error) {
    toast.error("No Documents Available");
    throw error; // Rethrow the error to handle it in the component
  }
});


const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPatient.fulfilled, (state, action) => {
        state.patients = action.payload; // Access action.payload.patients instead of action.payload
        state.error = null; // Reset error state on success
      })

      .addCase(getDocuments.fulfilled,(state,action)=>{
        state.documents=action.payload;
      })

      .addCase(getPatient.rejected, (state, action) => {
        state.error = action.payload;
        // console.error("Error:", Error);
      })


      
  },
});

export const {} = patientSlice.actions;
export default patientSlice.reducer;

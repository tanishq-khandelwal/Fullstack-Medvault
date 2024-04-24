import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../helper/axiosInstance";

const initialState = {
  doctors: [],
  error: null,
};

export const getDoctors=createAsyncThunk("reception/doctorList",async(data)=>{
    try{
        const promise=await axiosInstance.get('user/All');
        const loadingToast=toast.loading("Loading Data");
        loadingToast;
        const res=await promise;
        toast.dismiss(loadingToast);
        return res.data;

    }catch(error){
        toast.error("An Error Occurred")
    };
})

export const addPatient=createAsyncThunk("reception/patientInfo",async(data)=>{
    try{
        const promise=await axiosInstance.post('/patient/addPatient', data, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          const loadingToast=toast.loading("Loading Data");
          loadingToast;
          const res=await promise;
          toast.dismiss(loadingToast);
          toast.success("Patient Registered")
          return res.data;
    }catch(Error){
        toast.error("An Error Occured");
    }
})



const receptionSlice=createSlice({
    name:"reception",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getDoctors.fulfilled,(state,actions)=>{
            state.doctors=actions.payload

        })
    }
})

export const{}=receptionSlice.actions;
export default receptionSlice.reducer;

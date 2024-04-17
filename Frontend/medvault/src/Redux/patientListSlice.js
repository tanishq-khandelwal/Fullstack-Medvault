import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../helper/axiosInstance";

const initialState = {
  patients: JSON.parse(localStorage.getItem("patientList")) || [],
  error: null, // Add error field to handle errors
};

export const getPatient = createAsyncThunk("patient/patientList",async(data)=>{
    try {
      const promise = await axiosInstance.post(`patient/patientList/${data}`);
    //   console.log(`${data.id}`);
    const loadingToast = toast.loading("Loading Patient List");
  
    // Wait for the promise to resolve
    const res = await promise;

    // Close the loading toast
    toast.dismiss(loadingToast);

    // Display success toast with the message from the response
    toast.success(res.data.message);

    // Return the data from the response
    return res.data;
    } catch (error) {
      toast.error("An Error Occurred");
      toast.error(error?.response?.data?.message);
    //   return rejectWithValue(error?.response?.data?.message);
    }
}
);

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getPatient.fulfilled, (state, action) => {
        // Update patients array immutably
        localStorage.setItem("patientList", JSON.stringify(action.payload.patients));
        state.patients = action.payload.patients; // Access action.payload.patients instead of action.payload
        state.error = null; // Reset error state on success
        
      })
      
      .addCase(getPatient.rejected, (state, action) => {
        // Update error state
        state.error = action.payload;
        // console.error("Error:", Error);
      });
  },
});

export default patientSlice.reducer;

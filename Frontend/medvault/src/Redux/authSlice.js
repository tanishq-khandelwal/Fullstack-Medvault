import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../helper/axiosInstance";

const initialState = {
  isLoggedIn: localStorage.getItem('isLoggedIn') || false,
  role: localStorage.getItem('role') || "",
  data: localStorage.getItem('data') || {}
};

export const createAccount = createAsyncThunk('auth/signup', async (data) => {
    try {
      console.log(data);
      const promise = await axiosInstance.post('reception/register', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      // Display loading toast
      const loadingToast = toast.loading("Wait! Creating Your account");
  
      // Wait for the promise to resolve
      const res = await promise;
  
      // Close the loading toast
      toast.dismiss(loadingToast);
  
      // Display success toast with the message from the response
      toast.success(res.data.message);
  
      // Return the data from the response
      return res.data;
    } catch (error) {
      // Display error toast
      toast.error(error?.response?.data?.message);
  
      // Throwing error here so that the rejectedWithValue can catch it
      throw error;
    }
  });


  export const createAccountDoc = createAsyncThunk('auth/signup', async (data) => {
    try {
      console.log(data);
      const promise = await axiosInstance.post('user/register', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      // Display loading toast
      const loadingToast = toast.loading("Wait! Creating Your account");
  
      // Wait for the promise to resolve
      const res = await promise;
  
      // Close the loading toast
      toast.dismiss(loadingToast);
  
      // Display success toast with the message from the response
      toast.success(res.data.message);
  
      // Return the data from the response
      return res.data;
    } catch (error) {
      // Display error toast
      toast.error(error?.response?.data?.message);
  
      // Throwing error here so that the rejectedWithValue can catch it
      throw error;
    }
  });
  

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
});

// export const {}=authSlice.actions;
export default authSlice.reducer;

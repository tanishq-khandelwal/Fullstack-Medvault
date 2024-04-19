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
  

     
      const successToast = toast.success(res.data.message);

      // Wait for the success toast to be displayed
      await successToast;
  
      // Close the loading toast
      toast.dismiss(loadingToast);
  
      // Return the data from the response
      return res.data;
    } catch (error) {
      // Display error toast
      toast.error(error?.response?.data?.message);
  
      // Throwing error here so that the rejectedWithValue can catch it
      throw error;
    }
  });
  


  export const LoginUser = createAsyncThunk('auth/login', async (data) => {
    try {
      const promise = axiosInstance.post('user/login', data, {
        headers: {
          'Content-Type': 'application/json'
        }});
      const res = await toast.promise(promise, {
        loading: "Loading.....",
        success: (data) => {
          return data?.data?.message;
        },
        // error: toast.error("Failed to Login"), // Fix the placement of closing parenthesis
      });
  
      return res.data;
    } catch (error) {
      toast.error(error.message);
      throw error; // Throwing error here so that the rejectedWithValue can catch it
    }
  });


  export const LoginReception = createAsyncThunk('auth/loginr', async (data) => {
    try {
      const promise = axiosInstance.post('reception/login', data, {
        headers: {
          'Content-Type': 'application/json'
        }});
      const res = await toast.promise(promise, {
        loading: "Loading.....",
        success: (data) => {
          return data?.data?.message;
        },
        // error: toast.error("Failed to Login"), // Fix the placement of closing parenthesis
      });
  
      return res.data;
    } catch (error) {
      toast.error(error.message);
      throw error; // Throwing error here so that the rejectedWithValue can catch it
    }
  });


  export const logout = createAsyncThunk('auth/logout', async (_, { dispatch }) => {
    try {
      // Make the logout request to the server
      const response = await axiosInstance.post('user/logout');
      // Clear localStorage
      localStorage.clear();
      // Display success toast
      toast.success("Logout successful");
      return response.data; // Return data if needed
    } catch (error) {
      // Display error toast
      toast.error("Failed to logout");
      // Handle errors
      throw error;
    }
  });
  
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder
      .addCase(LoginUser.fulfilled,(state,action)=>{
      localStorage.setItem("data",JSON.stringify(action?.payload?.user));
      localStorage.setItem("isLoggedIn",true),
      localStorage.setItem("role",action?.payload?.user?.role);
      localStorage.setItem("id",action?.payload?.user?._id)
      state.isLoggedIn=true,
      state.data=action?.payload?.user,
      state.role=action?.payload?.user?.role
    })

      .addCase(logout.fulfilled,(state,action)=>{
        localStorage.clear();
        state.isLoggedIn=false;
        state.data={};
      })

      .addCase(LoginReception.fulfilled,(state,action)=>{
        localStorage.setItem("data",JSON.stringify(action?.payload?.receptionist));
        localStorage.setItem("isLoggedIn",true),
        localStorage.setItem("role",action?.payload?.receptionist?.role);
        localStorage.setItem("id",action?.payload?.receptionist?._id)
        state.isLoggedIn=true,
        state.data=action?.payload?.receptionist,
        state.role=action?.payload?.receptionist?.role

      })
  }
});

// export const {}=authSlice.actions;
export const {} = authSlice.actions;
export default authSlice.reducer;

import {configureStore} from "@reduxjs/toolkit"
import authSliceReducer from './authSlice';
import patientListSlice from "./patientListSlice";
const store =configureStore({
    reducer:{
        auth:authSliceReducer,
        patient:patientListSlice
    },
    devTools:true
});

export default  store;
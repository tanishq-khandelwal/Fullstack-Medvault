import {configureStore} from "@reduxjs/toolkit"
import authSliceReducer from './authSlice';
import patientListSlice from "./patientListSlice";
import receptionSlice from "./receptionSlice";
const store =configureStore({
    reducer:{
        auth:authSliceReducer,
        patient:patientListSlice,
        reception:receptionSlice
    },
    devTools:true
});

export default  store;
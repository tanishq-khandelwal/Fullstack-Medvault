import { Routes, Route } from "react-router-dom";
import React from "react";

import { Provider } from 'react-redux';
import store from "./Redux/store.js"; // Import your Redux store
// import Layout from "./layout/Layout.jsx";
import HomePage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/Signup.jsx";
import PatientList from "./pages/Patient/patientList.jsx";
import Contact from "./pages/contact.jsx";
import Dashboard from "./pages/dashboard.jsx";
import Profile from "./pages/profile.jsx";
import PatientDetails from "./pages/Patient/healthDetails.jsx";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/patientList" element={<PatientList/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/patient/healthDetails" element={<PatientDetails/>}/>

      </Routes>
    </Provider>
  );
}

export default App;

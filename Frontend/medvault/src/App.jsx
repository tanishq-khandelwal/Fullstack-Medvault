import { Routes, Route } from "react-router-dom";
import React from "react";

import { Provider } from "react-redux";
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
import NotFound from "./pages/notFound.jsx";
import NotRequireAuth from "./pages/Auth/notRequireAuth.jsx";
import RequireAuth from "./pages/Auth/requireAuth.jsx";
import AccessDenied from "./pages/denied.jsx";
import PrescriptionForm from "./pages/Patient/prescription.jsx";
import DoctorList from "./pages/Receptionist/doctorList.jsx";
import AddPatient from "./pages/Receptionist/addPatient.jsx";
import PatientDocuments from "./pages/Patient/patientDocuments.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/denied" element={<AccessDenied />} />
        <Route path="/contact" element={<Contact />} />


        <Route element={<NotRequireAuth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={["RECEPTIONIST"]} />}>
          <Route path="/doctorList" element={<DoctorList/>}/>
          <Route path="/patientInfo" element={<AddPatient/>}/>



        </Route>
        <Route path="/patient/prescription" element={<PrescriptionForm />} />
        <Route element={<RequireAuth allowedRoles={["DOCTOR"]} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/patientList" element={<PatientList />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/patient/healthDetails" element={<PatientDetails />} />
          <Route path="/patient/documents" element={<PatientDocuments />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

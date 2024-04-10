import { Routes, Route } from "react-router-dom";
import React from "react";

import { Provider } from 'react-redux';
import store from "./Redux/store.js"; // Import your Redux store
// import Layout from "./layout/Layout.jsx";
import HomePage from "./pages/Homepage.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/Signup.jsx";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </Provider>
  );
}

export default App;

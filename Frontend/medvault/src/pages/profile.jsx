import React, { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import toast from "react-hot-toast";
import ProfileImg from "../assets/ProfileImage.svg";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

const Profile = () => {
  const userData = localStorage.getItem("data");
  const user = userData ? JSON.parse(userData) : null;

  // State for status (available or not available)
  const [status, setStatus] = useState("");
  const [saveEnabled, setSaveEnabled] = useState(false);

  const st = useSelector((state) => state.auth.data);

  useEffect(() => {
    setStatus(st.status );
  }, [st.status]);

  // Function to handle toggle status change
  const handleToggleStatus = () => {
    setStatus((prevStatus) =>
      prevStatus === "Available" ? "Not Available" : "Available"
    );
    setSaveEnabled(true); // Enable save button when status changes
  };

  // Function to handle save button click
  const handleSave = () => {
    // Perform save action here
    toast.success("Profile Status Saved Successfully");
    setSaveEnabled(false); // Disable save button after saving
  };

  return (
    <Layout>
      <div className="pt-5 w-full h-full flex justify-center items-center">
        <div className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] flex flex-col items-center gap-6 bg-blue-100 rounded-3xl p-10 shadow-xl border border-[#82818166]">
          <div className="w-[150px] h-[150px] flex justify-center items-center rounded-full border border-black">
            <img className="w-[100%]" src={ProfileImg} alt="Profile" />
          </div>
          <h1 className="font-bold text-[24px]">
            {user?.fullName || "-----------------"}
          </h1>
          <p>{user?.type || "-------------"}</p>
          <div className="flex justify-center items-center gap-4">
            <MdEmail className="w-5" />
            <p>{user?.email || "------------"}</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <FaPhoneAlt />
            <p>{user?.mobile || "------------"}</p>
          </div>
          <div className="flex w-full justify-center">
            <p>Status:</p>
            <input
              type="checkbox"
              className="toggle toggle-success ml-10"
              checked={status === "Available"}
              onChange={handleToggleStatus}
            />
          </div>
          <button
            className={`bg-red-700 text-white px-6 py-2 rounded-md ${
              saveEnabled ? "" : "opacity-50 cursor-not-allowed"
            }`}
            onClick={handleSave}
            disabled={!saveEnabled}
          >
            Save
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;

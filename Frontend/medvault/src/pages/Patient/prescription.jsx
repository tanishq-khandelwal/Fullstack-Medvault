import React, { useContext, useEffect, useState } from "react";
import ProfileImage from "../../assets/ProfileImage.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Layout from "../../layout/Layout";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addPrescription, sendMail } from "../../Redux/patientListSlice";


// Define the PrescriptionForm component
const PrescriptionForm = () => {
  // Initialize state variables
  const dispatch=useDispatch();
  const [prescriptions, setPrescriptions] = useState([]);
  const navigate = useNavigate();

  // Fetch patient data
  const location = useLocation();
  const patient = location.state;  

  // Fetch doctor data
  const doctor = localStorage.getItem('data');
  const doc = JSON.parse(doctor);

  // Function to add a new prescription item
  const handleAdd = () => {
    setPrescriptions([
      ...prescriptions,
      { tablet: "", timeDoses: [], mealDoses: [], duration: "" },
    ]);
  };

  const patientId=patient._id;

  // Function to send prescriptions
  const handleSend = async () => {
    try {
      for (const prescription of prescriptions) {
        const doses = `${prescription.timeDoses.join(", ")}, ${prescription.mealDoses.join(", ")}`;
        const data = {
          medicine_names: prescription.tablet,
          doses: doses,
          doc_id: doc._id, // Assuming user is defined somewhere
          patient_id: patient._id,
          duration: prescription.duration,
        };
        await dispatch(addPrescription(data));
      }
      const res = await dispatch(sendMail(patientId));
      if (res) {
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error adding prescription:", error);
    }
  };

  // Function to handle changes in tablet name
  const handleTabletChange = (index, value) => {
    const updatedPrescriptions = [...prescriptions];
    updatedPrescriptions[index].tablet = value;
    setPrescriptions(updatedPrescriptions);
  };

  // Function to handle changes in prescription duration
  const handleDurationChange = (index, value) => {
    const updatedPrescriptions = [...prescriptions];
    updatedPrescriptions[index].duration = value;
    setPrescriptions(updatedPrescriptions);
  };

  // Function to handle changes in time doses
  const handleTimeDoseChange = (index, dose) => {
    const updatedPrescriptions = [...prescriptions];
    if (updatedPrescriptions[index].timeDoses.includes(dose)) {
      updatedPrescriptions[index].timeDoses = updatedPrescriptions[index].timeDoses.filter((item) => item !== dose);
    } else {
      updatedPrescriptions[index].timeDoses.push(dose);
    }
    setPrescriptions(updatedPrescriptions);
  };

  // Function to handle changes in meal doses
  const handleMealDoseChange = (index, dose) => {
    const updatedPrescriptions = [...prescriptions];
    if (updatedPrescriptions[index].mealDoses.includes(dose)) {
      updatedPrescriptions[index].mealDoses = updatedPrescriptions[index].mealDoses.filter((item) => item !== dose);
    } else {
      updatedPrescriptions[index].mealDoses.push(dose);
    }
    setPrescriptions(updatedPrescriptions);
  };


  // Function to handle deletion of prescription item
  const handleDelete = (index) => {
    const updatedPrescriptions = [...prescriptions];
    updatedPrescriptions.splice(index, 1);
    setPrescriptions(updatedPrescriptions);
  };

  // Return the JSX content
  return (
    <Layout>
      <div className="pt-20">
        <div className="flex justify-evenly items-start">
          <div className=" flex justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center border rounded-3xl p-20 gap-5">
              <div className="flex flex-col justify-center items-center gap-3">
                <h1 className="font-bold text-[20px]">Patient Information</h1>
                <img src={ProfileImage} alt="Profile" className="h-[100px] w-[100px]" />
                <p className="font-bold text-[16px]">{patient.fullName}</p>
                <p>Last Visited: ----------- </p>
                <div className="flex justify-center items-center gap-8">
                  <div className="w-[100px] flex flex-col justify-center items-center bg-blue-500 text-white p-1 rounded-xl">
                    <h1>Age</h1>
                    <p>{patient.age}</p>
                  </div>
                  <div className="w-[100px] flex flex-col justify-center items-center bg-blue-500 text-white p-1 rounded-xl">
                    <h1>Gender</h1>
                    <p>{patient.gender}</p>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col justify-center gap-5">
                <div className="w-full flex flex-col gap-2">
                  <p>Phone No.</p>
                  <div className="flex justify-start items-center bg-blue-100 p-1.5 rounded-xl">
                    <FaPhoneAlt className="ml-3 w-[16px] mr-4" />
                    {patient.phone}
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <p>Email Id</p>
                  <div className="flex justify-start items-center bg-blue-100 p-1.5 rounded-xl">
                    <MdEmail className="ml-3 w-[16px] mr-2" />
                    {patient.email}
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2">
                  <p>Visited doctor name</p>
                  <div className="flex items-center bg-blue-100 p-1.5 rounded-xl justify-center">
                    Dr. {doc.fullName}
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
                >
                  <Link to="/">View Documents</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="w-[60%] h-[820px] p-5 flex flex-col justify-start items-center border rounded-3xl overflow-y-auto">
            <h1 className="font-bold text-[24px] mb-4">Prescription</h1>
            {prescriptions.map((prescription, index) => (
              <div
                key={index}
                className="w-full bg-slate-100 p-5 rounded-3xl mb-5 border shadow-xl border-[#82818166]"
              >
                <div className="flex justify-between">
                  <h2 className="mb-3 text-md font-medium text-gray-900">
                    Tablet {index + 1}
                  </h2>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => handleDelete(index)}
                      className="text-red-600 hover:text-red-800 h-10 items-center justify-center"
                    >
                      &#10005;
                    </button>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name={`tablet-${index}`}
                    id={`tablet-${index}`}
                    value={prescription.tablet}
                    onChange={(e) => handleTabletChange(index, e.target.value)}
                    placeholder="Enter tablet name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-1 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    name={`duration-${index}`}
                    id={`duration-${index}`}
                    value={prescription.duration}
                    onChange={(e) => handleDurationChange(index, e.target.value)}
                    placeholder="Enter duration in days"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="flex justify-between items-start">
                  <p className="font-medium">Time Doses</p>
                  <div className="flex justify-start items-center gap-8">
                    {["Morning", "Afternoon", "Evening"].map((dose) => (
                      <div key={dose} className="flex items-center mb-4">
                        <input
                          id={`time-dose-${index}-${dose}`}
                          type="checkbox"
                          checked={prescription.timeDoses.includes(dose)}
                          onChange={() => handleTimeDoseChange(index, dose)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label
                          htmlFor={`time-dose-${index}-${dose}`}
                          className="ms-2 text-sm font-medium text-gray-900"
                        >
                          {dose}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-start mt-6">
                  <p className="font-medium">Meal Doses</p>
                  <div className="flex justify-start items-center gap-8">
                    {["Before meal", "After meal"].map((dose) => (
                      <div key={dose} className="flex items-center mb-4">
                        <input
                          id={`meal-dose-${index}-${dose}`}
                          type="checkbox"
                          checked={prescription.mealDoses.includes(dose)}
                          onChange={() => handleMealDoseChange(index, dose)}
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label
                          htmlFor={`meal-dose-${index}-${dose}`}
                          className="ms-2 text-sm font-medium text-gray-900"
                        >
                          {dose}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-center items-center gap-6 mt-5">
              <button
                type="button"
                onClick={handleAdd}
                className="w-[100px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              >
                Add
              </button>
              <button
                type="button"
                onClick={handleSend}
                className="w-[100px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

// Export the PrescriptionForm component
export default PrescriptionForm;

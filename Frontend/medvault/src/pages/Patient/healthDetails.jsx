import React, { useState, useEffect } from "react";
import { Link, json, useLocation, useNavigate } from "react-router-dom";
import ProfileImage from "../../assets/ProfileImage.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Layout from "../../layout/Layout";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { HealthDetails } from "../../Redux/patientListSlice";

const PatientDetails = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const location = useLocation();
  const patient = location.state;

  const doctor=localStorage.getItem('data');
  const doc=JSON.parse(doctor);

  const [HealthData, setHealthData] = useState({
    BP: "",
    sugar: "",
    symptoms: "",
    diagnosis: "",
    notes: "",
    docid: "",
    patientid: "",
    appointmentDate: new Date(),
  });


  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setHealthData({
      ...HealthData,
      [name]: value,
    });
  };

  const saveHealthDetail=async(event)=>{

    event.preventDefault();

    const formData=new FormData();
    formData.append("BP",HealthData.BP);
    formData.append("sugar",HealthData.sugar);
    formData.append("symptoms",HealthData.symptoms);
    formData.append("diagnosis",HealthData.diagnosis);
    formData.append("notes",HealthData.notes);
    formData.append("docid",doc._id);
    formData.append("patientid",patient._id);
    formData.append("appointmentDate",HealthData.appointmentDate);


    console.log(formData);

    const response=await dispatch(HealthDetails(formData));
    if(response.payload?.success){
      navigate("/patient/prescription",{state:patient});
    }


    setHealthData({
    BP: "",
    sugar: "",
    symptoms: "",
    diagnosis: "",
    notes: "",
    appointmentDate: new Date(),
    })
  }


  return (
    <Layout>
      <div className="flex justify-center pt-12">
        {/* Side by side divs */}
        <div className="w-full flex gap-10 justify-center">
          {/* Patient div */}
          <div className="flex flex-col justify-center items-center border rounded-3xl p-10 gap-5 shadow-xl">
            <div className="flex flex-col justify-center items-center gap-3 w-[100%]">
              <h1 className="font-bold text-[20px]">Patient Information</h1>
              <img src={ProfileImage} alt="Profile" className="h-[100px] w-[100px]" />
              <p className="font-bold text-[16px]">{patient.fullName}</p>
              <p>Last Visited: ----------- </p>
              <div className="flex justify-center items-center gap-8">
                <div className="w-[100px] flex flex-col justify-center items-center bg-blue-500 text-white p-1 rounded-xl">
                  <h1>Age</h1>
                  <p>{patient.age}</p>
                </div>
                <div className="w-[110px] flex flex-col justify-center items-center bg-blue-500 text-white p-1 rounded-xl">
                  <h1>Gender</h1>
                  <p>{patient.gender}</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center gap-5">
              <div className="w-full flex flex-col gap-2">
                <p>Phone No.</p>
                <div className="flex justify-start items-center bg-blue-100 p-1.5 rounded-xl">
                  {/* <img className="ml-3 w-[16px] mr-4" src={""} alt="Phone" /> */}
                  <FaPhoneAlt className="ml-3 w-[16px] mr-4"/>
                  {patient.phone}
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <p>Email Id</p>
                <div className="flex justify-start items-center bg-blue-100 p-1.5 rounded-xl">
                  {/* <img className="ml-3 w-[16px] mr-4" src={""} alt="Phone" /> */}
                  <MdEmail className="ml-3 w-[16px] mr-2"/>
                  {patient.email}
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <p>Doctor name</p>
                <div className="flex justify-start items-center bg-blue-100 p-1.5 rounded-xl">
                  {/* <img className="ml-3 w-[16px] mr-4" src={""} alt="Phone" /> */}
                  Dr. {doc.fullName}
                </div>
              </div>
            </div>
            <div className="mt-3">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-2 text-center"
              >
                <Link to="/">View Documents</Link>
              </button>
            </div>
          </div>

          {/* Second div */}
          <div className="w-[65%] h-[700px] p-5 flex flex-col justify-start items-center border rounded-3xl overflow-y-auto shadow-xl">
            <h1 className="font-bold text-[20px] mb-4 font-sans">
              Patient Health Details
            </h1>
            <form
              className="w-full space-y-4 md:space-y-6"
              onSubmit={saveHealthDetail}
            >
              <div className="flex gap-8">
                <div>
                  <label
                    htmlFor="BP"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    BP*
                  </label>
                  <input
                    type="text"
                    name="BP"
                    id="BP"
                    value={HealthData.BP}
                    onChange={handleUserInput}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                    placeholder="Enter BP (mmHg)"
                  />
                </div>
                <div>
                  <label
                    htmlFor="sugar"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Sugar*
                  </label>
                  <input
                    type="text"
                    name="sugar"
                    id="sugar"
                    value={HealthData.sugar}
                    onChange={handleUserInput}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                    placeholder="Enter sugar (mmol/L)"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="symptoms"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Symptoms
                </label>
                <input
                  type="text"
                  name="symptoms"
                  id="symptoms"
                  value={HealthData.symptoms}
                  onChange={handleUserInput}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="Enter symptoms"
                />
              </div>
              {/* Div for Diagnosis */}
              <div>
                <label
                  htmlFor="diagnosis"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Diagnosis
                </label>
                <input
                  type="text"
                  name="diagnosis"
                  id="diagnosis"
                  value={HealthData.diagnosis}
                  onChange={handleUserInput}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="Enter Diagnosis"
                />
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Enter Additional Notes
                </label>
                <input
                  type="text"
                  name="notes"
                  id="notes"
                  value={HealthData.notes}
                  onChange={handleUserInput}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="Enter Additional Notes"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="appointmentDate"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Next Appointment Date and Time
                </label>
                <DatePicker
                //   selected={formData.appointmentDate}
                onChange={handleUserInput}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="MMMM d, yyyy h:mm aa"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholderText="DD/MM/YY  HH:MM"
                />
              </div>
                  <div className="flex justify-center items-center pt-8">
              <button
                type="submit"
                className=" w-[30%] text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Prescription
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </Layout>
  );
};

export default PatientDetails;

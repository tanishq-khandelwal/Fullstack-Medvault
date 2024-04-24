import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getPatient } from "../Redux/patientListSlice";
import CountingAnimation from "./countingAnimation";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const { patients } = useSelector((state) => state.patient);
  const [searchText, setSearchText] = useState("");
  const docId = localStorage.getItem("id").toString();
  // if (idItem) {
  // const docId = idItem.toString();
  // console.log(docId);
  // }

  useEffect(() => {
    if (docId) {
      dispatch(getPatient(docId));
    }
  }, [dispatch, docId]);
  // Filter patients based on search text
  // const patients = patients.filter((patient) =>
  //   patient.fullName.toLowerCase().includes(searchText.toLowerCase())
  // );

  const handleViewDetails = () => {
    const firstPatient = patients.length > 0 ? patients[0] : null;
    navigate("/patient/healthDetails", { state: firstPatient });
  };

  return (
    <Layout>
      <div className="flex">
        <div className="w-full flex justify-center mt-10">
          <div className="w-full flex flex-col justify-around items-center gap-5 mx-5">
            <div className="w-full flex justify-around items-center">
              <div className="p-10 flex flex-col justify-center items-center bg-slate-200 rounded-3xl border border-[#82818166] shadow-xl">
                <>
                  <h1 className="font-bold text-[24px]">
                    {patients.length > 0
                      ? patients[0].fullName
                      : "No Patient Found"}
                  </h1>
                  <div className="flex justify-center items-center gap-10 mt-3">
                    <div className="w-[100px] flex flex-col justify-center items-center bg-blue-500 text-white p-1 rounded-xl ">
                      <h1>Age</h1>
                      <p>
                        {patients.length > 0
                          ? patients[0].age
                          : "-"}
                      </p>
                    </div>
                    <div className="w-[100px] flex flex-col justify-center items-center bg-blue-500 text-white p-1 rounded-xl h-14">
                      <p>
                        {patients.length > 0
                          ? patients[0].gender
                          : "-"}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center items-center mt-4">
                    <button
                      type="button"
                      className="text-white bg-blue-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 text-center transform transition-transform hover:scale-110"
                      onClick={handleViewDetails
                      }
                    >
                      <p>View</p>
                    </button>
                  </div>
                </>
              </div>
              <div className="p-10 flex flex-col justify-center items-center bg-slate-200 rounded-3xl border border-[#82818166] shadow-xl">
                <h1 className="font-bold text-[24px]">Today Patient Count</h1>
                <h1 className="font-bold text-[36px] text-sky-500">
                  {patients.length}
                </h1>
              </div>

              <CountingAnimation totalCount={patients.length} />
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-5">
              <div className="w-full flex justify-around items-center gap-3">
                <div className="w-full">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Search..."
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 text-center"
                  >
                    Refresh
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-around items-center">
                <p className="text-sky-500">Patient Name</p>
                <p className="text-sky-500">Gender</p>
                <p className="text-sky-500">Age</p>
                <p className="text-sky-500">Mobile Number</p>
              </div>
              {patients.length > 0 ? (
                patients.map((patient) => (
                  <div
                    key={patient._id}
                    className="w-full flex justify-around items-center bg-blue-100 p-3 rounded-xl gap-4"
                  >
                    <div className="w-[10rem] ">
                    <p className="pr-2">{patient.fullName}</p>
                  </div>
                  <p className="flex justify-center text-center w-[10rem]">{patient.gender}</p>
                  <p className="flex justify-center text-center w-[10rem]">{patient.age}</p>
                  <p className="flex justify-center text-center w-[10rem]">{patient.phone}</p>
                  </div>
                ))
              ) : (
                <p className="text-red-500">No Patient Found</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Layout>
  );
};

export default Dashboard;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getPatient } from "../Redux/patientListSlice";

const Dashboard = () => {
  const dispatch=useDispatch();
  const { patients } = useSelector((state) => state.patient);
  const [searchText, setSearchText] = useState("");
  const docId = localStorage.getItem('id').toString();
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
  const filteredPatients = patients.filter((patient) =>
    patient.fullName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Layout>
      <div className="flex">
        <div className="w-full flex justify-center mt-10">
          <div className="w-full flex flex-col justify-around items-center gap-5 mx-5">
            <div className="w-full flex justify-around items-center">
              <div className="p-10 flex flex-col justify-center items-center bg-slate-200 rounded-3xl">
                <>
                  <h1 className="font-bold text-[24px]">
                    {filteredPatients.length > 0
                      ? filteredPatients[0].fullName
                      : "No Patient Found"}
                  </h1>
                  <div className="flex justify-center items-center gap-10 mt-3">
                    <div className="w-[100px] flex flex-col justify-center items-center bg-blue-500 text-white p-1 rounded-xl">
                      <h1>Age</h1>
                      <p>
                        {filteredPatients.length > 0
                          ? filteredPatients[0].age
                          : "-"}
                      </p>
                    </div>
                    <div className="w-[100px] flex flex-col justify-center items-center bg-blue-500 text-white p-1 rounded-xl h-14">
                      <p>
                        {filteredPatients.length > 0
                          ? filteredPatients[0].gender
                          : "-"}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center items-center mt-4">
                    <button
                      type="button"
                      className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 text-center"
                      onClick={() => {}}
                    >
                      <Link to={"/patient-details"}>View</Link>
                    </button>
                  </div>
                </>
              </div>
              <div className="p-10 flex flex-col justify-center items-center bg-slate-200 rounded-3xl">
                <h1 className="font-bold text-[24px]">Today Patient Count</h1>
                <h1 className="font-bold text-[36px] text-sky-500">{filteredPatients.length}</h1>
              </div>
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
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 text-center"
                  >
                    Search
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-around items-center">
                <p className="text-sky-500">Patient Name</p>
                <p className="text-sky-500">Gender</p>
                <p className="text-sky-500">Age</p>
                <p className="text-sky-500">Mobile Number</p>
              </div>
              {filteredPatients.length > 0 ? (
                filteredPatients.map((patient) => (
                  <div
                    key={patient._id}
                    className="w-full flex justify-around items-center bg-blue-100 p-3 rounded-xl gap-4"
                  >
                    <p>{patient.fullName}</p>
                    <p>{patient.gender}</p>
                    <p>{patient.age}</p>
                    <p>{patient.phone}</p>
                  </div>
                ))
              ) : (
                <p className="text-red-500">No Patient Found</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </Layout>
  );
};

export default Dashboard;

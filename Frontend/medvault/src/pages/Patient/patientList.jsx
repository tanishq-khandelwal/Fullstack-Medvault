import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { getPatient } from "../../Redux/patientListSlice";


const PatientList = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  
  const docId = useSelector((state) => {
    const data = state?.auth?.data;
    if (data) {
      const parsedData = JSON.parse(data);
      // console.log(parsedData._id);
      return parsedData._id;
      
    }
    return null; // or any default value you prefer
  });
  // console.log(useSelector((state)=>state.auth.data))

  useEffect(() => {
    (async()=>{
      if (docId) {
        dispatch(getPatient(docId));
      }
    })();
    
  }, []);

  const { patients } =  useSelector((state) => state?.patient);
  // console.log(patients)

  const handleSearch = () => {
    // Implement search functionality here
  };

  return (
    <Layout>
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col justify-around items-center gap-5 mx-5">
          <h1 className="font-sans font-semibold text-4xl text-[#A09E93] mt-6">
            Patient List
          </h1>
          <div className="w-full flex flex-col justify-center items-center gap-5">
            <div className="w-full flex justify-around items-center gap-3">
              <div className="w-[100%] mt-5 ml-10">
                <input
                  type="text"
                  name="text"
                  id="search"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus-within:ring-blue-600 focus-within:border-blue-600 block w-full p-2.5 focus:outline-none"
                  placeholder="Search"
                />
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleSearch}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 text-center mt-6"
                >
                  Search
                </button>
              </div>
            </div>
            <div className="w-full flex justify-around items-center font-semibold font-sans">
              <p className="text-sky-500">Patient Name</p>
              <p className="text-sky-500">Gender</p>
              <p className="text-sky-500">Age</p>
              <p className="text-sky-500">Mobile Number</p>
            </div>
            {patients && patients.length > 0 ? (
              patients.map((patient) => (
                <div
                  key={patient._id}
                  className="w-[95%] flex justify-around items-center bg-blue-100 p-3 rounded-xl gap-4"
                >
                  <div className="w-[4rem] flex">
                    <p>{patient.fullName}</p>
                  </div>
                  <p>{patient.gender}</p>
                  <p>{patient.age}</p>
                  <p>{patient.phone}</p>
                </div>
              ))
            ) : (
              <p>No Patient Found</p>
            )}
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </Layout>
  );
};

export default PatientList;

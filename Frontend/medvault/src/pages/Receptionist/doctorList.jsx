import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../../Redux/receptionSlice";

const DoctorList = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const doctors = useSelector((state) => state.reception.doctors.users);

  useEffect(() => {
    (async () => {
      await dispatch(getDoctors());
    })();
  }, []);

  const handleSearch = () => {
  
  };

  return (
    <Layout>
      <div className="w-full flex justify-center">
        <div className="w-full flex flex-col justify-around items-center gap-5 mx-5">
          <h1 className="font-sans font-semibold text-4xl text-[#A09E93] mt-6">
            Doctor List
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
            {/* Doctor list */}
            <div className="w-full flex justify-around items-center font-semibold font-sans">
              <p className="text-sky-500">Name</p>
              <p className="text-sky-500">Designation</p>
              <p className="text-sky-500">Status</p>
            </div>
            {doctors?.map((doctor, index) => (
              <button
                key={index}
                className="w-[95%] flex justify-around items-center bg-blue-100 p-3 rounded-xl gap-4 hover:border hover:border-[#3392e666] shadow"
                onClick={() => navigate("/patientInfo", { state: doctor })}
              >
                <div className="w-[12rem] text-left">
                  <p className="pr-2">Dr {doctor.fullName}</p>
                </div>
                <div className="flex justify-center text-center w-[10rem]">
                  <p>{doctor.type}</p>
                </div>
                <div className="flex justify-center text-center w-[12rem] pl-[4rem]">
                  <p
                    className={
                      doctor.status == "Available"
                        ? "text-green-600 font-semibold"
                        : "text-red-600 font-semibold"
                    }
                  >
                    {doctor.status == "Available"
                      ? "Available"
                      : "Not Available"}
                  </p>
                </div>
              </button>
            ))}
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
      <br />
      <br />
      <br />
      <br />
      <br />
    </Layout>
  );
};

export default DoctorList;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
const Dashboard = () => {
  return (
    <Layout>
        <div className="flex">
      <div className="w-full flex justify-center mt-10">
        <div className="w-full flex flex-col justify-around items-center gap-5 mx-5">
          <div className="w-full flex justify-around items-center">
            <div className="p-10 flex flex-col justify-center items-center bg-slate-200 rounded-3xl">
              <>
                <h1 className="font-bold text-[24px]">Tanishq Khandelwal</h1>
                <div className="flex justify-center items-center gap-10 mt-3">
                  <div className="w-[100px] flex flex-col justify-center items-center bg-blue-500 text-white p-1 rounded-xl">
                    <h1>Age</h1>
                    <p>21</p>
                  </div>
                  <div className="w-[100px] flex flex-col justify-center items-center bg-blue-500 text-white p-1 rounded-xl">
                    <h1>Gender</h1>
                    <p>Male</p>
                  </div>
                </div>

                <div className="flex justify-center items-center mt-4">
                  <button
                    type="button"
                    className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 text-center"
                    onClick={() => {
                      // navigate(`/patient-details`);
                      //   setLocalStorageValueForKey(
                      //     "patientId",
                      //     currentPatient._id
                      //   );
                    }}
                  >
                    <Link to={"/patient-details"}>View</Link>
                  </button>
                </div>
              </>
            </div>
            <div className="p-10 flex flex-col justify-center items-center bg-slate-200 rounded-3xl">
              <h1 className="font-bold text-[24px]">Today Patient Count</h1>
              <h1 className="font-bold text-[36px] text-sky-500">13</h1>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-5">
            <div className="w-full flex justify-around items-center gap-3">
              <div className="w-full">
                <input
                  type="text"
                  name="search"
                  id="search"
                  
                  onChange={() => {}}
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

            <>
              <div
                //   key={idx}
                className="w-full flex justify-around items-center bg-blue-100 p-3 rounded-xl gap-4"
              >
                <p>Tanishq </p>
                <p>Male</p>
                <p>21</p>
                <p>9011616611</p>
              </div>
            </>
          </div>
        </div>
      </div>
      </div>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </Layout>
  );
};

export default Dashboard;

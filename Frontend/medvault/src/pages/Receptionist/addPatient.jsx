import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "../../layout/Layout";
import ProfileImage from "../../assets/ProfileImage.svg";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

const AddPatient = () => {
  const location = useLocation();
  const doctor = location.state;
  console.log(doctor);

  return (
    <Layout>
      <div className="flex justify-center pt-12">
        {/* Side by side divs */}
        <div className="w-full flex gap-10 justify-center">
          {/* Patient div */}
          <div className="flex flex-col  items-center border rounded-3xl p-10 gap-5 shadow-xl">
            <div className="flex flex-col  items-center gap-3 w-[100%]">
              <h1 className="font-bold text-[20px]">Doctor Information</h1>
              <img
                src={ProfileImage}
                alt="Profile"
                className="h-[100px] w-[100px]"
              />
              <p className="font-bold text-[16px]">Dr.{doctor.fullName}</p>
            </div>
            <div className="w-full flex flex-col justify-center gap-5">
              <div className="w-full flex flex-col gap-2">
                <p>Phone No.</p>
                <div className="flex justify-start items-center bg-blue-100 p-1.5 rounded-xl">
                  {/* <img className="ml-3 w-[16px] mr-4" src={""} alt="Phone" /> */}
                  <FaPhoneAlt className="ml-3 w-[16px] mr-4" />
                  {doctor.mobile}
                </div>
              </div>
              <div className="w-full flex flex-col gap-2 ">
                <p>Email Id</p>
                <div className="flex justify-start items-center bg-blue-100 p-1.5 rounded-xl">
                  {/* <img classNam e="ml-3 w-[16px] mr-4" src={""} alt="Phone" /> */}
                  <MdEmail className="ml-3 w-[16px] mr-2" />
                  {doctor.email}
                </div>
              </div>
            </div>
          </div>

          {/* Second div */}
          <div className="w-[65%] h-[700px] p-5 flex flex-col justify-start items-center border rounded-3xl overflow-y-auto shadow-xl">
            <h1 className="font-bold text-[20px] mb-4 font-sans">
              Patient Information
            </h1>
            <form
              className="w-full space-y-4 md:space-y-6"
              //   onSubmit={saveHealthDetail}
            >
              <div>
                <label
                  htmlFor="Name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  name="symptoms"
                  id="symptoms"
                  //   value={HealthData.symptoms}
                  //   onChange={handleUserInput}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="Enter Full Name"
                />
              </div>
              <div className="flex gap-10">
                <div>
                  <label
                    htmlFor="mobile"
                    className=" mb-2 text-sm font-medium text-gray-900"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="number"
                    name="BP"
                    id="BP"
                    // value={HealthData.BP}
                    // onChange={handleUserInput}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-[150%] p-2.5"
                    placeholder="Enter Mobile No."
                  />
                </div>
                <div>
                  <label
                    htmlFor="sugar"
                    className="block mb-2 text-sm font-medium text-gray-900 ml-20"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    // value={HealthData.sugar}
                    // onChange={handleUserInput}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600  w-[50%] p-2.5 ml-20"
                    placeholder="Enter Age"
                  />
                </div>

                <div>
                  <label
                    htmlFor="sugar"
                    className="block mb-2 text-sm font-medium text-gray-900 ml-20"
                  >
                    Gender
                  </label>
                  <div className="flex gap-6 mt-5">
                    <div className="flex gap-2">
                      <input
                        type="radio"
                        name="gender"
                        id="gender"
                        // value={HealthData.sugar}
                        // onChange={handleUserInput}
                        className="w-full"
                      />
                      <label className="">Male</label>
                    </div>

                    <div className="flex gap-2">
                      <input
                        type="radio"
                        name="gender"
                        id="gender"
                        // value={HealthData.sugar}
                        // onChange={handleUserInput}
                        className="w-full"
                      />
                      <label className="">Female</label>
                    </div>

                    <div className="flex gap-2">
                      <input
                        type="radio"
                        name="gender"
                        id="gender"
                        // value={HealthData.sugar}
                        // onChange={handleUserInput}
                        className="w-full"
                      />
                      <label className="">Other</label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Div for Diagnosis */}
              <div>
                <label
                  htmlFor="diagnosis"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email id
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  //   value={HealthData.diagnosis}
                  //   onChange={handleUserInput}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="Enter Email id"
                />
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  //   value={HealthData.notes}
                  //   onChange={handleUserInput}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="Enter Current Address"
                />
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Medication
                </label>
                <input
                  type="text"
                  name="medication"
                  id="medication"
                  //   value={HealthData.notes}
                  //   onChange={handleUserInput}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="Enter Any Medication"
                />
              </div>

              <div className="flex justify-center items-center pt-8">
                <button
                  type="submit"
                  className=" w-[30%] text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Register
                </button>
              </div>
            </form>
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
    </Layout>
  );
};

export default AddPatient;

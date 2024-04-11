import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import signupimg from "../assets/signup.png";
import Logo from "../assets/react.svg";
// import { register } from "./context";
// import { setLocalStorageValueForKey } from "../../utils/localStorage";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "RECEPTIONIST",
  });
  const [doctorFormData, setDoctorFormData] = useState({
    name: "",
    speciality: "",
    number: "",
    email: "",
    password: "",
    role: "DOCTOR",
  });
  const [errors, setErrors] = useState({});
  const [registerType, setRegisterType] = useState("DOCTOR");

  const handleDoctorInputChange = (e) => {
    const { name, value } = e.target;
    setDoctorFormData({ ...doctorFormData, [name]: value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};

    if (registerType === "DOCTOR") {
      if (!doctorFormData.name) {
        errors.name = "Name is required";
      }
      if (!doctorFormData.speciality) {
        errors.speciality = "Speciality is required";
      }
      if (!doctorFormData.number) {
        errors.number = "Mobile number is required";
      }
      if (!doctorFormData.email) {
        errors.email = "Email is required";
      }
      if (!doctorFormData.password) {
        errors.password = "Password is required";
      }
    } else {
      if (!formData.name) {
        errors.name = "Name is required";
      }
      if (!formData.email) {
        errors.email = "Email is required";
      }
      if (!formData.password) {
        errors.password = "Password is required";
      }
    }

    if (Object.keys(errors).length === 0) {
    } else {
      setErrors(errors);
    }

    const doctorRegister = 0;
    const res = doctorRegister.user;
    if (res) {
      // setLocalStorageValueForKey("userId", res._id);
      navigate(`/${res._id}`);
    }
  };

  return (
    <Layout>
      <div className="flex">
        <div className="h-[35rem] w-[55rem] mt-[18rem]">
          <img
            src={signupimg}
            alt="Sign up Image"
            className="h-[100%] w-[100%]"
          />
        </div>
        <div>
          <div className="items-center justify-center ml-[12rem] mt-[8rem]">
            <h1 className="font-sans font-bold text-5xl">Welcome to the Family </h1>
            <br />
            <p className="font-sans font-semibold text-xl text-[#A4ABB9]">
              A Family of Health Innovations: Transforming Care, Empowering
              Health{" "}
            </p>
          </div>
          <div className="  w-[50rem] mt-[1rem]">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-[75%] bg-white rounded-lg shadow-2xl md:mt-0  ml-[8rem]" >
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8 h-[45rem] ">
                  <div className="flex ml-10">
                    <div>
                      <img
                        src={Logo}
                        alt="Logo"
                        className="h-[40px] w-[40px]"
                      />
                    </div>
                    <div className="mt-2 ml-3">
                      <h1 className="font-bold text-2xl  ">
                        <span className="text-blue-600">Med</span>Vault
                      </h1>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <button
                      className={`flex-1 text-sm font-medium px-4 py-2 rounded-l-lg ${
                        registerType === "DOCTOR"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                      onClick={() => setRegisterType("DOCTOR")}
                    >
                      Doctor
                    </button>
                    <button
                      className={`flex-1 text-sm font-medium px-4 py-2 rounded-r-lg ${
                        registerType === "RECEPTIONIST"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-600"
                      }`}
                      onClick={() => setRegisterType("RECEPTIONIST")}
                    >
                      Receptionist
                    </button>
                  </div>
                  <form
                    className="space-y-4 md:space-y-6"
                    onSubmit={handleSubmit}
                  >
                    {registerType === "DOCTOR" ? (
                      <>
                        <div>
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={doctorFormData.name}
                            onChange={handleDoctorInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-[0.5rem]"
                            placeholder="Enter name"
                            required=""
                          />
                          {errors.name && (
                            <span style={{ color: "red" }}>{errors.name}</span>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="doctor-type"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Speciality
                          </label>
                          <input
                            type="text"
                            name="speciality"
                            id="speciality"
                            value={doctorFormData.speciality}
                            onChange={handleDoctorInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-[0.5rem]"
                            placeholder="Enter speciality"
                            required=""
                          />
                          {errors.speciality && (
                            <span style={{ color: "red" }}>
                              {errors.speciality}
                            </span>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="number"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Mobile Number
                          </label>
                          <input
                            type="number"
                            name="number"
                            id="number"
                            value={doctorFormData.number}
                            onChange={handleDoctorInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-[0.5rem]"
                            placeholder="Enter mobile number"
                            required=""
                          />
                          {errors.number && (
                            <span style={{ color: "red" }}>
                              {errors.number}
                            </span>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={doctorFormData.email}
                            onChange={handleDoctorInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-[0.5rem]"
                            placeholder="Enter email"
                            required=""
                          />
                          {errors.email && (
                            <span style={{ color: "red" }}>{errors.email}</span>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            value={doctorFormData.password}
                            onChange={handleDoctorInputChange}
                            placeholder="Enter password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-[0.5rem]"
                            required=""
                          />
                          {errors.password && (
                            <span style={{ color: "red" }}>
                              {errors.password}
                            </span>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-[0.5rem]"
                            placeholder="Enter name"
                            required=""
                          />
                          {errors.name && (
                            <span style={{ color: "red" }}>{errors.name}</span>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-[0.5rem]"
                            placeholder="Enter email"
                            required=""
                          />
                          {errors.email && (
                            <span style={{ color: "red" }}>{errors.email}</span>
                          )}
                        </div>
                        <div>
                          <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Enter password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-[0.5rem]"
                            required=""
                          />
                          {errors.password && (
                            <span style={{ color: "red" }}>
                              {errors.password}
                            </span>
                          )}
                        </div>
                      </>
                    )}
                    <button
                      type="submit"
                      className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Create an account
                    </button>
                    <p className="text-sm font-light text-gray-500">
                      Already have an account?{" "}
                      <a
                        href="/login"
                        className="font-medium text-blue-600 hover:underline"
                      >
                        Login here
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/><br/><br/><br/><br/><br/>
    </Layout>
  );
};

export default SignUp;

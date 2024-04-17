import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import signupimg from "../assets/signup.png";
import Logo from "../assets/react.svg";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { createAccount,createAccountDoc } from "../Redux/authSlice";

const SignUp = () => {
  const [errors, setErrors] = useState({});
  const [registerType, setRegisterType] = useState("DOCTOR");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const [signupDataDoc, setSignupDataDoc] = useState({
    fullName: "",
    email: "",
    password: "",
    mobile: "",
    type:""
  });

  const handleUserInputDoc = (event) => {
    const { name, value } = event.target;
    setSignupDataDoc({
      ...signupDataDoc,
      [name]: value,
    });
  };

  const createNewAccount = async (event) => {
    if (registerType == "RECEPTIONIST") {
      event.preventDefault();
      try {
        if (!signupData.email || !signupData.fullName || !signupData.password) {
          toast.error("Please Fill all the Details");
          return;
        }

        const formData = new FormData();
        formData.append("fullName", signupData.fullName);
        formData.append("email", signupData.email);
        formData.append("password", signupData.password);

        console.log(formData);

        const response = await dispatch(createAccount(formData));
        if (response.payload?.success) {
          navigate("/login");
        }

        setSignupData({
          fullName: "",
          email: "",
          password: "",
        });
      } catch (error) {
        toast.error("An Error Occurred");
        console.log(error);
      }
    }
    else
    {
      event.preventDefault();
      try {
        if (!signupDataDoc.email || !signupDataDoc.fullName || !signupDataDoc.password ) {
          toast.error("Please Fill all the Details");
          return;
        }

        const formData = new FormData();
        formData.append("fullName", signupDataDoc.fullName);
        formData.append("mobile", signupDataDoc.mobile);
        formData.append("type", signupDataDoc.type);
        formData.append("email", signupDataDoc.email);
        formData.append("password", signupDataDoc.password);
        

        console.log(formData);

        const response = await dispatch(createAccountDoc(formData));
        if (response.payload?.success) {
          navigate("/login");
        }

        setSignupDataDoc({
          fullName: "",
          email: "",
          password: "",
          mobile:"",
          type:""
        });
      } catch (error) {
        toast.error("An Error Occurred");
        console.log(error);
      }
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
            <h1 className="font-sans font-bold text-5xl">
              Welcome to the Family{" "}
            </h1>
            <br />
            <p className="font-sans font-semibold text-xl text-[#A4ABB9]">
              A Family of Health Innovations: Transforming Care, Empowering
              Health{" "}
            </p>
          </div>
          <div className="  w-[50rem] mt-[1rem]">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <div className="w-[75%] bg-white rounded-lg shadow-2xl md:mt-0  ml-[8rem]">
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
                    onSubmit={createNewAccount}
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
                            name="fullName"
                            id="name"
                            value={signupDataDoc.fullName}
                            onChange={handleUserInputDoc}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-[0.5rem]"
                            placeholder="Enter name"
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
                            name="type"
                            id="speciality"
                            value={signupDataDoc.type}
                            onChange={handleUserInputDoc}
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
                            name="mobile"
                            id="number"
                            value={signupDataDoc.mobile}
                            onChange={handleUserInputDoc}
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
                            value={signupDataDoc.email}
                            onChange={handleUserInputDoc}
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
                            value={signupDataDoc.password}
                            onChange={handleUserInputDoc}
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
                            htmlFor="fullName"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            value={signupData.fullName}
                            onChange={handleUserInput}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-[0.5rem]"
                            placeholder="Enter name"
                          />
                          {errors.fullName && (
                            <span style={{ color: "red" }}>
                              {errors.fullName}
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
                            value={signupData.email}
                            onChange={handleUserInput}
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
                            value={signupData.password}
                            onChange={handleUserInput}
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Layout>
  );
};

export default SignUp;

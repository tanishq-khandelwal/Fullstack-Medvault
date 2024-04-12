import React, { useState } from "react";
import Layout from "../layout/Layout";
import { Link, useNavigate } from "react-router-dom";
import Loginimg from "../assets/Login.png";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { LoginReception, LoginUser } from "../Redux/authSlice";

const Login = () => {
  const [userType, setUserType] = useState('doctor');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleUserInput = (event) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const onLogin = async (event) => {
    event.preventDefault();
    try {
      const { email, password } = loginData;
      if (!email || !password) {
        toast.error("Please fill in all fields");
        return;
      }

      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);
    
      if(userType=='doctor'){
      const response = await dispatch(LoginUser(formData));
      
      if (response.payload?.success) {
        navigate("/");
      } else {
        toast.error("Failed to login");
      }

      setLoginData({
        email: "",
        password: "",
      });
    }else{
      const response = await dispatch(LoginReception(formData));
      
      if (response.payload?.success) {
        navigate("/");
      } else {
        toast.error("Failed to login");
      }

      setLoginData({
        email: "",
        password: "",
      });
    }
    } catch (error) {
      toast.error("An Error Occurred");
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center">
        <div className="h-[500px] w-[400px] mr-[10rem] mt-12">
          <img src={Loginimg} alt="Login Image" />
        </div>

        <section className="bg-white">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-gray-50 rounded-lg drop-shadow-xl md:mt-0 sm:max-w-md xl:p-0">
              <div className="p-6 space-y-4 md:space-y-6 h-[500px] w-[400px] sm:p-8">
                <h1 className="text-xl font-semibold leading-tight tracking-tight text-[#2286E2] md:text-2xl">
                  Sign In
                </h1>

                <form className="space-y-4 md:space-y-6" onSubmit={onLogin}>
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
                      value={loginData.email}
                      onChange={handleUserInput}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                      placeholder="Enter email"
                      required
                    />
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
                      value={loginData.password}
                      onChange={handleUserInput}
                      placeholder="Enter password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="userType"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      User Type
                    </label>
                    <select
                      name="userType"
                      id="userType"
                      value={userType}
                      onChange={handleUserTypeChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                    >
                      <option value="doctor">Doctor</option>
                      <option value="receptionist">Receptionist</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Sign In
                  </button>
                  <p className="text-sm font-light text-gray-500">
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="font-medium text-[#2286E2] hover:underline"
                    >
                      Register
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Login;

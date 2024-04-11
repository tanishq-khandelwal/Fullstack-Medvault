import React from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import Loginimg from "../assets/Login.png"

const Login=()=>{
    return(

        <Layout>
            <div className="flex items-center justify-center "> 
                <div className="h-[500px] w-[400px] mr-[10rem] mt-12">

                    <img src={Loginimg} alt="Login Image" />
                </div>
            
            <section className="bg-white">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-gray-50 rounded-lg drop-shadow-xl md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6  h-[400px] w-[400px] sm:p-8">
            <h1 className="text-xl font-semibold leading-tight tracking-tight text-[#2286E2] md:text-2xl">
              Sign In
            </h1>
            
            <form className="space-y-4 md:space-y-6">
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
                  placeholder="Enter password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
              </div>
            
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign In
              </button>
              <p className="text-sm font-light text-gray-500">
                Don't have an account?{" "}
                {/* <a
                  href="/signup"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Register
                </a> */}
                <Link to="/signup" className="font-medium text-[#2286E2] hover:underline">Register</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
        </Layout>
        
    );
}

export default Login;

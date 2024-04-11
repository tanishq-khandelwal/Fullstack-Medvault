import React from "react";
import Layout from "../layout/Layout";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Contact = () => {
  return (
    <Layout>
      <div className="items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <span className="font-bold font-serif text-3xl md:text-5xl lg:text-6xl mt-10 flex gap-3">
            <div className="text-blue-600">Contact</div><div>Us</div>
             
          </span>
          <div className="text-lg md:text-xl lg:text-2xl font-semibold mt-4 text-[#666666] text-center md:text-left">
            Need any assistance or have questions? Contact us. Our team is ready
            to help.
          </div>
        </div>

        <div className="ml-5 md:ml-20 mt-10 md:mt-20 h-[100%] flex flex-col md:flex-row justify-around items-center">
          <div className="flex flex-col md:flex-row w-full md:w-[100%] items-center justify-evenly mt-8 shadow-2xl border border-blue-500 rounded-lg h-[45rem] p-[5rem]">
            <div className="flex flex-col md:w-[50%] ">
              <h1 className="text-2xl md:text-4xl font-sans font-bold text-center md:text-left">
                Contact Information
              </h1>
              <div className="mt-4 md:mt-8">
                <div className="text-lg md:text-xl font-semibold flex items-center gap-3">
                <MdEmail />
                  Email Address
                </div>
                <div className="text-[#666666] text-[1.2rem]">medvault.contact@gmail.com</div>
                <div className="text-lg md:text-xl font-semibold mt-4 md:mt-8 flex items-center gap-3">
                <MdCall/>
                  Mobile Number
                </div>
                <div className="text-[#666666] text-[1.2rem]">+919011616611</div>
                <div className="text-lg md:text-xl font-semibold mt-4 md:mt-8 flex items-center gap-3">
                <FaLocationDot/>
                  Location
                </div>
                <div className="text-[#666666] text-[1.2rem]">Pune</div>
              </div>
            </div>
            <div className="w-full md:w-[50%] h-[80%] flex flex-col justify-center items-center">
              <div className="w-full h-full flex flex-col justify-center items-center gap-5 bg-slate-100 rounded-3xl shadow-xl border border-[#b1b1b1]">
                <div className="w-full px-5 flex flex-col gap-8">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Name
                    </label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      value=""
                      onChange={() => {}}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                      placeholder="Enter name"
                      required
                    />
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
                      value=""
                      onChange={() => {}}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="number"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="number"
                      id="number"
                      value=""
                      onChange={() => {}}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                      placeholder="Enter number"
                      required
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <button
                      type="submit"
                      className="w-[40%] text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </Layout>
  );
};

export default Contact;

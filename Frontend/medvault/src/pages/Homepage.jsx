import Layout from "../layout/Layout";
import Logo from "../assets/react.svg";
import { FaHeartbeat, FaBell } from "react-icons/fa";
import { PiNotepadFill } from "react-icons/pi";
import { HiCircleStack } from "react-icons/hi2";
import image from "../assets/image2.png";
import image2 from "../assets/image3.png";
import image3 from "../assets/image.png";
import homepageimg from "../assets/Homepage2.png";
import { GiStairsGoal } from "react-icons/gi";

const HomePage = () => {
  return (
    <Layout>
      <div className="pt-10 flex flex-col items-center justify-center mx-4 lg:mx-16 h-auto lg:h-[90vh]">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start">
          <div className="w-full lg:w-[50%] flex flex-col justify-start items-center lg:items-start">
            <div className="flex items-center mt-[5rem]">
              <img
                src={Logo}
                alt="Logo"
                className="h-10 w-10 lg:h-12 lg:w-12"
              />
              <h1 className="font-bold text-lg lg:text-2xl text-center lg:text-left ml-2 lg:ml-3">
                <span className="text-blue-600">Med</span>Vault
              </h1>
            </div>

            <h1 className="text-lg lg:text-5xl mt-2 lg:mt-5 font-bold text-center lg:text-left">
              Find the good Life by good Health
            </h1>

            <p className="text-base lg:text-xl mt-2 lg:mt-7 text-[#AAAAAA] text-center lg:text-left">
              A Secure and Accessible Patient Information Platform for
              Healthcare Professionals
            </p>
            <div className="flex justify-center lg:justify-start mt-3 lg:mt-7">
              <button className="btn border btn-info bg-white hover:bg-blue-600 hover:text-white text-blue-600 lg:mr-4">
                Contact Us
              </button>

              <button className="btn border border-[#DE9604] text-[#DE9604] bg-white hover:bg-[#DE9604] hover:text-white">
                About Us
              </button>
            </div>
          </div>
          <div className="h-[35rem] lg:w-[50%] flex justify-center items-center mt-7 lg:mt-0">
            <img
              src={homepageimg}
              alt="homepage img"
              className="h-[400px] lg:h-[500px] w-[300px] lg:w-[35rem]"
            />
          </div>
        </div>
      </div>

      {/* About US */}
      <div className="h-auto lg:h-[110vh] bg-[#EFF7FF] flex flex-col items-center">
        <div className="flex items-center justify-center">
          <p className="mt-10 font-sans font-bold text-5xl text-[#2386E3]">
            About
          </p>
          <p className="mt-10 font-sans font-bold text-5xl ml-4">Us</p>
        </div>
        <div className="flex flex-col lg:flex-row mt-[2rem] lg:mt-[4rem] w-full justify-center lg:justify-evenly">
          <div className="h-[30rem] lg:w-[25rem] lg:ml-[6rem] mt-[2rem]">
            <img
              src={image3}
              alt="About Us"
              className="h-full w-full shadow-2xl rounded-tl-[40px]  rounded-br-[40px]"
            />
          </div>
          <div className="grid gap-6  lg:ml-[8rem]">
            <div className="card w-[30rem] lg:w-[32rem] bg-base-100 shadow-xl hover:scale-105 transition-all duration-300 mb-5 lg:mb-0">
              <div className="card-body items-center text-center lg:text-left">
                <div className="flex items-start">
                  {/* <GiStairsGoal className="h-[40px] w-[40px] mr-2" /> */}
                  <h2 className="card-title">Our Mission</h2>
                </div>
                <p>
                  Empowering Medical Professional with secure,user-friendly
                  technology to optimize Patient care and privacy compliance.
                </p>  
              </div>
            </div>

            <div className="card w-[30rem] lg:w-[32rem] bg-base-100 shadow-xl hover:scale-105 transition-all duration-300 mb-5 lg:mb-0">
              <div className="card-body items-center text-center lg:text-left">
                <h2 className="card-title">Our Vision</h2>
                <p>
                  Our Vision is to revolutionize healthcare by providing a
                  seamless integrated platform that empowers medical
                  professionals.
                </p>
              </div>
            </div>

            <div className="card w-[32rem] bg-[#167FE7] shadow-2xl hover:scale-105 transition-all duration-300 text-white">
              <div className="card-body items-center text-center lg:text-left">
                <h2 className="card-title">Our Commitments</h2>
                <p>
                  Fostering a culture of inclusivity, diversity, and respect for
                  all individuals within our community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="h-auto lg:h-[90vh] bg-white mt-10 flex flex-col items-center">
        <div className="flex items-center justify-center">
          <p className="mt-10 font-sans font-bold text-5xl text-[#2386E3]">
            Our
          </p>
          <p className="mt-10 font-sans font-bold text-5xl ml-4">Services</p>
        </div>

        <div className="flex flex-wrap justify-evenly  mt-10">
          <div className="card w-[310px]  h-[360px] lg:h-[auto] bg-[#2386E3] shadow-2xl hover:scale-105 transition-all duration-300 text-white m-4">
            <figure className="px-10 pt-10">
              <div className="w-[70px] h-[67px] bg-[#E9F6FF] items-center flex justify-center rounded-full">
                <FaHeartbeat className="h-[42px] w-[40px] text-black" />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-sans font-semibold">
                Smart Appointment Booking
              </h2>
              <p>
                Efficient scheduling solution for seamless appointment bookings
                and management.
              </p>
            </div>
          </div>

          <div className="card w-[300px] h-[350px] lg:h-[auto] bg-base-100 shadow-2xl hover:scale-105 transition-all duration-300 m-4">
            <figure className="px-10 pt-10">
              <div className="w-[70px] h-[67px] bg-[#E9F6FF] items-center flex justify-center rounded-full">
                <FaBell className="h-[42px] w-[40px]" />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-sans font-semibold">
                Smart Prescription and Reminder
              </h2>
              <p>
                Manage appointments and medications with Smart Reminders and
                Smart Online Prescription on MedVault.
              </p>
            </div>
          </div>

          <div className="card w-[300px]  h-[350px] lg:h-[auto] bg-base-100 shadow-xl hover:scale-105 transition-all duration-300 m-4">
            <figure className="px-10 pt-10">
              <div className="w-[70px] h-[67px] bg-[#E9F6FF] items-center flex justify-center rounded-full">
                <PiNotepadFill className="h-[42px] w-[40px]" />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-sans font-semibold">
                Doctor Dashboard
              </h2>
              <p>
                Oversee patient care with Dashboard on MedVault, offering
                streamlined access to medical information and tools for
                decision-making.
              </p>
            </div>
          </div>

          <div className="card w-[300px]  h-[350px] lg:h-[auto] bg-base-100 shadow-xl hover:scale-105 transition-all duration-300 m-4">
            <figure className="px-10 pt-10">
              <div className="w-[70px] h-[67px] bg-[#E9F6FF] items-center flex justify-center rounded-full">
                <HiCircleStack className="h-[42px] w-[40px]" />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-sans font-semibold">
                Secure Vault
              </h2>
              <p>
                Securely store and manage medical reports and essential data
                with our Smart Vault feature on MedVault.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

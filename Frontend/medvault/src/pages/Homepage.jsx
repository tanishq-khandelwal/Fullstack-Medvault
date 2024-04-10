import Layout from "../layout/Layout";
import Logo from "../assets/react.svg";
import { FaHeartbeat, FaBell } from "react-icons/fa";
import { PiNotepadFill } from "react-icons/pi";
import { HiCircleStack } from "react-icons/hi2";
import image from "../assets/image2.png";
import image2 from "../assets/image3.png";
import image3 from "../assets/image.png";
import homepageimg from "../assets/Homepage2.png";

const HomePage = () => {
  return (
    <Layout>
      {/* <div className="flex items-center justify-center">
        <img
          src={Logo}
          alt="Logo"
          className="h-[5rem] w-15 ml-[60rem] image-logo"
        />
      </div> */}

      <div className="pt-10 flex items-center justify-center mx-16 h-[90vh]">
        <div className="w-full flex justify-between">
          <div className="w-[50%] flex flex-col justify-start items-start ml-5 mt-[6rem]">
            <div className="flex">
              <div>
                <img src={Logo} alt="Logo" className="h-[40px] w-[40px]" />
              </div>
              <div className="mt-2 ml-3">
                <h1 className="font-bold text-2xl  ">
                  <span className="text-blue-600">Med</span>Vault
                </h1>
              </div>
            </div>

            <h1 className="text-lg md:text-5xl lg:text-5xl mt-5 font-bold">
              Find the good Life by good Health
            </h1>

            <p className="text-lg md:text-xl lg:text-xl mt-7 text-[#AAAAAA]">
              A Secure and Accessible Patient Information Platform for
              Healthcare Professionals
            </p>
            <div className="flex ">
              <button className="btn border btn-info mt-[3rem] bg-white  hover:bg-blue-600 hover:text-white text-blue-600">
                Contact Us
              </button>

              <button className=" btn border mt-[3rem] border-[#DE9604] text-[#DE9604]  bg-white transition duration-300 ease-in-out hover:bg-[#DE9604] hover:text-white ml-10">
                About Us
              </button>
            </div>
          </div>
          <div className="h-[35rem] w-[50rem] items-center justify-end ml-[15rem] mr-[5rem]">
            <img
              src={homepageimg}
              alt="homepage img"
              className="h-[500px] w-[40rem]"
            />
          </div>
        </div>
      </div>

      {/* About US */}
      <div className="h-[90vh] bg-[#EFF7FF]">
        <div className="flex items-center justify-center">
          <p className="mt-10 font-sans font-bold text-5xl text-[#2386E3]">
            About
          </p>
          <p className="mt-10 font-sans font-bold text-5xl ml-4">Us</p>
        </div>

        <div className="flex items-center justify-evenly mt-10">
          <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 transition-all duration-300 hover:text-white hover:bg-[#245ED7]">
            <figure className="px-5 pt-5">
              <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Our Mission</h2>
              <p>
                Empowering Medical Professional with secure,user-friendly
                technology to optimize Patient care and privacy compliance.
              </p>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 transition-all duration-300">
            <figure className="px-5 pt-5">
              <img src={image2} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Our Vision</h2>
              <p>
                Our Vision is to revolutionize healthcare by providing a
                seamless integrated platform that empowers medical
                professionals.
              </p>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 transition-all duration-300">
            <figure className="px-5 pt-5">
              <img src={image3} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Our Commitments</h2>
              <p>
                Fostering a culture of inclusivity, diversity, and respect for
                all individuals within our community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="h-[90vh] bg-white mt-10">
        <div className="flex items-center justify-center">
          <p className="mt-10 font-sans font-bold text-5xl text-[#2386E3]">
            Our
          </p>
          <p className="mt-10 font-sans font-bold text-5xl ml-4">Services</p>
        </div>

        <div className="flex items-center justify-evenly mt-10">
          <div className="card w-[300px]  h-[350px] bg-base-100 shadow-xl hover:scale-105 transition-all duration-300">
            <figure className="px-10 pt-10">
              <div className="w-[70px] h-[67px] bg-[#E9F6FF] items-center flex justify-center rounded-full">
                <FaHeartbeat className="h-[42px] w-[40px]" />
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

          <div className="card w-[300px]  h-[350px] bg-base-100 shadow-2xl hover:scale-105 transition-all duration-300">
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

          <div className="card w-[300px]  h-[350px] bg-base-100 shadow-xl hover:scale-105 transition-all duration-300">
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

          <div className="card w-[300px]  h-[350px] bg-base-100 shadow-xl hover:scale-105 transition-all duration-300">
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

import Layout from "../layout/Layout";
import Logo from "../assets/react.svg";

const HomePage = () => {
  return (
    <Layout>
      <div className="flex items-center justify-center">
        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="h-[5rem] w-15 ml-[60rem] image-logo"
        />

        {/* Ignite Learning */}
        <span className="text-center ml-[2rem] font-bold text-5xl text-white">
          Ignite Learning
        </span>
      </div>

      <div className="pt-10 flex items-center justify-center mx-16 h-[90vh]">
        <div className="w-[50%] flex flex-col justify-start items-start ml-5">
          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl">
            <span className="text-blue-600">Med</span>Vault
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl">
            A Secure and Accessible Patient Information Platform for Healthcare
            Professionals
          </p>
        </div>
      </div>

      <div className="h-[90vh] bg-[#EFF7FF]">
        <div className="flex items-center justify-center">
          <p className="mt-10 font-sans font-bold text-5xl text-[#2386E3]">
            About
          </p>
          <p className="mt-10 font-sans font-bold text-5xl ml-4">Us</p>
        </div>

        <div className="flex items-center justify-evenly mt-10">
          <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 transition-all duration-300">
            <figure className="px-10 pt-10">
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
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
            <figure className="px-10 pt-10">
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
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
        </div>
      </div>

      <div className="h-[90vh] bg-white">
        <div className="flex items-center justify-center">
          <p className="mt-10 font-sans font-bold text-5xl text-[#2386E3]">
            Our
          </p>
          <p className="mt-10 font-sans font-bold text-5xl ml-4">Services</p>
        </div>

        <div className="flex items-center justify-evenly mt-10">
          <div className="card w-96 bg-base-100 shadow-xl hover:scale-105 transition-all duration-300">
            <figure className="px-10 pt-10">
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
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
            <figure className="px-10 pt-10">
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
                className="rounded-xl"
              />
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
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;

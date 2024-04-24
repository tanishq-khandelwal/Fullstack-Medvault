import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/footer";
import { logout } from "../Redux/authSlice";

const Layout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const role = useSelector((state) => state?.auth?.role);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hideDrawer = () => {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;

    // collapsing the drawer-side width to zero
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = 0;
  };

  const changeWidth = () => {
    const drawerSide = document.getElementsByClassName("drawer-side");
    drawerSide[0].style.width = "auto";
  };

  const handleLogout = async (event) => {
    event.preventDefault();

    // calling logout action
    const res = await dispatch(logout());

    // redirect to home page if true
    if (res.payload.success) navigate("/");
  };

  return (
    <div className="h-screen relative ">
      <div className="drawer absolute z-50 left-0 w-fit">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="cursor-pointer relative">
            <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className="font-bold text-black m-4"
            />
          </label>
        </div>

        <div className="drawer-side w-0 lg:w-64">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 sm:w-80 bg-base-100 text-base-content relative h-screen ">
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={24} />
              </button>
            </li>
            <li>
              <Link to={"/"}>Home</Link>
            </li>

            {/* Doctor Routes */}
            {isLoggedIn && role === "DOCTOR" && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}

            {isLoggedIn && role === "DOCTOR" && (
              <li>
                <button onClick={() => navigate("/patientList")}>
                  Patient List
                </button>
              </li>
            )}

            {/* Doctor Rotes End */}

            {/* Receptionist Routes Start */}

            {isLoggedIn && role === "RECEPTIONIST" && (
              <li>
                <button onClick={() => navigate("/doctorList")}>
                  Add Patient
                </button>
              </li>
            )}

            {isLoggedIn && role === "RECEPTIONIST" && (
              <li>
                <button onClick={() => navigate("/appointmentList")}>
                  Patient List
                </button>
              </li>
            )}

            {/* Receptionist Routes End */}
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>

            {/* Other sidebar items */}
            {!isLoggedIn && (
              <div className="absolute bottom-4 w-full ">
                <div className="w-full flex items-center justify-center">
                  <Link to={"/login"}>
                    <button className="btn-primary px-10 py-2 font-semibold rounded-md   bg-blue-500 text-white mr-4 ">
                      Login
                    </button>
                  </Link>
                  <Link to={"/signup"}>
                    <button className="btn-secondary px-8 py-2 font-semibold rounded-md  bg-[#DE9604] text-white">
                      Signup
                    </button>
                  </Link>
                </div>
              </div>
            )}

            {isLoggedIn && (
              <div className="absolute bottom-4 w-full">
                <div className="w-full flex items-center justify-center">
                  <Link to={"/profile"}>
                    <button className="btn-primary px-10 py-2 font-semibold rounded-md   bg-blue-500 text-white mr-4">
                      Profile
                    </button>
                  </Link>
                  <Link onClick={handleLogout}>
                    <button className="btn-secondary px-8 py-2 font-semibold rounded-md  bg-red-600 text-white">
                      Logout
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </ul>
        </div>
      </div>

      {children}
      <Footer />
    </div>
  );
};

export default Layout;

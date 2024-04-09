import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/footer";

const Layout = ({children}) => {
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
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

    // Dispatch logout action here
  };

  return (
    <div className="h-[90vh] ">
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

        <div className="drawer-side w-0">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-48 sm:w-80 bg-base-100 text-base-content relative h-[100vh] ">
            <li className="w-fit absolute right-2 z-50">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={24} />
              </button>
            </li>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>Patient List</a>
            </li>

            <li>
              <a>Contact Us</a>
            </li>


            {/* Other sidebar items */}
            {!isLoggedIn && (
              <li className="absolute bottom-4 w-full">
                <div className="w-full flex items-center justify-center">
                  <button className="btn-primary px-10 py-2 font-semibold rounded-md   bg-blue-500 text-white">
                    <Link to={"/login"}>Login</Link>
                  </button>
                  <button className="btn-secondary px-8 py-2 font-semibold rounded-md  bg-[#DE9604] text-white">
                    <Link to={"/signup"}>Signup</Link>
                  </button>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
      {children}
      <Footer/>
    </div>
  );
};

export default Layout;

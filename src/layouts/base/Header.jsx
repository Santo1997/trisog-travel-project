import { Link } from "react-router-dom";
import HeadInfo from "./HeadInfo";
import Links from "./Links";
import Activelink from "./Activelink";
import { BiSearch, BiUser } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <HeadInfo />

      <div className="navbar">
        <div className="navbar-start w-fit me-5">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {/* dropdown-content */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-52 font-bold"
            >
              <Links />

              <li>
                <Activelink to="/all_toys">
                  <span className="me-10">Login/Signup</span>
                  <span>
                    <BiUser className="text-lg" />
                  </span>
                </Activelink>
              </li>
            </ul>
          </div>
          <Link to={"/"}>
            <div className="flex">
              <div className="avatar">
                <div className="w-10 lg:w-10 ms-3 ">
                  <img src="https://i.ibb.co/nn647jt/logo.jpg" />
                </div>
              </div>
              <h1 className="btn btn-ghost normal-case text-3xl font-extrabold hover:bg-white">
                Trisog
              </h1>
            </div>
          </Link>
        </div>
        <div className="navbar-start hidden lg:flex">
          <ul className="menu menu-horizontal items-center font-bold">
            <Links />
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal items-center font-bold ">
            <li className="hidden md:block">
              <Activelink to="/all_toys">
                <BiSearch className="text-lg" />
              </Activelink>
            </li>
            <li>
              <Activelink to="/all_toys">
                <span>
                  <BiUser className="text-lg" />
                </span>
                <span>Login/Signup</span>
              </Activelink>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-right w-full md:hidden p-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-3/4"
        />
      </div>
    </>
  );
};

export default Header;

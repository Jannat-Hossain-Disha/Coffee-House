import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const lists = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
          }
          to="/coffees"
        >
          Coffee
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `font-bold ${isActive ? "text-warning" : "hover:text-warning"}`
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 pt-6 px-7 z-50 fixed backdrop-blur-xl bg-white/30">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {lists}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          COFFEE-BOOK
        </NavLink>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{lists}</ul>
      </div>
    </div>
  );
};

export default Navbar;

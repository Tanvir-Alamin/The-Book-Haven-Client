import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaFacebookSquare, FaRegUser, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { SiWikibooks } from "react-icons/si";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="">
      <footer className="footer bg-[#95a5a6] flex justify-evenly items-center sm:footer-horizontal font-bold text-dark-content p-10">
        <aside>
          <img className="w-15 rounded-2xl" src="/src/assets/logo.png" alt="" />
          <p>
            The Book Haven
            <br />
            Programming Hero
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaXTwitter className="text-2xl" />
            </a>
            <a>
              <FaYoutube className="text-2xl" />
            </a>
            <a>
              <FaFacebookSquare className="text-2xl" />
            </a>
          </div>
        </nav>
        <nav>
          <div className="flex font-bold flex-col gap-2">
            <NavLink
              className={({ isActive }) =>
                `flex btn btn-ghost hover:btn-success gap-1 items-center ${
                  isActive ? "bg-emerald-600" : ""
                }`
              }
              to="/home"
            >
              <IoHomeOutline />
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex btn btn-ghost hover:btn-success gap-1 items-center ${
                  isActive ? "bg-emerald-600" : ""
                }`
              }
              to="/all-books"
            >
              <SiWikibooks />
              All Books
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex btn btn-ghost hover:btn-success gap-1 items-center ${
                  isActive ? "bg-emerald-600" : ""
                }`
              }
              to="/add-book"
            >
              <AiOutlinePlusCircle />
              Add Book
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `flex btn btn-ghost hover:btn-success gap-1 items-center ${
                  isActive ? "bg-emerald-600" : ""
                }`
              }
              to="/my-books"
            >
              <FaRegUser />
              My Books
            </NavLink>
          </div>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-[#bdc3c7] text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by The
            Book Haven
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;

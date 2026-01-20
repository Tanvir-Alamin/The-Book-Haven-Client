import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaFacebookSquare, FaRegUser, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { SiWikibooks } from "react-icons/si";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div>
      <footer className="footer flex justify-evenly items-center sm:footer-horizontal bg-neutral text-neutral-content p-10">
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
          <div className="grid grid-flow-col gap-4">
            <div className="flex font-bold flex-col gap-.5 ">
              <NavLink
                className="flex btn btn-ghost  hover:btn-success gap-1 items-center"
                to=""
              >
                {" "}
                <IoHomeOutline />
                Home
              </NavLink>
              <NavLink
                className="flex btn btn-ghost  hover:btn-success gap-1 items-center"
                to=""
              >
                <SiWikibooks />
                All Books
              </NavLink>
              <NavLink
                className="flex btn btn-ghost  hover:btn-success gap-1 items-center"
                to=""
              >
                <AiOutlinePlusCircle />
                Add Book
              </NavLink>
              <NavLink
                className="flex btn btn-ghost  hover:btn-success gap-1 items-center"
                to=""
              >
                <FaRegUser />
                My Books
              </NavLink>
            </div>
          </div>
        </nav>
      </footer>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
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

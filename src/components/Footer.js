import React from "react";
import logo from "../assets/logo.png";
import pay from "../assets/pay.png";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaHome,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BsPaypal, BsPersonFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-title">
      <div className="max-w-screen-lg mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          <img className="w-32 h-16" src={logo} alt="" />
          <p className="text-white text-sm tracking-wide">@ ReactBD.com</p>
          <img className="w-56 h-16" src={pay} alt="" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate us</h2>
          <div>
            <p>MBD,Ruwi, Muscat-Oman</p>
            <p>Mobile: 005356 0044346</p>
            <p>Phone: 004487 29977456</p>
            <p>e-mail: ecommerce@gmail.com</p>
          </div>
        </div>
        <div className="">
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className=" flex flex-col  gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              My account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              Checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>
              Order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>
              Help & support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            placeholder="e-mail"
            type="text"
          />
          <button className="text-sm border text-white border-t-0
           hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

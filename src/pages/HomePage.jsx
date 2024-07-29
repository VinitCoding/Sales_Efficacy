import React from "react";
import bg_img from "../assets/Insurance_img.svg";
import FileUpload from "../components/FileUpload";
import chistats_logo from "../assets/chistats_logo.png";
import { Button, Popover, PopoverContent, PopoverHandler } from "@material-tailwind/react";
import LoginForm from "../components/LoginForm";
import powered_by from "../assets/powered_by.svg";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const  navigate = useNavigate()
  const openLandingPage = () => {
    navigate('/')
  }
  return (
    <div className="w-screen h-screen overflow-hidden tracking-wider">
      {/* Header */}
      <div className="fixed flex items-center justify-between w-full px-10 py-1 bg-white shadow-lg">
        <h2 className="font-semibold text-[#1E1D5C] text-2xl text-darkBlue hover:cursor-default">
          Sales<span className="text-[#FF540B]"> Assist</span>
        </h2>
        <img src={chistats_logo} alt="logo" className="w-[115px]" />
      </div>
      {/* Home Page */}
      <div className="flex items-center justify-center gap-x-10 pt-[60px] relative">
        <img src={bg_img} alt="insurance_img" className="w-[250px]" />
        <div className="w-[647px] flex flex-col gap-y-4">
          <h2 className="text-[40px] font-[700] w-[500px] leading-[50px] tracking-wider">
            Unlock Your Financial Potential with WealthWise
          </h2>
          <p className="text-[18px] leading-[30px] w-[510px] tracking-wider">
            Get personalized and comprehensive recommendations from your
            <span className="font-semibold">AI-powered companion.</span>
          </p>
        </div>

        <Popover
       
          placement="bottom-end"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: -25 },
          }}
        >
          <PopoverHandler >
            <button className="px-2.5 bg-white rounded-full text-blue-gray-700 absolute top-20 right-10 py-2.5">
              <FaUserCircle />
            </button>
          </PopoverHandler>
          <PopoverContent>
            <div className="flex items-center justify-center gap-x-3">
              <FaUserCircle className="text-[40px] text-[#3a3a3a]" />
              <div className="text-[#1E1D5C] mt-1">
                <h2 className="text-lg font-bold">Vinit</h2>
                <p>vinit.gite@chistats.com</p>
              </div>
            </div>
            <hr className="border-[1px] w-full mt-2" />
            <div>
              <button
                className="flex items-center px-3 py-2 mt-2.5 rounded-full gap-x-3 text-[#3a3a3a] hover:bg-blue-gray-100 hover:rounded-md cursor-pointer w-full"
                onClick={openLandingPage}
              >
                <MdOutlineLogout className="text-lg text-[#3a3a3a]" />
                <span className="mt-0.5 text-[15px]">Logout</span>
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      {/* File Upload */}
      <div className="w-full px-6 py-3 mt-2 h-fit">
        <FileUpload />
      </div>

      {/* File Upload */}
      {/* Footer */}
      <footer className="flex justify-center mt-1">
        <img src={powered_by} className="w-40" />
      </footer>
    </div>
  );
};

export default HomePage;

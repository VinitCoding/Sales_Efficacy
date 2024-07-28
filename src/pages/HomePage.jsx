import React from "react";
import bg_img from "../assets/Insurance_img.svg";
import FileUpload from "../components/FileUpload";
import chistats_logo from "../assets/chistats_logo.png";
import { Button } from "@material-tailwind/react";
import LoginForm from "../components/LoginForm";
import powered_by from "../assets/powered_by.svg";

const HomePage = () => {

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

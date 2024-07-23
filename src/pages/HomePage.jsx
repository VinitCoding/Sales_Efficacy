import React from "react";
import bg_img from "../assets/Insurance_img.svg";
import FileUpload from "../components/FileUpload";

const HomePage = () => {
  return (
    <div className="pt-[60px]">
        {/* Home Page */}
      <div className="flex items-center justify-center gap-x-10">
        <img src={bg_img} alt="insurance_img" className="w-[300px]" />
        <div className="w-[647px] flex flex-col gap-y-4">
        <h2 className="text-[40px] font-semibold w-[600px] leading-[50px]">
          Unlock Your Financial Potential with WealthGuru
        </h2>
        <p className="text-[18px] leading-[30px] w-[600px]">
          Get personalized and comprehensive recommendations from your
          AI-powered companion.
        </p>
        </div>
      </div>

      {/* File Upload */}
      <div className="w-full px-6 py-3 mt-2 h-fit">
        <FileUpload />
      </div>
    </div>
  );
};

export default HomePage;

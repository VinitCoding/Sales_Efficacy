import React from "react";
import chistats_logo from "../assets/chistats_logo.png";
import bg_img from "../assets/landing_page_bg.svg";
import LoginForm from "../components/LoginForm";
import feature_1 from "../assets/feature_images/feature_img_1.png";
import feature_2 from "../assets/feature_images/feature_img_2.png";
import feature_3 from "../assets/feature_images/feature_img_3.png";
import powered_by from "../assets/powered_by.svg";

const Landing = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      {/* Headers */}
      <div className="fixed z-20 flex items-center justify-between w-full px-10 py-1 bg-white shadow-lg">
        <h2 className="font-semibold text-[#1E1D5C] text-2xl text-darkBlue hover:cursor-default tracking-wider">
          Sales<span className="text-[#FF540B]"> Assits</span>
        </h2>
        <img src={chistats_logo} alt="logo" className="h-6 w-[120px]" />
      </div>

      {/* About Section */}
      <div className="flex items-center justify-center gap-x-20 pt-[70px] relative z-0">
        <img src={bg_img} alt="insurance_img" className="w-[270px]" />
        <div className="w-[647px] flex flex-col gap-y-4">
          <h2 className="text-[40px] font-[700] w-[500px] leading-[50px] tracking-wider">
            Unlock Your Financial Potential with WealthWise
          </h2>
          <p className="text-[18px] leading-[30px] w-[510px] tracking-wider">
            Get personalized and comprehensive recommendations from your
            <span className="font-semibold">AI-powered companion.</span>
          </p>
          <LoginForm />
        </div>
      </div>

      {/* Features */}
      <h2 className="text-xl font-semibold tracking-wider text-center underline decoration-wavy underline-offset-8 mt-7">
        {" "}
        Features{" "}
      </h2>
      <div className="overflow-x-hidden bg-white w-[95%] p-6 text-center mx-auto rounded mt-6 ">
        <div className="flex gap-x-6">
          <div className="bg-[#f5f5f5] flex flex-col items-center p-3 text-center rounded-lg shadow-lg  w-fit">
            <img src={feature_1} alt="" />
            <h3 className="text-[20px] font-semibold tracking-wider pt-2">
              AI Recommendations
            </h3>
            <p className="pt-2 tracking-wide">
              Leverage advanced AI for personalized product recommendations
              based on your uploaded data.
            </p>
          </div>

          <div className="bg-[#f5f5f5] shadow-md w-fit rounded-lg flex flex-col text-center p-3 items-center">
            <img src={feature_2} alt="" />
            <h3 className="text-[20px] font-semibold tracking-wider pt-2">
              Easy Upload
            </h3>
            <p className="pt-2 tracking-wide">
              Upload your CSV file and get instant recommendations without any
              complex setup or user control.
            </p>
          </div>

          <div className="bg-[#f5f5f5] shadow-md w-fit rounded-lg flex flex-col text-center p-3 items-center">
            <img src={feature_3} alt="" />
            <h3 className="text-[20px] font-semibold tracking-wider pt-2">
              Data Privacy
            </h3>
            <p className="pt-2 tracking-wide">
              Your uploaded data is processed securely, ensuring confidentiality
              and privacy at every step.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex justify-center mt-4">
        <img src={powered_by} className="w-40" />
      </footer>
    </div>
  );
};

export default Landing;

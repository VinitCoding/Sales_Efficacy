import React from "react";
import graph_1 from "../assets/distribution_of_current_location_states.png";
import graph_2 from "../assets/gross_annual_income.png";
import img_1 from '../assets/product_img/img_1.svg'
import img_2 from '../assets/product_img/img_2.svg'
import img_3 from '../assets/product_img/img_3.svg'
import img_4 from '../assets/product_img/img_4.svg'
import img_5 from '../assets/product_img/img_5.svg'
import { IoHomeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const WealthGuruPage = () => {
    const navigate = useNavigate()

    const OpenUploadFile = () => {
        navigate('/')
    }
  return (
    <div className="pt-14">
      <div className="flex justify-between mx-4 mt-4 ml-4">
        <select className="px-4 py-2 w-[300px] rounded-md">
          <option value="Select a option" selected disabled hidden>
            {" "}
            Select Option{" "}
          </option>
          <option value="Select a option">10001283</option>
          <option value="Select a option">10001284</option>
          <option value="Select a option">10001285</option>
          <option value="Select a option">10001286</option>
        </select>

        <button className="px-3 bg-black rounded-full" onClick={OpenUploadFile}><IoHomeSharp className="text-lg text-white"/></button>
      </div>

      <div>
        {/* Recommended Products */}
        <div className="mx-4 mt-6">
          <h2 className="text-2xl font-bold text-black ">
            Recommended Products
          </h2>

          <div className="flex justify-center p-3 mx-3 mt-3 bg-white rounded-md gap-x-20 w-fit">
            <div className="bg-[#ECECEC] w-fit p-3 rounded-md flex flex-col items-center justify-center gap-y-2">
              <img src={img_1} alt="" className="w-24"/>
              <h2>Product 1</h2>
            </div>
            <div className="bg-[#ECECEC] w-fit p-3 rounded-md flex flex-col items-center justify-center gap-y-2">
              <img src={img_2} alt="" className="w-24"/>
              <h2>Product 2</h2>
            </div>
            <div className="bg-[#ECECEC] w-fit p-3 rounded-md flex flex-col items-center justify-center gap-y-2">
              <img src={img_3} alt="" className="w-24"/>
              <h2>Product 3</h2>
            </div>
            <div className="bg-[#ECECEC] w-fit p-3 rounded-md flex flex-col items-center justify-center gap-y-2">
              <img src={img_4} alt="" className="w-24"/>
              <h2>Product 4</h2>
            </div>
            <div className="bg-[#ECECEC] w-fit p-3 rounded-md flex flex-col items-center justify-center gap-y-2">
              <img src={img_5} alt="" className="w-24"/>
              <h2>Product 5</h2>
            </div>
          </div>
        </div>

        {/* Demographics Section */}
        <div className="mx-4 mt-5">
          <h2 className="text-2xl font-bold text-black ">
            Check under which demographics you fall!
          </h2>

          <div className="flex justify-center mt-5 gap-x-40">
            <div className="p-2 bg-white rounded-lg w-fit" >
              <img src={graph_1} className="w-[300px]" />
            </div>
            <div className="p-2 bg-white rounded-lg w-fit">
              <img src={graph_2} alt="" className="w-[300px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WealthGuruPage;

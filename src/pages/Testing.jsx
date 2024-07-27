import React, { useState } from "react";
import graph_1 from "../assets/distribution_of_current_location_states.png";
import graph_2 from "../assets/gross_annual_income.png";
import img_1 from "../assets/product_img/img_1.svg";
import img_2 from "../assets/product_img/img_2.svg";
import img_3 from "../assets/product_img/img_3.svg";
import img_4 from "../assets/product_img/img_4.svg";
import img_5 from "../assets/product_img/img_5.svg";
import { IoHomeSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";

const WealthGuruPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [product, setProduct] = useState([{}]);
  const { data } = location.state;

  console.log("Data arrived:", data);

  const OpenUploadFile = () => {
    navigate("/");
  };
  const getCurrentDataItem = (num) => {
    setProduct([data.data[num]]);
  };

  console.log(product);
  return (
    <div className="pt-14">
      <div className="flex justify-between mx-4 mt-4 ml-4">
        <select
          className="px-4 py-2 w-[300px] rounded-md"
          onChange={(e) => getCurrentDataItem(e.target.value)}
        >
          <option value="Select a option" selected disabled hidden>
            {" "}
            Select Option{" "}
          </option>
          {data.customer_ids.map((item, index) => (
            <option
              value={item}
              key={index}
              className="h-[60px] overflow-y-auto"
            >
              {item}
            </option>
          ))}
        </select>

        <button className="px-3 bg-black rounded-full" onClick={OpenUploadFile}>
          <IoHomeSharp className="text-lg text-white" />
        </button>
      </div>

      <div>
        {/* Recommended Products */}
        <div className="mx-4 mt-6">
          <h2 className="text-2xl font-bold text-black ">
            Recommended Products
          </h2>

          <div className="flex justify-center p-3 mt-3 bg-white rounded-md gap-x-3 w-fit">
            {product &&
              product[0] &&
              product[0].map((item, index) => (
                <div
                  className="bg-[#ECECEC] w-fit p-2 rounded-md flex flex-col items-center justify-start"
                  key={index}
                >
                  <img src={img_1} alt="" className="w-24"/>
                  <h2>
                    <span className="font-semibold text-left">Product {index + 1} :  </span>{item.rec}
                  </h2>
                  <h3><span className="font-semibold text-left">Recommendation Score:</span> {item.score}</h3>
                </div>
              ))}
          </div>
        </div>

        {/* Demographics Section */}
        <div className="mx-4 mt-5">
          <h2 className="text-2xl font-bold text-black ">
            Check under which demographics you fall!
          </h2>

          <div className="flex justify-center gap-x-40">
            <div className="p-2 bg-white rounded-lg w-fit">
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

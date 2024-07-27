import React, { useState } from "react";
import graph_1 from "../assets/distribution_of_current_location_states.png";
import graph_2 from "../assets/gross_annual_income.png";
import img_1 from "../assets/product_img/img_1.svg";
import { IoHomeSharp } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import chistats_logo from "../assets/chistats_logo.png";

const WealthGuruPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [product, setProduct] = useState([{}]);
  const { data } = location.state;
  const [productPresent, setProductPresent] = useState(false);

  console.log("Data arrived:", data);

  const OpenUploadFile = () => {
    navigate("/");
  };
  const getCurrentDataItem = (num) => {
    setProduct([data.data[num]]);
    setProductPresent(true);
  };

  console.log(product);
  return (
    <div
      className="bg-[#CBDDFF] h-screen"
    >
      <div className="fixed flex items-center justify-between w-full px-10 py-1 bg-white shadow-lg">
        <h2 className="font-semibold text-[#1E1D5C] text-2xl text-darkBlue hover:cursor-default">
          Wealth<span className="text-[#FF540B]"> Wise</span>
        </h2>
        <img src={chistats_logo} alt="logo" className="h-6 w-[120px]" />
      </div>

      <div className="flex justify-between pt-16 mx-4 ml-4">
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
            {productPresent ? (
              product &&
              product[0] &&
              product[0].map((item, index) => (
                <div
                  className="bg-[#ECECEC] w-fit p-2 rounded-md flex flex-col items-center justify-center"
                  key={index}
                >
                  <img src={img_1} alt="" className="w-24" />
                  <h2 className="mt-1">
                    <span className="font-semibold text-left">
                      Product {index + 1} :{" "}
                    </span>
                    {item.rec}
                  </h2>
                  <h3 className="">
                    <span className="font-semibold">Recommendation Score:</span>{" "}
                    {item.score}
                  </h3>
                </div>
              ))
            ) : (
              <div className="bg-[#ECECEC] w-fit p-3 rounded-md flex flex-col items-center justify-center gap-y-2">
                <img src={img_1} alt="" className="w-24" />
                <h2>Product</h2>
                <h3>Recommendation Score</h3>
              </div>
            )}
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

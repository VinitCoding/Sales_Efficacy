import React, { useState } from "react";
import graph_1 from "../assets/distribution_of_current_location_states.png";
import graph_2 from "../assets/gross_annual_income.png";
import img_1 from "../assets/product_img/img_1.svg";
import { CgSoftwareUpload } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";
import chistats_logo from "../assets/chistats_logo.png";
import powered_by from "../assets/powered_by.svg";
import {
  Dialog,
  DialogBody,
  DialogHeader,
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

const WealthGuruPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state;
  // State for setting products and its info
  const [product, setProduct] = useState([{}]);

  const [productPresent, setProductPresent] = useState(false);

  console.log("Data arrived:", data);

  const OpenUploadFile = () => {
    navigate("/file_upload");
  };

  const openLandingPage = () => {
    navigate('/')
  }
  const getCurrentDataItem = (num) => {
    setProduct([data.data[num]]);
    setProductPresent(true);
  };

  const zoomInGraph = () => {};

  console.log(product);
  return (
    <div className="bg-[#CBDDFF] h-screen overflow-x-hidden font-normal tracking-wider">
      {/* Header */}
      <div className="fixed flex items-center justify-between w-full px-10 py-1 bg-white shadow-lg">
        <h2 className="font-semibold text-[#1E1D5C] text-2xl text-darkBlue hover:cursor-default">
          Wealth<span className="text-[#FF540B]"> Wise</span>
        </h2>
        <img src={chistats_logo} alt="logo" className="h-6 w-[120px]" />
      </div>

      {/* Select ID Options and Profile view*/}
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

        {/* Profile */}
        <Popover
          placement="bottom-end"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: -25 },
          }}
        >
          <PopoverHandler>
            <button className="px-2.5 bg-white rounded-full text-blue-gray-700">
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
                onClick={OpenUploadFile}
              >
                <CgSoftwareUpload className="text-lg text-[#3a3a3a]" />
                <span className="mt-0.5 text-[15px]">Reupload</span>
              </button>
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

      {/* User Details */}
      <div className="mt-6 ml-3">
        <h2 className="text-2xl font-bold text-[#1E1D5C]">User Details</h2>
        <div className="flex mt-2 gap-x-20">
          <div className="flex flex-col">
            <label className="font-semibold">Name</label>
            <input
              type="text"
              className="px-2 py-2 w-[300px] text-[16px] bg-transparent focus:outline-none rounded-md border-[1.5px] border-[#6666]"
              disabled
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Age</label>
            <input
              type="text"
              className="px-2 py-2 w-[300px] text-[16px] bg-transparent focus:outline-none rounded-md border-[1.5px] border-[#6666] "
              disabled
              value={"60"}
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Gender</label>
            <input
              type="text"
              className="px-2 py-2 w-[300px] text-[16px] bg-transparent focus:outline-none rounded-md border-[1.5px] border-[#6666] "
              disabled
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold">Location</label>
            <input
              type="text"
              className="px-2 py-2 w-[300px] text-[16px] bg-transparent focus:outline-none rounded-md border-[1.5px] border-[#6666] "
              disabled
            />
          </div>
          <div></div>
        </div>
      </div>

      {/* Recommended Products */}
      <div>
        <div className="mx-4 mt-6 ">
          <div className="flex justify-start">
            <h2 className="text-2xl font-bold text-[#1E1D5C]">
              Recommended Products
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center text-left">
            {/* Grid way */}
            {/* <div className="grid grid-cols-3 gap-4 p-3 mt-3 bg-white rounded-md place-items-center w-fit place-content-center">
              {productPresent ? (
                product &&
                product[0] &&
                product[0].map((item, index) => (
                  <div
                    className="bg-[#ECECEC] w-[250px] p-2 rounded-md flex flex-col items-center justify-center"
                    key={index}
                  >
                    <img src={img_1} alt="" className="w-24" />
                    <h2 className="flex flex-col items-center justify-center mt-1">
                      <span className="font-semibold text-left">
                        Product {index + 1} :{" "}
                      </span>
                      {item.rec}
                    </h2>
                    <h3 className="">
                        Recommendation Score:
                      <span className="font-semibold">
                      {item.score}
                      </span>
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
            </div> */}

            {/* Flex way */}
            <div className="flex items-start justify-start p-3 mt-3 bg-white rounded-md gap-x-3 w-fit">
              {productPresent ? (
                product &&
                product[0] &&
                product[0].map((item, index) => (
                  <div
                    className="bg-[#ECECEC] w-[282px] p-2 rounded-md flex flex-col items-center "
                    key={index}
                  >
                    <img src={img_1} alt="" className="w-24" />
                    <h2 className="flex flex-col items-center justify-center py-3">
                      <span className="pb-3 font-semibold text-left">
                        Product {index + 1} :{" "}
                      </span>
                      {item.rec}
                    </h2>
                    <h3 className="">
                      Recommendation Score:{" "}
                      <span className="font-semibold">{item.score}</span>
                    </h3>
                  </div>
                ))
              ) : (
                <div className="bg-[#ECECEC] w-fit p-3 rounded-md flex flex-col items-start justify-start gap-y-2">
                  <img src={img_1} alt="" className="w-24" />
                  <h2>Product</h2>
                  <h3>Recommendation Score</h3>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Demographics Section */}
        <div className="mx-4 mt-8">
          <h2 className="text-2xl font-bold text-[#1E1D5C] ">
            Check under which demographics you fall!
          </h2>

          <div className="grid grid-cols-2 mt-4 place-items-center mx-auto gap-6 w-[45%]">
            <Dialog>
              <DialogHeader>Graph 1</DialogHeader>
              <DialogBody>
                <div className="p-2 bg-white rounded-lg w-fit">
                  <img src={graph_1} className="w-[600px]" />
                </div>
              </DialogBody>
            </Dialog>
            <div className="p-2 bg-white rounded-lg w-fit">
              <img src={graph_2} alt="" className="w-[600px]" />
            </div>
            <div className="p-2 bg-white rounded-lg w-fit">
              <img src={graph_2} alt="" className="w-[600px]" />
            </div>
            <div className="p-2 bg-white rounded-lg w-fit">
              <img src={graph_2} alt="" className="w-[600px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex justify-center pb-4 mt-4">
        <img src={powered_by} className="w-40" />
      </footer>
    </div>
  );
};

export default WealthGuruPage;

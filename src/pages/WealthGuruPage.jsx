import React, { useState } from "react";

import img_1 from "../assets/product_img/img_1.svg";
import { CgSoftwareUpload } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";
import chistats_logo from "../assets/chistats_logo.png";
import powered_by from "../assets/powered_by.svg";
import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import Select from "react-select";
import Graphs from "../components/Graphs";

const WealthGuruPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = location.state;
  console.log("Data arrived:", data);

  const selec_options = data.customer_ids.map((item) => ({
    value: item,
    label: item,
  }));

  const [selectedOption, setSelectedOption] = useState({});

  // State for setting products and its info
  const [product, setProduct] = useState([{}]);

  // State for getting info about the users
  const [info, setInfo] = useState([{}]);

  // State for managing the product
  const [productPresent, setProductPresent] = useState(false);

  // State for checking if the data is present or not
  const [infoPresent, setInfoPresent] = useState(false);

  // Function to navigate for reupload
  const OpenUploadFile = () => {
    navigate("/file_upload");
  };

  // function performing signOut functionality
  const openLandingPage = () => {
    navigate("/");
  };

  // function to handle the product info
  const handleSelectedOption = (e) => {
    const selectedCustomerID = e.value;
    setSelectedOption(selectedCustomerID);
    setProduct(data.data[selectedCustomerID]);
    setInfo(data.customer_info[selectedCustomerID]);
    setProductPresent(true);
    setInfoPresent(true);
    setSelectedOption(null);
  };

  // console.log('Selected data is ', typeof selectedOption);

  // console.log("info[0] is : ", info[0]);
  // console.log(infoPresent);
  // console.log(product);
  // console.log(info[0].Name);
  // console.log(info[0][0].Age);
  // console.log(info[0][0].Gender);
  // console.log(info[0][0].Location);
  // function displayUserInfo(info_item) {
  //   console.log("Name:", info_item);
  //     console.log("Name:", info_item[0].Name);
  //     console.log("Age:", info_item[0].Age);
  //     console.log("Gender:", info_item[0]['Gender']);
  //     console.log("Location:", info_item[0]['Location']);
  //   }
  return (
    <div className="bg-[#CBDDFF] h-screen overflow-x-hidden font-normal ">
      {/* Header */}
      <div className="fixed flex items-center justify-between w-full px-10 py-1 bg-white shadow-lg">
        <h2 className="font-semibold text-[#1E1D5C] text-2xl text-darkBlue hover:cursor-default">
          Wealth<span className="text-[#FF540B]">Wise</span>
        </h2>
        <img src={chistats_logo} alt="logo" className="h-6 w-[120px]" />
      </div>

      {/* Select ID Options and Profile view*/}
      <div className="flex justify-between pt-16 mx-4 ml-4">
        {/* Search bar */}
        <Select
          onChange={(e) => handleSelectedOption(e)}
          options={selec_options}
          className="w-[400px]"
          placeholder="Enter name"
        />

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
                <h2 className="text-lg font-bold">Atharv Ganla</h2>
                <p>atharv.ganla@chistats.com</p>
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
      <div className="pt-4 pb-6 mt-6 ml-3 bg-white rounded-lg ps-4 w-[1400px]">
        <h2 className="text-2xl font-bold text-[#1E1D5C]">User Details</h2>
        {infoPresent ? (
          info &&
          info.map((info_item) => (
            <div className="flex mt-2 gap-x-20">
              <div className="flex flex-col">
                <label className="font-semibold">Name</label>
                <input
                  type="text"
                  className="px-2 py-2 w-[280px] text-[16px] bg-transparent focus:outline-none rounded-md border-[1.5px] border-[#6666]"
                  value={info_item.Name}
                  disabled
                />
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Age</label>
                <input
                  type="text"
                  className="px-2 py-2 w-[280px] text-[16px] bg-transparent focus:outline-none rounded-md border-[1.5px] border-[#6666] "
                  value={info_item.Age}
                  disabled
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Gender</label>
                <input
                  type="text"
                  className="px-2 py-2 w-[280px] text-[16px] bg-transparent focus:outline-none rounded-md border-[1.5px] border-[#6666] "
                  value={info_item.Gender}
                  disabled
                ></input>
              </div>
              <div className="flex flex-col">
                <label className="font-semibold">Location</label>
                <input
                  type="text"
                  className="px-2 py-2 w-[280px] text-[16px] bg-transparent focus:outline-none rounded-md border-[1.5px] border-[#6666] "
                  value={info_item.Location}
                  disabled
                ></input>
              </div>
            </div>
          ))
        ) : (
          <div className="flex mt-2 gap-x-20">
            <div className="flex flex-col">
              <label className="font-semibold">Name</label>
              <input
                type="text"
                className="px-2 py-2 w-[280px] text-[16px] bg-transparent focus:outline-none rounded-md border-[1.5px] border-[#6666]"
                disabled
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Age</label>
              <input
                type="text"
                className="px-2 py-2 w-[280px] text-[16px] bg-transparent focus:outline-none rounded-md border-[1.5px] border-[#6666] "
                disabled
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Gender</label>
              <input
                type="text"
                className="px-2 py-2 w-[280px] text-[16px] bg-transparent focus:outline-none rounded-md border-[1.5px] border-[#6666] "
                disabled
              />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">Location</label>
              <input
                type="text"
                className="px-2 py-2 w-[280px] text-[16px] bg-transparent focus:outline-none rounded-md border-[1.5px] border-[#6666] "
                disabled
              />
            </div>
          </div>
        )}
      </div>

      {/* Recommended Products */}
      <div className="pt-4 pb-6 ml-3 mt-6 bg-white rounded-lg pl-4 w-[1400px]">
        <div className="flex justify-start">
          <h2 className="text-2xl font-bold text-[#1E1D5C] pb-4">
            Recommended Products
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center text-left w-fit">
          <div className="flex items-start justify-start bg-white rounded-md md:gap-x-2 lg:gap-x-3">
            {productPresent ? (
              product &&
              product.map((item, index) => (
                <div
                  className="bg-[#ECECEC] w-[265px] p-2 rounded-md flex flex-col items-center h-[220px]"
                  key={index}
                >
                  <img src={img_1} alt="" className="w-24" />
                  <h4 className="flex flex-col items-center justify-center py-3">
                    <span className="pb-1 text-center">
                      Product {index + 1}
                      {""}
                    </span>
                    <span className="text-[#1e1d5c] font-semibold text-center">
                      {item.rec}
                    </span>
                    <span className="text-[#1e1d5c] font-semibold text-center">
                      {item.rec_family}
                    </span>
                  </h4>
                  <h4 className="">
                    Recommendation Score:{" "}
                    <span className="font-bold text-[#1e1d5c]">
                      {item.score}
                    </span>
                  </h4>
                </div>
              ))
            ) : (
              <div className="bg-[#ECECEC] w-fit p-3 rounded-md flex flex-col items-start justify-start gap-y-2">
                {/* /* <img src={img_1} alt="" className="w-24" /> */}
                {/* <h2>Product</h2> */}
                <h3 className="justify-center text-center align-middle align-center">
                  Select a User from the Dropdown
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Demographics Section */}
      <div className="mx-4 mt-1">
        <h2 className="pt-6 text-2xl text-center font-bold text-[#1E1D5C] ">
          Demographical Analysis
        </h2>
        <Graphs img_list={data.img_list}/>
      </div>

      {/* Footer */}
      <footer className="flex justify-center pb-4 mt-4">
        <img src={powered_by} className="w-40" />
      </footer>
    </div>
  );
};

export default WealthGuruPage;

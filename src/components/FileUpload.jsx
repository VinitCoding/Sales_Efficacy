import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import cloud_upload from "../assets/upload.svg";
import { FaFileAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import upload_img from "../assets/upload_img.png";
import analyze_img from "../assets/Analyze.svg";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Checkbox,
  Radio,
} from "@material-tailwind/react";
const FileUpload = () => {
  const inputRef = useRef();
  const [selectFile, setSelectFile] = useState(null);
  const [data, setData] = useState([]);

  // State for activities
  const [activityWindow, setActivityWindow] = useState(false);
  const [activity, setActivity] = useState("");

  // State for parameters
  const [parameterWindow, setParameterWindow] = useState(false);

  // State for analyze window
  const [analyzeWindow, setAnalyzeWindow] = useState(false);

  // State for messages
  const [message, setMesssage] = useState('')
  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const file_validation = selectedFile.name.split(".").pop().toLowerCase();

      if (
        file_validation === "xls" ||
        file_validation === "csv" ||
        file_validation === "xlsx"
      ) {
        setSelectFile(selectedFile);
        setActivityWindow(true);
        console.log("Selected File Name:", selectedFile);
      } else {
        setSelectFile(null);
        setMesssage('Please select the supported file!!!')
      }
    }
  };

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleActivityOption = (option) => {
    setActivity(option);
    console.log(option);
  };

  const handleValueToParameters = (act_val) => {
    setActivityWindow(false);
    setParameterWindow(true);
    console.log(act_val);
  };

  const NavigateBackToActivityWindow = () => {
    setActivityWindow(true);
    setParameterWindow(false);
  };

  const NavigateBackToSelectFile = () => {
    // setSelectFile(null)
    location.reload();
    setActivityWindow(false);
  };

  const OpenAnalyzeWindow = () => {
    setParameterWindow(false);
    setAnalyzeWindow(true);
  };

  const handleRemoveFile = () => {
    location.reload()
    setAnalyzeWindow(false)
  }

  return (
    <div className="flex justify-center mx-auto bg-white rounded-lg shadow-lg gap-x-24 w-fit h-fit ">
      <Toaster />
      <div className="h-full px-16 pt-16 w-fit">
        <input
          type="file"
          ref={inputRef}
          style={{ display: "none" }}
          onChange={handleChange}
        />

        {/* Upload File */}

        {analyzeWindow ? (
          <div className="bg-[#EDEDED] flex flex-col justify-center items-center -mt-10 px-5 py-3 border-[2px] border-dashed border-black rounded-sm">
            {/* Heading part */}
            <div className="text-center">
              <h2 className="text-[25px] font-bold ">Analyze File</h2>
              <h3 className="mt-1.5 text-[20px] font-semibold text-[#2b2b2b] text-start">We help you analyze your leads better</h3>
              <p className="text-base text-[#5c5c5c] text-start">
                Our goal is to carve out the best leads from you humongous data
              </p>
            </div>

            {/* Body Part */}
            <div className="flex overflow-y-auto justify-center items-center px-5 py-2 rounded-lg gap-x-5 bg-[#F8F7F7] mt-5 w-fit">
              <FaFileAlt className="text-[#3884c2] text-xl" />
              <div className="flex flex-col items-center justify-center gap-x-1">
                <h3 className="text-[16px]">{selectFile.name}</h3>
              </div>
              <button className="rounded-full bg-[#d0e2fe] p-2 text-center">
                <IoMdClose className="text-[#3378b0]" onClick={handleRemoveFile}/>
              </button>
            </div>
            <button className="px-4 py-2 mt-6 text-white bg-black rounded-md">Analyze</button>
          </div>
        ) : (
          <div className="bg-[#ededed] border-[2px] border-black border-dashed rounded-mdcursor-pointer px-20 py-2 text-center flex flex-col items-center -mt-8 pb-5">
            <h4 className="text-[22px] font-semibold text-[#175195] px-4">
              Upload a File
            </h4>
            <hr className="text-[#fd3030] w-full border-[1px] mt-2" />
            <h4 className="text-lg ">
              Get Insights on your choice of Client Data file
            </h4>
            <button
              className={`bg-[#3C3C3C] text-white px-4 py-2 rounded-md mt-6 text-center `}
              onClick={handleClick}
            >
              Click to upload File
            </button>
            <p className="text-[#3C3C3C] text-[17px] font-semibold mt-6">
              Supported File Formats:{" "}
              <span className="text-[#989898] ">.xls, .csv, .xlsx</span>
            </p>
            {
              message && (
                <p className="mt-3 text-base font-semibold text-red-400">{message}</p>
              )
            }
          </div>
        )}

        {/* Activity Window */}
        {activityWindow && (
          <Dialog open={activityWindow} handler={handleChange} size="xs">
            <DialogHeader className="text-center">
              Please select activity
            </DialogHeader>
            <DialogBody className="flex flex-col -mt-3">
              <Radio
                id="lead_crafter"
                label="Lead Crafter"
                name="activity"
                onChange={(e) => handleActivityOption(e.target.value)}
                value="lead_crafter"
              />
              <Radio
                id="cross_sell"
                label="Cross Sell"
                name="activity"
                onChange={(e) => handleActivityOption(e.target.value)}
                value="cross_sell"
              />
            </DialogBody>
            <DialogFooter className="flex gap-x-6">
              <button
                className="px-4 py-2 text-black bg-transparent rounded-lg outline hover:shadow-md"
                onClick={NavigateBackToSelectFile}
              >
                Close
              </button>
              <button
                className="px-4 py-2 text-white bg-black rounded-lg hover:shadow-xl"
                onClick={() => handleValueToParameters(activity)}
              >
                Next
              </button>
            </DialogFooter>
          </Dialog>
        )}

        {/* Parameter Window */}
        {parameterWindow && (
          <Dialog open={parameterWindow} size="md">
            <DialogHeader>Fill the parameters</DialogHeader>
            <DialogBody className="-mt-3">
              <form className="flex flex-col gap-y-4">
                {/* User ID */}
                <div className="flex items-center justify-between">
                  <label className="text-[16px] text-black">
                    User ID Columns<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="focus:outline-none border-[1px] border-black rounded-md px-2 py-0.5 w-[350px]"
                    required={true}
                  />
                </div>
                {/* Date Picker */}
                <div className="flex items-center justify-between">
                  <label className="text-[16px] text-black ">
                    Period<span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-x-2">
                    <div className="flex items-center gap-x-1">
                      <label className="text-black">From</label>
                      <input
                        type="date"
                        className="border-[1px] rounded-sm border-black pl-1"
                        required={true}
                      />
                    </div>
                    <div className="flex items-center gap-x-1">
                      <label className="text-black">To</label>
                      <input
                        type="date"
                        className="border-[1px] rounded-sm border-black pl-1"
                        required={true}
                      />
                    </div>
                  </div>
                </div>
                {/* Independent Column */}
                <div className="flex justify-between">
                  <label className="text-[16px] text-black">
                    Independent column
                  </label>
                  <select
                    name=""
                    id=""
                    className="w-[350px] border-[1px] border-black rounded-md px-3 py-1"
                  >
                    <option value="">Test</option>
                  </select>
                </div>
                {/* Dependent Column */}
                <div className="flex justify-between">
                  <label className="text-[16px] text-black">
                    Dependent column
                  </label>
                  <select
                    name=""
                    id=""
                    className="w-[350px] border-[1px] border-black rounded-md px-3 py-1"
                  >
                    <option value="">Test</option>
                  </select>
                </div>
              </form>
            </DialogBody>
            <DialogFooter className="flex gap-x-4">
              <button
                className="px-4 py-2 bg-transparent border-[1.8px] border-black text-black rounded"
                onClick={NavigateBackToActivityWindow}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-white bg-black rounded"
                onClick={OpenAnalyzeWindow}
              >
                Submit
              </button>
            </DialogFooter>
          </Dialog>
        )}
      </div>

      <img
        src={selectFile ? analyze_img : upload_img}
        className="w-[500px] h-[300px]"
      />
    </div>
  );
};

export default FileUpload;

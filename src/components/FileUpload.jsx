import React, { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaFileAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import upload_img from "../assets/upload_svg.svg";
import analyze_img from "../assets/Analyze.svg";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Checkbox,
  Radio,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const FileUpload = () => {
  const inputRef = useRef();
  const [selectFile, setSelectFile] = useState(null);
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const url = "http://salesassist.chistats.ai:8020";

  // State for activities
  const [activityWindow, setActivityWindow] = useState(false);
  const [activity, setActivity] = useState("");

  // State for parameters
  const [parameterWindow, setParameterWindow] = useState(false);

  // State for analyze window
  const [analyzeWindow, setAnalyzeWindow] = useState(false);

  // State for messages
  const [message, setMesssage] = useState("");
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
        setMesssage("");
        console.log("Selected File Name:", selectedFile);
      } else {
        setSelectFile(null);
        setMesssage("Please select the supported file!!!");
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
    location.reload();
    setAnalyzeWindow(false);
  };

  const handleNavigate = async () => {
    if (!selectFile) return;
    let formData = new FormData();
    formData.append("file", selectFile);
    if (activity === "lead_crafter") {
      // const response = await axios.post(`${url}/lead_crafter`);
      navigate("/lead_crafter");
      // console.log(response);
    } else if (activity === "cross_sell") {
      try {
        const toastID = toast.loading("Uploading File", {
          duration: 2000,
        });
        const response = await axios.post(
          `${url}/generate_recommendations`,
          formData,
          {
            onUploadProgress: () => {
              toast.loading(`Calculating Data...`, {
                id: toastID,
              });
            },
          }
        );
        const resp_data = response.data.output_data;
        console.log(resp_data);
        setData({ resp_data });
        setTimeout(() => {
          toast.success("Data fetched successfully", {
            id: toastID,
            duration: 1500,
          });
          setTimeout(() => {
            if (data) {
              navigate("/wealth-wise", { state: { data: resp_data } });
            }
          }, 1000);
        }, 1000);
        console.log(response);
      } catch (error) {
        toast.error("Error while uploading and fetching the data...", {
          duration: 3000,
        });

        console.log(error);
      }
    }
  };

  return (
    <div className="flex justify-center mx-auto bg-white rounded-lg shadow-lg gap-x-28 w-fit h-fit ">
      <Toaster />
        <input
          type="file"
          ref={inputRef}
          style={{ display: "none" }}
          onChange={handleChange}
        />
      <div className="h-full pt-16 pr-12 pl-11 w-fit">
        {/* Upload File */}

        {analyzeWindow ? (
          <div className="bg-[#ededed] flex flex-col justify-center items-center -mt-10 px-5 py-3 border-[2px] border-dashed border-black rounded-sm mb-6">
            {/* Heading part */}
            <div className="text-center">
              <h2 className="text-[25px] font-bold ">Analyze File</h2>
              {/* <br></br> */}
              <h3 className="mt-1.5 text-[20px] font-semibold text-[#2b2b2b] text-center">
                We help you analyze your <span className="text-[#FF540B]">leads better</span>
              </h3>
              <p className="text-base text-[#5c5c5c] text-start">
                Our goal is to carve out the <span className="text-[#FF540B]">BEST</span> leads from your <span className="text-[#FF540B]">humongous</span> data
              </p>
            </div>

            {/* Body Part */}
            <div className="flex overflow-y-auto justify-evenly items-center p-2 gap-x-3 rounded-lg bg-[#F8F7F7] mt-5 w-fit">
              <FaFileAlt className="text-[#3884c2] text-xl" />
              <div className="flex flex-col items-center justify-center gap-x-1">
                <h3 className="text-[16px]">{selectFile.name}</h3>
              </div>
              <button className="rounded-full bg-[#d0e2fe] p-2 text-center">
                <IoMdClose
                  className="text-[#3378b0]"
                  onClick={handleRemoveFile}
                />
              </button>
            </div>
            <button
              className="px-4 py-2 mt-6 text-white bg-[#FF540B] rounded-md"
              onClick={handleNavigate}
            >
              Analyze
            </button>
          </div>
        ) : (
          <div className="bg-[#ededed] border-[2px] border-black border-dashed rounded-mdcursor-pointer px-20 py-2 mb-8 text-center flex flex-col items-center -mt-6 pb-5">
            <h4 className="text-[22px] font-semibold text-[#1e1d5c] px-4">
              Upload a File
            </h4>
            <hr className="text-[#1e1d5c] w-full border-[1px] mt-2" />
            <h4 className="text-lg ">
              Get <span className="text-[#FF540B]">Insights</span> on your choice of <span className="text-[#FF540B]">Client Data</span> file
            </h4>
            <button
              className={`bg-[#FF540B] text-white px-4 py-2 rounded-md mt-6 text-center `}
              onClick={handleClick}
            >
              Click to upload File
            </button>
            <p className="text-[#1e1d5c] text-[17px] font-semibold mt-6">
              Supported File Formats:{" "}
              <span className="text-[#1e1d5c] ">.xls, .xlsx, .csv</span>
            </p>
            {message && (
              <p className="mt-3 text-base font-semibold text-red-400">
                {message}
              </p>
            )}
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
                label="LeadCrafter: Get Shortlisted Sales Leads"
                name="activity"
                onChange={(e) => handleActivityOption(e.target.value)}
                value="lead_crafter"
                
              />
              <br></br>
              <Radio
                id="cross_sell"
                label="WealthWise: Get Product Recommendations for your Users"
                name="activity"
                onChange={(e) => handleActivityOption(e.target.value)}
                value="cross_sell"
                
              />
            </DialogBody>
            <DialogFooter className="flex gap-x-6">
              <button
                className="px-4 py-2 text-[#1E1D5C] bg-transparent rounded-lg border-[1px] border-[#1E1D5C] hover:shadow-md"
                onClick={NavigateBackToSelectFile}
              >
                Close
              </button>
              <button
                className="px-4 py-2 text-white bg-[#1E1D5C] rounded-lg hover:shadow-xl"
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
            <DialogHeader>Fill the Parameters</DialogHeader>
            <DialogBody className="-mt-3">
              <form className="flex flex-col gap-y-4">
                {/* User ID */}
                <div className="flex items-center justify-between">
                  <label className="text-[16px] text-black">
                    User ID Columns
                  </label>
                  <input
                    type="text"
                    className="focus:outline-none border-[1px] border-black rounded-md px-2 py-0.5 w-[350px]"
                    aria-required
                  />
                </div>
                {/* Date Picker */}
                <div className="flex items-center justify-between">
                  <label className="text-[16px] text-black ">
                    Recommendation Period
                  </label>
                  <div className="flex items-center gap-x-2">
                    <div className="flex items-center gap-x-1">
                      <label className="text-black">From</label>
                      <input
                        type="date"
                        className="border-[1px] rounded-sm border-black pl-1"
                        aria-required
                      />
                    </div>
                    <div className="flex items-center gap-x-1">
                      <label className="text-black">To</label>
                      <input
                        type="date"
                        className="border-[1px] rounded-sm border-black pl-1"
                        aria-required
                      />
                    </div>
                  </div>
                </div>
                {/* Independent Column */}
                <div className="flex justify-between">
                  <label className="text-[16px] text-black">
                    Recommendation for
                  </label>
                  <select
                    name=""
                    id=""
                    className="w-[350px] border-[1px] border-black rounded-md px-3 py-1"
                  >
                    <option disabled hidden selected>
                      Select Months
                    </option>
                    <option value="">Product Purchase 3 Months</option>
                    <option value="">Product Purchase 6 Months</option>
                  </select>
                </div>
                {/* Dependent Column */}
                <div className="flex justify-between">
                  <label className="text-[16px] text-black">Input Data</label>
                  <select
                    name=""
                    id=""
                    className="w-[350px] border-[1px] border-black rounded-md px-3 py-1"
                  >
                    <option disabled hidden selected>
                      Select Data
                    </option>
                    <option value="">-- Select All --</option>
                    <option value="">Existing Portfolio</option>
                    <option value="">SIP Installments</option>
                    <option value="">SIP Period</option>
                    <option value="">Monthly Growth</option>
                    <option value="">City Category</option>
                    <option value="">Occupation</option>
                    <option value="">Customer Gender</option>
                    <option value="">Age</option>
                  </select>
                </div>
              </form>
            </DialogBody>
            <DialogFooter className="flex gap-x-4">
              <button
                className="px-4 py-2 bg-transparent border-[1.8px] border-[#1e1d5c] text-[#1e1d5c]"
                onClick={NavigateBackToActivityWindow}
                style={{ borderRadius: '12px' }}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 border-[1.8px] border-[#1e1d5c] text-white bg-[#1e1d5c]"
                onClick={OpenAnalyzeWindow}
                style={{ borderRadius: '12px' }}
              >
                Submit
              </button>
            </DialogFooter>
          </Dialog>
        )}
      </div>

      {selectFile ? (
        <img src={analyze_img} className="w-[300px] pr-10 py-4" />
      ) : (
        <img src={upload_img} alt="" className="w-[400px] pr-10" />
      )}
    </div>
  );
};

export default FileUpload;

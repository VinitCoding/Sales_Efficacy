import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
import login_banner_img from "../assets/login_banner.jpg";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const LoginForm = () => {
  const emailID = "vinit.gite@chistats.com";
  const password = "Vinit";
  const navigate = useNavigate();

  // State for opening login form
  const [open, setOpen] = useState(false);

  // State for form handling
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // State for showing and hiding password
  const [isShowPassword, setIsShowPassword] = useState(false);

  // State for handling errors
  const [error, setError] = useState({});

  const handleOpeningForm = () => {
    setOpen(!open);
  };

  const saveToLocalStorage = (form_data) => {
    const save_info = localStorage.setItem("user_info", form_data);

    console.log(save_info);
  };

  const validateSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validateSchema.validate(formData, { abortEarly: false });
      console.log("Form Submitted");
      saveToLocalStorage(formData);
      setTimeout(() => {
        setTimeout(() => {
          navigate("/file_upload");
        }, 3500);
        toast.success("Login Successful");
      }, 1500);
    } catch (error) {
      const newError = {};

      error.inner.forEach((err) => {
        newError[err.path] = err.message;
      });

      setError(newError);
    }
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePassowrd = () => {
    setIsShowPassword(!isShowPassword);
  };

  console.log(formData);
  console.log(error);
  // #1c1b70
  return (
    <div>
      <button
        className="px-4 py-2 text-[14px] font-semibold normal-case w-fit bg-gradient-to-r from-[#3c3abe] to-[#1c1b70] text-white rounded tracking-wider hover:shadow-lg hover:shadow-[#1e1d5c98]"
        onClick={handleOpeningForm}
      >
        Login
      </button>
      <Dialog open={open} handler={handleOpeningForm} size="xs">
        <Toaster />
        <DialogHeader className="flex flex-col items-start justify-start text-left">
          <img
            src={login_banner_img}
            alt="login_banner_img"
            className="w-full h-[150px] rounded-lg"
          />
          <h2 className="mt-3 text-[22px]">Welcome to Sales Assist</h2>
          <p className="text-[15px] font-normal">
            Please enter your details to Login
          </p>
        </DialogHeader>
        <DialogBody className="-mt-5">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-1">
              <label className="text-base text-black">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="px-1 py-1 focus:outline-none border-[1px] border-black rounded text-base text-[#383838]"
                value={formData.email}
                onChange={handleOnChange}
              />
              {error.email && <p className="text-red-400">{error.email}</p>}
            </div>
            <div className="flex flex-col mt-2 gap-y-1">
              <div className="flex items-center justify-between">
                <label className="text-base text-black">Password</label>
                <a
                  href="#forgot_password"
                  className="text-[13px] text-black hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="focus:outline-none border-[1px] border-black rounded flex justify-between items-center px-1 text-base">
                <input
                  type={isShowPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  className="py-1 focus:outline-none text-[#383838] w-[90%]"
                  value={formData.password}
                  onChange={handleOnChange}
                  autoComplete="name"
                />
                {isShowPassword ? (
                  <>
                    <BiSolidShow
                      className="mr-2 text-lg text-[#1c1b70] hover:cursor-pointer"
                      onClick={handlePassowrd}
                    />
                  </>
                ) : (
                  <div>
                    <BiSolidHide
                      className="mr-2 text-lg text-[#1c1b70] hover:cursor-pointer"
                      onClick={handlePassowrd}
                    />
                  </div>
                )}
              </div>
              {error.password && (
                <div className="text-red-400">{error.password}</div>
              )}
            </div>

            <button
              className="px-4 mt-4 py-2 text-[13px] w-full bg-gradient-to-r from-[#35338f] to-[#17165f] text-white font-semibold rounded-md"
              type="submit"
              onSubmit={handleSubmit}
            >
              Login
            </button>
          </form>
        </DialogBody>

        <DialogFooter className="flex flex-col -mt-6 gap-y-3">
          <a href="#sign_up" className="text-[12px] text-[#17165f] hover:underline">
            Don't have an accout? <span className="font-semibold">SignUp</span>
          </a>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default LoginForm;

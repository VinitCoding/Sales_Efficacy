import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
import login_banner_img from '../assets/login_banner.jpg'

const LoginForm = () => {
  const emailID = "vinit.gite@chistats.com";
  const password = "Vinit";

  // State for opening login form
  const [open, setOpen] = useState(false);

  const handleOpeningForm = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Button
        className="px-4 py-2 text-base font-medium normal-case w-fit"
        onClick={handleOpeningForm}
      >
        Login
      </Button>
      <Dialog open={open} handler={handleOpeningForm} className="px-1" size="xs">
        <DialogHeader className="flex flex-col items-start justify-start text-left">
          <img src="" alt="" />
          <h2>Welcome to Sales Assist</h2>
          <p className="text-base font-normal">Please enter your details to login</p>
        </DialogHeader>

        <DialogBody>
         
        </DialogBody>

        <DialogFooter>
          <Button>Login</Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default LoginForm;

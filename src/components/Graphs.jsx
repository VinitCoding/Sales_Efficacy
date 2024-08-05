import {
    Dialog,
    DialogBody,
    DialogHeader,
  } from "@material-tailwind/react";
  import React, { useState } from "react";
  import { IoClose } from "react-icons/io5";
  import { number } from "yup";
  
  const Graphs = ({ img_list }) => {
    // State for handling zoom in and zoom out image
    const [isOpen, setIsOpen] = useState(false);
  
    const [image, setImage] = useState({});
  
    const [imgTitle, setImgTitle] = useState({});
  
    // function for selected particular graph
    const handleModal = (index) => {
      setIsOpen(!isOpen);
      if (number) {
        setImage(img_list[index].image);
        setImgTitle(img_list[index].title);
      }
    };
  
    // function to zoom in image
    const handleOpen = () => {
      setIsOpen(!isOpen);
    };
  
    console.log("Data Arrived at Graphs: ", img_list);
    return (
      <div className="grid grid-cols-2 mt-4 place-items-center mx-auto gap-6 w-[45%]">
        {img_list &&
          img_list.map((item, index) => (
            <div
              className="p-0.5 bg-white rounded-lg w-fit hover:cursor-pointer"
              key={index}
              onClick={() => handleModal(index)}
            >
              <img
                src={`data:image/png;base64,${item.image}`}
                alt="graphs"
                className="w-[800px]"
              />
            </div>
          ))}
  
        {isOpen ? (
          <>
            <Dialog open={isOpen} handler={handleOpen}>
              <DialogHeader className="flex justify-between">
                <h3>{imgTitle}</h3>
                <h3
                  className="p-1 text-lg rounded cursor-pointer hover:text-white hover:bg-red-400 hover:transition-all hover:duration-75 hover:ease-in-out"
                  onClick={handleOpen}
                >
                    <IoClose title="Close"/>
                  
                </h3>
              </DialogHeader>
              <DialogBody className="-mt-5">
                <hr className="border-[0.1px] w-full border-black" />
                <img
                  src={`data:image/png;base64,${image}`}
                  className="w-[600px]"
                />
              </DialogBody>
            </Dialog>
          </>
        ) : null}
      </div>
    );
  };
  
  export default Graphs;
  
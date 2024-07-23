import React from "react";
import "./App.css";
import Header from "./pages/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
    {/* Header */}
      <header className='fixed w-full bg-white shadow-lg lg:py-2.5 md:py-4 lg:px-10 md:px-10'>
        <Header />
      </header>

      <main className=" bg-[#cfcfcf66] w-screen h-screen">
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </main>
    </>
  );
};

export default App;

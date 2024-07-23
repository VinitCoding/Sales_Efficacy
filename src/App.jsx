import React from "react";
import "./App.css";
import Header from "./pages/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import powered_by from './assets/powered_by.svg'
import WealthGuruPage from "./pages/WealthGuruPage";

const App = () => {
  return (
    <div className="overflow bg-[#cfcfcf66] h-screen w-screen">
    {/* Header */}
      <header className='fixed w-full bg-white shadow-lg lg:py-2.5 md:py-4 lg:px-10 md:px-10'>
        <Header />
      </header>

      <main className="w-full h-full ">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/wealth-guru" element={<WealthGuruPage />}/>
        </Routes>
      </main>

      <footer className="flex justify-center -mt-8">
        <img src={powered_by} className="w-40" />
      </footer>
    </div>
  );
};

export default App;

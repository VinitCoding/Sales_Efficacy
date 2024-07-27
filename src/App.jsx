import React from "react";
import "./App.css";
import Header from "./pages/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import WealthGuruPage from "./pages/WealthGuruPage";
import LeadCrafter from "./pages/LeadCrafter.jsx";

const App = () => {
  return (
    <div className="overflow bg-[#CBDDFF] h-screen w-screen">
    {/* Header */}
      {/* <header className='fixed w-full px-10 py-1 bg-white shadow-lg'>
        <Header />
      </header> */}

      <main className="w-full h-full ">
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/wealth-wise" element={<WealthGuruPage />}/>
          <Route path="/lead_crafter" element={<LeadCrafter />}/>
        </Routes>
      </main>

    </div>
  );
};

export default App;

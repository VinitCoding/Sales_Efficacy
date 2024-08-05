import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import WealthGuruPage from "./pages/WealthGuruPage";
import LeadCrafter from "./pages/LeadCrafter.jsx";
import Landing from "./pages/Landing.jsx";

const App = () => {
  return (
    <div className="overflow bg-[#CBDDFF] h-screen w-screen text-[#1E1D5C]">
      <main className="w-full h-full">
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/file_upload" element={<HomePage />}/>
          <Route path="/wealth-wise" element={<WealthGuruPage />}/>
          <Route path="/lead_crafter" element={<LeadCrafter />}/>
        </Routes>
      </main>

    </div>
  );
};

export default App;

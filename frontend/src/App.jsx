import React, { useState } from 'react';
import { useEffect } from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from '../src/components/HeroSec.jsx';
import UseCase from "../src/components/UseCase.jsx";
import About from '../src/components/About.jsx';
import Works from "../src/components/HowItWorks.jsx";
import Closing from "../src/components/Closing.jsx";
import SignUp from "../src/Pages/Signup.jsx";
import Dashboard from './components/DAshboard.jsx';
import Fill_info from "../src/Pages/Fill_info.jsx";
import ViewQR from "../src/Pages/View_QR.jsx";
import Update from "../src/Pages/Update.jsx";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  
  return (
    <div>
      <Router>
      <Navbar isLoggedIn={isLoggedIn} />

      <main className="p-4">
        <Routes>
         <Route
            path="/"
            element={
              !isLoggedIn ? (
                <>
                  <HeroSection />
                  <UseCase />
                  <About />
                  <Works />
                  <Closing />
                  {/* <h2>Welcome to MedVault 👋</h2>
                  <button onClick={() => setIsLoggedIn(true)} className="mt-2 bg-green-500 px-4 py-2 text-white">
                    Login
                  </button> */}
                </>
              ) : (
                <>
                  {/* <h2>Dashboard</h2>
                  <p>Your secure medical records live here 🗃️</p> */}
                </>
              )
            }
          />
          <Route path="/signup" element={<SignUp />} />
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/add-details" element={<Fill_info />} />
           <Route path="/update-details" element={<Update />} />
           <Route path="/viewqr" element={<ViewQR />} />
        </Routes>
      </main>
      
     </Router>
    </div>
  );
};

export default App;
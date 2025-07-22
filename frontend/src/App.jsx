import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from '../src/components/HeroSec.jsx';
import UseCase from "../src/components/UseCase.jsx";
import About from '../src/components/About.jsx';
import Works from "../src/components/HowItWorks.jsx";
import Closing from "../src/components/Closing.jsx";
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Start as not logged in

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />

      <main className="p-4">
        {!isLoggedIn ? (
          <div>
            <HeroSection />
            <UseCase/>
            <About />
            <Works />
            <Closing />
            <h2>Welcome to MedVault 👋</h2>
            <button onClick={() => setIsLoggedIn(true)} className="mt-2 bg-green-500 px-4 py-2 text-white">Login</button>
          </div>
        ) : (
          <div>
            <h2>Dashboard</h2>
            <p>Your secure medical records live here 🗃️</p>
          </div>
        )}
      </main>
     
    </div>
  );
};

export default App;
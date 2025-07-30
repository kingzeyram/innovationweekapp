import { useState } from 'react';
import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css";
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home'
import { Highlight } from './components/sections/Highlight';
import { Programs } from './components/sections/programs';
import { SpeakerBios } from './components/sections/SpeakerBios';
import { Analytics } from "@vercel/analytics/next";

function App() {
  const [isLoaded, setisLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setisLoaded(true)} />} {" "}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
        } bg-white text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <Highlight />
        <Programs />
        <SpeakerBios />
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Innovation Week and Industry Summit. All rights reserved.</p>
          </div>
        </footer>
        <Analytics />


      </div>
    </>
  )
}

export default App;

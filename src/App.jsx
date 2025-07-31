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
import { Analytics } from "@vercel/analytics/react";
import Footer from './components/sections/footer';
import { ImageCarousel } from "./components/ImageCarousel";
import MyMap from './components/MyMap';
import { Conclusion } from './components/sections/conclusion';


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
        <ImageCarousel />
        <Programs />
        <SpeakerBios />
        <Analytics />
        <MyMap />
        <Conclusion />
        <Footer />






      </div>
    </>
  )
}

export default App;

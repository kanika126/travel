import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import scrollreveal from "scrollreveal";
import Connect from "./components/Connect";
//import Form  from "./components/Form";
import Explore from "./components/Explore";
import {
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
 
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
  

    sr.reveal(`
        nav,
        #hero,
        #explore,
        #services,
        #weather,
        #recommend,
        #testimonials,
        #form,
        #connect,
        #footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
  
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/explore" element={<Explore/>} />
        {/*<Route path="/form" element= {<Form/>} />*/}
        <Route path="/connect" element= {<Connect/>} />
      </Routes>
      <Footer/>
    </div>
    
  );
}



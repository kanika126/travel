import React, { useEffect } from "react";
import Hero from "./Hero";
import Recommend from "./Recommend";
import ScrollToTop from "./ScrollToTop";
import Services from "./Services";
import Testimonials from "./Testimonials";
import scrollreveal from "scrollreveal";
import Weather from "./Weather";

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
        #services,
        #weather,
        #recommend,
        #testimonials,
        #form,
        #connect,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <div>
    <ScrollToTop />
    <Hero />
    <Services />
      <Weather />
      <Recommend />
      <Testimonials />
   </div>
    );
}


import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
import Connect from "./components/Connect";
import Form  from "./components/Form";
import Weather from "./components/Weather";
import Explore from "./components/Explore";
import Blogs from "./components/Blogs";
import ImageSlider from "./components/ImageSlider";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
 

  const slides = [
    { url: "https://images.pexels.com/photos/11161313/pexels-photo-11161313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Forts and spirituality" },
    { url: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Mountains" },
    { url: "https://images.pexels.com/photos/207305/pexels-photo-207305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Adventure" },
    { url: "https://images.pexels.com/photos/1449767/pexels-photo-1449767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Beaches" },
    { url: "https://images.pexels.com/photos/998653/pexels-photo-998653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Desert" },
    { url: "https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "City" },
  ];

  const Blog = [
    {
      img: 'https://images.pexels.com/photos/614503/pexels-photo-614503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      word:'Traveltalesfromindia.in - Mridula Dwivedi',
      url: 'http://traveltalesfromindia.in/'
    },
    {
      img: "https://images.pexels.com/photos/6324297/pexels-photo-6324297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      word:'Desitraveler.com - Prasad Np',
      url: 'https://desitraveler.com/'
    },
    {
      img: "https://images.pexels.com/photos/10239281/pexels-photo-10239281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      word:'Devilonwheels.com - Guru Dheeraj Sharma',
      url: 'https://devilonwheels.com/'
    },
    {
      img: "https://images.pexels.com/photos/5992583/pexels-photo-5992583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      word:'Isharethese.com - Indrani Ghose',
      url: 'https://isharethese.com/'
    },
    {
      img: "https://images.pexels.com/photos/6576293/pexels-photo-6576293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      word:'Lakshmisharath.com - Lakshmi Sharath',
      url: 'https://lakshmisharath.com/category/journeys/india/'
    },
    {
      img: "https://images.pexels.com/photos/5993070/pexels-photo-5993070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      word:'Myyatradiary.com - Arti',
      url: 'https://www.myyatradiary.com/'
    }
  ]

  const containerStyles = {
    width: "1200px",
    height: "600px",
    margin: "0 auto",
  };

 

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
        #gallery,
        #explore,
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
       <Router>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <Explore />
    <Blogs Blog={Blog}/>
      <Services />
      <Weather />
      <Recommend />
      <Testimonials />
        <Routes>
          {/*<Route exact path="/" component={Home} />*/}
          <Route path="#form" exact component={<Form />} />
          <Route path="#connect" exact component={<Connect />} />
        </Routes>
        <Form />
       <Connect />
      <Footer />
      </Router>
    
    </div>
    
  );
}



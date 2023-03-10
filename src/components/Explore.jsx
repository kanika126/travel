import React from "react";
import styled from "styled-components";
import Blogs from "./Blogs";
import ImageSlider from "./ImageSlider";
export default function Explore() {

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

  return (
  <Section id="explore">
    <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

  <div className="row">
   
    <h1 className="headertekst">Know Your Place More</h1>
    <br></br>
    <div className="box">
  <div className="column">
  <h3 className="title">State Tourism Websites</h3>
                
                    
                <ul>
                        <li><a href="https://tourism.ap.gov.in" title="Andhra Pradesh">
                        Andhra Pradesh </a></li>
                    
                        <li><a href="http://www.arunachaltourism.com" title="Arunachal Pradesh">
                        Arunachal Pradesh </a></li>
                    
                        <li><a href="https://tourism.assam.gov.in" title="Assam">
                        Assam </a></li>
                    
                        <li><a href="https://tourism.bihar.gov.in" title="Bihar">
                        Bihar </a></li>
                    
                        <li><a href="https://www.chhattisgarhtourism.in" title="Chhattisgarh">
                        Chhattisgarh </a></li>
                    
                        <li><a href="https://goa-tourism.com" title="Goa">
                        Goa </a></li>
                    
                        <li><a href="http://www.arunachaltourism.com" title="Gujarat">
                        Gujarat </a></li>
                    
                        <li><a href="http://haryanatourism.gov.in" title="Haryana">
                        Haryana </a></li>
                    
                        <li><a href="https://himachaltourism.gov.in/" title="Himachal Pradesh">
                        Himachal Pradesh </a></li>
                    
                        <li><a href="https://tourism.jharkhand.gov.in" title="Jharkhand">
                        Jharkhand </a></li>
                    
                        <li><a href="http://www.karnatakatourism.org" title="Karnataka">
                        Karnataka </a></li>
                    
                        <li><a href="https://www.keralatourism.org" title="Kerala">
                        Kerala </a></li>
                    
                        <li><a href="http://www.mptourism.com" title="Madhya Pradesh">
                        Madhya Pradesh </a></li>
                    
                        <li><a href="https://www.maharashtratourism.gov.in" title="Maharashtra">
                        Maharashtra </a></li>
                    
                        
                        </ul>
  </div>
  <div className="column">
    <ul>
        <br></br>
    <li><a href="http://manipurtourism.gov.in" title="Manipur">
                        Manipur </a></li>
                    
                        <li><a href="https://www.meghalayatourism.in" title="Meghalaya">
                        Meghalaya </a></li>
                    
                        <li><a href="http://tourism.mizoram.gov.in" title="Mizoram">
                        Mizoram </a></li>
                    
                        <li><a href="http://tourism.nagaland.gov.in" title="Nagaland">
                        Nagaland </a></li>

                                <li><a href="http://odishatourism.gov.in" title="Odisha">
								Odisha </a></li>
                            
                                <li><a href="https://punjabtourism.punjab.gov.in" title="Punjab">
								Punjab </a></li>
                            
                                <li><a href="http://tourism.rajasthan.gov.in" title="Rajasthan">
								Rajasthan </a></li>
                            
                                <li><a href="http://www.sikkimtourism.gov.in" title="Sikkim">
								Sikkim </a></li>
                            
                                <li><a href="http://www.tamilnadutourism.org" title="Tamil Nadu">
								Tamil Nadu </a></li>
                            
                                <li><a href="https://www.telanganatourism.gov.in" title="Telangana">
								Telangana </a></li>
                            
                                <li><a href="http://tripuratourism.gov.in" title="Tripura">
								Tripura </a></li>
                            
                                <li><a href="http://www.uptourism.gov.in" title="Uttar Pradesh">
								Uttar Pradesh </a></li>
                            
                                <li><a href="https://uttarakhandtourism.gov.in" title="Uttarakhand">
								Uttarakhand </a></li>
                            
                                <li><a href="http://www.wbtourismgov.in" title="West Bengal">
								West Bengal </a></li>
                            
                        </ul>
  </div>
  <div className="column">
  <h3 className="title">UT Tourism Websites</h3>
                
                <ul>
                    
                        <li><a href="https://www.andaman.gov.in" title="Andaman and Nicobar">
                        Andaman and Nicobar </a></li>
                    
                        <li><a href="http://chandigarhtourism.gov.in" title="Chandigarh">
                        Chandigarh </a></li>
                    
                        <li><a href="https://www.tourismdddnh.in" title="Dadra and Nagar Haveli">
                        Dadra and Nagar Haveli </a></li>
                    
                        <li><a href="https://www.tourismdddnh.in" title="Daman and Diu">
                        Daman and Diu </a></li>
                    
                        <li><a href="http://www.delhitourism.gov.in" title="Delhi">
                        Delhi </a></li>
                    
                        <li><a href="https://www.jktdc.co.in" title="Jammu and Kashmir">
                        Jammu and Kashmir </a></li>
                    
                        <li><a href="https://leh.nic.in" title="Ladakh">
                        Ladakh </a></li>
                    
                        <li><a href="https://www.lakshadweeptourism.com" title="Lakshadweep">
                        Lakshadweep </a></li>
                    
                        <li><a href="http://www.pondytourism.in" title="Puducherry">
                        Puducherry </a></li>
                    
                </ul>
                </div>  
  </div>
</div>
<br></br>
<Blogs Blog={Blog}/> 
       </Section>
 );
}
const Section = styled.section`
h1.headertekst {
    text-align: center;
  } 
.column {
    float: left;
    width: 33.33%;
  }
  
  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  .box{
    background: aliceblue;
    border-radius: 1rem;
    padding: 2rem;
    height: 400px;
    text-align: center;
    box-shadow: rgb(17 17 17 / 15%) 0px 0.5rem 1rem;
    transition: 0.3s ease-in-out;
        &:hover {
          transform: translateX(0.4rem) translateY(-1rem);
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
  }
`;
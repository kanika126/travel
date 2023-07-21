import React from "react";
import styled from "styled-components";
import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";
import Destination7 from "../assets/Destination7.png";
import Destination8 from "../assets/Destination8.png";
import Destination9 from "../assets/Destination9.png";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

export default function Recommend() {
  const data = [
    {
      image: Destination1,
      title: "Mumbai",
      subTitle: "The biggest metropolis of this state, Mumbai is also popular as the entertainment and financial capital.",
      cost: "8,800",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Jaipur",
      subTitle: "Jaipur is a place not less than a paradise. It is impossibly romantic and picturesque, decked with royal palaces atmospheric Havlies, eclectic museums, and ancient towering temples.",
      cost: "4,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Rishikesh",
      subTitle: "Rishikesh - Yoga Capital of the World.The celestial city of Rishikesh is a hermits hermitage, a sages abode and an adventure lovers hub. This lively city is among the holiest places of Hindus.",
      cost: "5,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "Chennai",
      subTitle: "The state's largest city in area and population as well, Chennai is located on the Coromandel Coast of the Bay of Bengal, and is the most prominent cultural, economic and educational centre of South India.",
      cost: "9,100",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination5,
      title: "Delhi",
      subTitle: "Delhi a Thriving, Cosmopolitan Metro, the City has much to Celebrate as it has already Reached the Milestone of Completing 100 Years as a Capital.",
      cost: "5,400",
      duration: "Approx 1 night 2 day trip",
    },
    {
      image: Destination6,
      title: "Jammu and Kashmir",
      subTitle: "The Union Territory of Jammu and Kashmir is a great tourist destination. Picturesque and enchanting, Kashmir is cradled high in the lofty green Himalayas and hailed all over the world for its incredible natural beauty. ",
      cost: "8,800",
      duration: "Approx 3 night 2 day trip",
    },
    {
      image: Destination7,
      title: "Darjeeling",
      subTitle: "Lying amidst the slopes of the Lesser Himalayas and blanketed by emerald green plantations of tea, Darjeeling is a picturesque town in the Indian state of West Bengal. The majestic Kanchenjunga (also known as Kangchenjunga) towers over this beautiful town, which is the third highest mountain in the world.",
      cost: "8,800",
      duration: "Approx 3 night 2 day trip",
    },
    {
      image: Destination8,
      title: "Munnar",
      subTitle: "A lush carpet of rolling green, interrupted by low rises of mountains of the gorgeous Western Ghats, Munnar, in Kerala, is dotted with huge emerald plantations and pristine waterfalls.",
      cost: "7,400",
      duration: "Approx 3 night 3 day trip",
    },
    {
      image: Destination9,
      title: "Gangtok",
      subTitle: "Perched on steeply-tiered hills in the eastern Himalayas, the picturesque city of Gangtok, the capital of Sikkim, is set against the backdrop of the majestic Mt Kanchenjunga (Khangchendzonga).d",
      cost: "6,800",
      duration: "Approx 2 night 2 day trip",
    },
  ];

  
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Popular Destinations Packages</h2>
        <br></br>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination">
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>1000 Kms</span>
                <span>{destination.duration}</span>
              </div>

              </div>
          );
        })}
        
      </div>
      <br></br>
      <div className="title">For Booking email your destination and phone number on "travelhere@gmail.com" and we will contact you shortly.</div>
    </Section>
  );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;

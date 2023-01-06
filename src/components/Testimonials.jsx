import React from "react";
import styled from "styled-components";
import avatarImage from "../assets/avatarImage.jpg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
          I got very competitive pricing along with hassle free travel booking from travel triangle. I have used this platform for many bookings and till now all my experience is very good.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Kishan Sheth</h4>
              <span>CEO - Shashaan Web Solutions</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          I am a frequent traveller and have come across many travel agents . But I must say I have never interacted with anyone of this level of service and exceptional knowledge in travel industry.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Siddhartha Sahai</h4>
              <span>Assistant - Hs Infotech</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
          Happy to choose Travelo. Worth for money. I don't think without the support of Tour Hunters I would have visited the most amazing and beautiful places.
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Gauri Wadkar</h4>
              <span>Head - Conarch Architect</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;

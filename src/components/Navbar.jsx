import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
//import { Link } from "react-router-dom";

export default function Navbar() {
  
  

  return (
    <>
      <Nav>
        <div className="brand">
          <div className="container">
            <img src={logo} alt="" />
            TravelHere
          </div>
        </div>
        <ul>
       
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href ="#explore">Explore</a>
          </li>
          <li>
            <a href="#blog">Blogs</a>
          </li>
          <li>
            <a href="#services">About</a>
          </li>
          <li>
            <a href="#weather">Weather</a>
          </li>
          <li>
            <a href="#recommend">Packages</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href ="#form">Bookings</a>
          </li>
          <li>
            <a href="#connect">Connect</a>
          </li>
        </ul>
        
      </Nav>
      
    </>
  );
}

const Nav = styled.nav`
.menu-icon {
  display: none;
}

  display: flex;
  justify-content: space-between;
  align-items: center;
  .brand {
    .container {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 900;
      text-transform: uppercase;
    }
    .hrefggle {
      display: none;
    }
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    li {
      a {
        text-decoration: none;
        color: #0077b6;
        font-size: 1.2rem;
        transition: 0.1s ease-in-out;
        &:hover {
          color: #023e8a;
        }
      }
      &:first-of-type {
        a {
          color: #023e8a;
          font-weight: 900;
        }
      }
    }
  }
  buthrefn {
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 1rem;
    border: none;
    color: white;
    background-color: #48cae4;
    font-size: 1.1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    transition: 0.3s ease-in-out;
    &:hover {
      background-color: #023e8a;
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .hrefggle {
        display: block;
      }
    }
    ul {
      display: none;
    }
    buthrefn {
      display: none;
    }
  }
`;
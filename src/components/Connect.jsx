import React, { useState } from "react";
import styled from "styled-components";
import { Login } from "./Login";
import { Register } from "./Register";

function Connect() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <Section id="connect">
      <br></br>
    <div className="title">
        <h2>Connect</h2>
      </div>
      <br></br>
    <div className="Connect">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
    <br></br>
  </Section>
  );
}

export default Connect;
const Section = styled.section`
.Connect {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    text-align: center;
    border-radius: 15px;
    min-height: 75vh;
    align-items: center;
    color: white;
    background-image: linear-gradient(79deg, #44a0d2, #83bed9 48%, #acd2de);
    .Connect {
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
      }
    }
  }
  .title {
    text-align: center;
  }
  .auth-form-container, .login-form, .register-form {
    display: flex;
    flex-direction: column;
  }
  
  @media screen and (min-width: 200px) {
    .auth-form-container {
        .Connect {
            flex-direction: column;
            margin: 0;
            .Connect {
              justify-content: center;
              .info {
                flex-direction: column;
                justify-content: center;
      padding: 5rem;
      border: 1px solid white;
      border-radius: 10px;
      margin: 0.5rem;
    }
    }
    }
    }
  }
  
  label {
    text-align: left;
    padding: 0.25rem 0;
  }
  
  input {
    margin: 0.5rem 0;
    padding: 1rem;
    border: none;
    border-radius: 10px;
  }
  
  button {
    border: none;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
    color: #7439db;
  }
  
  .link-btn {
    background: none;
    color: white;
    text-decoration: underline;
  }
`;
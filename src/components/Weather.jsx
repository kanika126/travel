import React, { useState } from 'react'
import axios from 'axios'
import styled from "styled-components";

function Weather() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <Section id="weather">
      
    <div className="app-center">
      <h2>Know Weather Before Starting</h2>
      <br></br>
      <div className="box">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°F</p> : null}
              <p>Feels Like &nbsp;</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity &nbsp;</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }
      </div>
    </div>
    </div>
    </Section>
  );
}

export default Weather;

const Section = styled.section`


* {
  text-align: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.box{
  background: aliceblue;
  border-radius: 1rem;
  padding: 3rem;
  text-align: center;
  box-shadow: rgb(17 17 17 / 15%) 0px 0.5rem 1rem;
  transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
}
.top {
  text-align: center;
  width: 100%;
  margin: 1rem auto;
}
.search {
  text-align: center;
  padding: 1rem;
}
.bottom {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  width: 100%;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 12px;
  background-color: rgba(255,255,255, 0.2);
}
.bold {
  font-weight: 700;
}


.app {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: rgba(0,0,0,0.4);
  color: #fff;
}

.app:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

  `;
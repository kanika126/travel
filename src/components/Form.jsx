import React from "react";
import styled from "styled-components";
import bgImg from '../assets/demo.jpg'
import { useForm } from 'react-hook-form';

function Form(props) {
  
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = data => console.log(data);

    

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  
  alertTrigger.addEventListener('click', () => {
   
    alert('You will shortly recieve a call or mail for your bookings details and confirmation.','success')
  })
}


  return (
    <Section id="form">
       <h2 class="headertekst">Bookings</h2>
      <div className="title">
      </div>
      <br></br>
        <div className="register">
            <div className="col-1">
                <h2 class="headertekst">Book your trip with us</h2>
                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-3">
                <div className="col">
                  <label>Full Name: </label>
                <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                </div>
                </div>

                <div className="row" >
                  <label>Destination: </label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Where to</option>
                        <option value="1">Mumbai</option>
                        <option value="2">Jaipur</option>
                        <option value="3">Rishikesh</option>
                        <option value="4">Chennai</option>
                        <option value="5">Delhi</option>
                        <option value="6">Jammu and Kashmir</option>
                        <option value="7">Darjeeling</option>
                        <option value="8">Munnar</option>
                        <option value="9">Gangtok</option>
                    </select>
                    </div>

                    <div className="row mb-3">
                <div className="col">
                  <label>Number of Visitors:</label>
                <input type="text" class="form-control" placeholder="Visitors" aria-label="visitors"/>
                </div>
                </div>

                    <div className="row" >
                    <label>Number of rooms: </label>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" for="flexRadioDefault1">
                          1
                          </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" for="flexRadioDefault1">
                           2
                          </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                        <label className="form-check-label" for="flexRadioDefault1">
                          More
                          </label>
                    </div>
                    </div>

                    <div className="row" >
                    <label for="start">Arrival:  </label>
                    <input type="date" id="start" name="trip-start"
                            value="2022-01-01"
                            min="2022-01-01" max="2023-12-31"></input>
                            </div>

                            <div className="row" >
                            <label for="end">Leaving:  </label>
                            <input type="date" id="end" name="trip-end"
                            value="2022-01-01"
                            min="2022-01-01" max="2023-12-31"></input>
                            </div>

                    
                    <div className="row" >
                    <label>Mobile number: </label>
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='Mobile number' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    </div>



                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                           &nbsp;Include Breakfast
                    </label>
                    </div>

                    <div className="row" >
                  <label>Mode of payment: </label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Payment Options</option>
                        <option value="1">Pay During Checkin</option>
                        <option value="2">Debit Card</option>
                        <option value="3">Credit Card</option>
                        <option value="4">UPI</option>
                    </select>
                    </div>

                  <div class="form-floating">
                      <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                        <label for="floatingTextarea"> Comments</label>
                  </div>

                  <div id="liveAlertPlaceholder"></div>
                  <button type="button" class="btn btn-primary" id="liveAlertBtn" >Submit</button>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
        <br></br>
    </Section>
  )
}
export default Form;
const Section = styled.section`
* > * {
  text-align: center;
  font-family: "Poppins";
  margin: 0;
}

body{
  text-align: center;
background: #0f0c29;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

h2.headertekst {
  text-align: center;
} 

.title {
  text-align: center;
}

.form {
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 0 2rem;
  gap: 2rem;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
}

.register{
max-width: 1450px;
width: 100vw;
display:flex;
border: 1px solid #e9ecef;
border-radius: 5px;
/* box-shadow: 1px 3px 10px #e9ecef; */
background-color: white;
}

.register span{
color: #adb5bd;
}

#form{
max-width: 320px;
width: 100vw;
margin: 2em auto;
}

#form >  input, .btn{
border: 1px solid #e9ecef;
padding: .9em 1em;
}

#form > input:focus{
outline: none;
}

#form > .btn{
background-color: #003049;
color: #e9ecef;
font-size: 1em;
cursor: pointer;
}

.flex{
display: flex;
gap: 1em;
}

.flex-col{
flex-direction: column;
}

.register .col-1{
margin: auto;
padding: 1em 0;
}

.register .col-2 img{
width: 500px;
height: 100%;
object-fit: cover;
align-self: flex-end;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
display: none;
}

@media screen and (min-width: 900px)  {
.register .col-2 img{
  display: initial;
  .form {
    justify-content: center;
}
}
`;
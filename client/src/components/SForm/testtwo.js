import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import './stepform.css'
import moment from 'moment' 
const WrapperSection = styled.section`

display:flex;
justify-content:center;

width:100%;
margin-top:10px;
align-items: center; 




`;
const Wrapperdiv = styled.div`

display:flex;
justify-content:center;
flex-direction: column;
background-color:#f2f7f4;




`;
 const Wrapperdivrow=styled.div`
 
 display:flex;
 justify-content:space-around ;
 flex-direction: row;


 `;

const Button = styled.button`


justify-content:center;


width:100%;
border:none



`;
const Title = styled.h2`

line-height: 2.5;

display:flex;
font-weight: bold;
font-size:100%;
color:black;

justify-content:center;

font-family: fantasy;
padding-top:50px;


`;
const TwoButtons = styled.button`
display flex;
width:100px;
background-color: rgb(82, 104, 230);;
color:white;
justify-content:center;
border:none;
border-radius:5px;

margin:25px;



`;
const Inputdiv = styled.div`
padding:50px;


`;



 function AddPrice(){

  
  const [inputs, setInputs] = useState({});

    //Post Method
    const apiPost = async () => {
      await fetch("http://localhost:7260/api/appPrice", {
        method: "POST",
        body: JSON.stringify({
          creationdate: new Date(),
          appDate:moment( inputs.appDate),
          appTime: moment().format(inputs.appTime),
          
          id: parseInt(inputs.id),
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    };
  
    const handleChange = (event) => {
      event.persist();
      setInputs((inputs) => ({
        ...inputs,
  
        [event.target.name]: event.target.value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      apiPost();
      console.log(inputs);
    };

  return( 
    <form onSubmit={handleSubmit}>
      <WrapperSection>
    <div className="form-group">
 

<Fade  delay={500}>
     <Title>
     <h2> Pick App Date & Time  </h2>
  
     </Title>

       </Fade>

        <Wrapperdiv>
 
<input
      className="form-control"
      
      name="appDate"
      type="date"
      onChange={handleChange}
     /> 

<input
      className="form-control"
   
      name="appTime"
      type="time"
      onChange={handleChange}
      /> 
        </Wrapperdiv>
        <button type="submit" value="Submit" onChange={handleChange} >Submit</button>
        
        </div>
        </WrapperSection>
    </form>
  
  
        
       
      )
 
}

export default AddPrice
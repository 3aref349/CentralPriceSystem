import React, { Component,useState } from "react";
import Fade from 'react-reveal/Fade';
import Wobble from 'react-reveal/Wobble';
import './form.css';

import styled from 'styled-components'
;
import axios from "axios";
const Title = styled.h1`

font-family: "Brush Script MT";
font-weight: 900;
font-size:350%;
 color: black;
padding:20px;

`;




  
export default  function FormPrice  () {
    const [product, setProduct] = useState()

   // const [username, setUsername] = useState()
    const [msg, setMsg] = useState()
    const [city, setUserCity] = useState()
    
    const handleChangeProduct = e => {
        setProduct(e.target.value)
    }
    const handleChangeMsg = e => {
        setMsg(e.target.value)
      }
      const handleChangeCity = e => {
        setUserCity(e.target.value)
      }
  
   
      const handleSubmit = async ()  => {
        
       alert(city ,msg , product);
       const x1 = product;
       const x2 = msg;
       const x3= city;
       alert(x1 );
      await fetch("http://localhost:7258/api/orders", {
        method: "POST",
        body: JSON.stringify({
            product: x1,
                //qty: qty,
                msg: x2,
                city: x3,
            //     // userId: parseInt(inputs.userId),
        }),
        headers: {
        
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        
      })
      .then((response) => response.json())
      .then((json) => console.log(json));
    }
      

//   //Post Method
//   const apiPost = async () => {
//     await fetch("http://localhost:7258/api/orders", {
//      method: "POST",
// body: JSON.stringify({
//     product: product,
//     //qty: qty,
//     msg: msg,
//     city: city,
//     // userId: parseInt(inputs.userId),
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
//         // userId: parseInt(inputs.userId),
//       }),
     
  
//       //.then((response) => response.json())
//       .then((json) => console.log(json));
//   };

//   const handleChange = (event) => {
//     event.persist();
//     setInputs((inputs) => ({
//       ...inputs,
    
//       [event.target.name]: event.target.value,
//     //   //[event.target.qty]: parseInt(event.target.value,10),  
//     //      [event.target.msg]:  event.target.value,
//     //       [event.target.city]: event.target.value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     apiPost();
//     console.log(inputs);
//   };



    return (
        <div className="center">
                       <Wobble  delay={500}>
 <Title>
 <h1>add new prices..</h1>

 </Title>

   </Wobble>
            
           
            <form className="form-wrapper"   onSubmit={ handleSubmit}  >
       
           {/* <div className="row"> 

          <input
        className="form-control"
        id="appdate"
        name="appDate"
        type="date"
       />  
</div>

     <div className="row">
      <input
        className="form-control"
        id="appTime"
        name="appTime"
        type="time"
        /> 
     </div>    */}
<div className="row">
   <input
        className="form-control"
     
        name="product"
        type="text"
        
        placeholder="Enter Gasoline 80"
        onChange={handleChangeProduct}
        />  
</div>
    
{/* <div className="row">
<input
        className="form-control"
     
        name="qty"
        type="number"
        placeholder="Enter ded"
        onChange={this.state.handleChange()}
        />  
</div> */}


<div className="row">
   <input
        className="form-control"
        type="text"
        name="msg"
        
        placeholder="Enter Gasoline 95"
        onChange={handleChangeMsg}
        />
</div>

<div className="row">
   <input
        className="form-control"
        type="text"
        name="city"
       
        placeholder="Enter Diesel"
          onChange={handleChangeCity}
        />   
</div>

        <button  className=" submitbtn" value="Submit"  type="submit"   >ADD PRICE EVENT</button>

            </form>
     
        </div>
    )
}
      
    

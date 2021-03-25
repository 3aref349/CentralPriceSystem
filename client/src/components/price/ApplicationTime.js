import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Axios from 'axios'
import './form.css';
import moment from "moment";

const Title = styled.h1`


font-weight: 900;
font-size:350%;
 color: black;
padding-top:50px;
font-family: fantasy;

`;
export default function ApplicationTime() {
  
    const [data, setData] = useState([]);

    const apiGet = () => {
        fetch("http://localhost:7260/api/getpriceevents")
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            setData(json);
          });
      };

     
  

      useEffect(() => {
        apiGet();
      }, []);


        return (
            <div className="center">
  
 
            <form className="form-wrapper"  >
{/* 
            <div className="row">
<input
  className="form-control"
  id="appdate"
  name="appDate"
  type="date"

  readOnly
 /> 

<input
  className="form-control"
  id="appTime"
  name="appTime"
  type="time"

  readOnly
  />
</div> */}



{/* <ul>
          {data.map((item) => (
            <li >
              {item.applicationDate}  {item.applicationTime}
            </li>
          ))}
        </ul> */}



{data.map((order) => (
      
          
      <input
      key={order.Id}
           className="form-control"
         
           name="order"
           type="text"
          //  onChange={handleChange}
        placeholder= {order.applicationDate}  
        
     
readOnly
           
           />  
   
    ))}

{data.map((order) => (
      
          
      <input
      key={order.Id}
           className="form-control"
           type="text"
           name="order"
          // value={order.applicationTime}
          //  onChange={handleChange}
         //  placeholder=  moment.(order.applicationTime).format("MMMM Do YYYY, hh:mm:ss")
        placeholder=  {order.applicationTime}
     
      
readOnly
           
           />  
   
    ))}


        

            </form>
     
        </div>
        )
    
}

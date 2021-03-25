import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Axios from 'axios'
import './form.css';


const Title = styled.h1`


font-weight: 900;
font-size:350%;
 color: black;
padding-top:50px;
font-family: fantasy;

`;




  
 function ConfirmPrice()   {
    const [data, setData] = useState([]);
    const [dataP, setDataP] = useState([]);
    const [inputs, setInputs] = useState({});

  //Get Method
  const apiGet = () => {
    fetch("http://localhost:7260/api/getpriceeventdetails")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

//GetProduct
const apiProduct = () => {
  fetch("http://localhost:7260/api/products")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      setDataP(json);
    });
};




 
  
        useEffect(() => {
      apiGet();
      apiProduct();
      
    }, []);

    // useEffect(() => {
    //   apiProduct();
      
    // }, []);
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


<ul>
          {dataP.map((item) => (
            <li key={item.id}>
             <i class="fas fa-gas-pump"></i> {item.Name}
            </li>
          ))}
        </ul>
        <div className="rowlastprices">
   
   {data.map((order) => (
      
          
            <input
            key={order.Id}
                 className="form-control"
               
                 name="order"
                 type="text"
                //  onChange={handleChange}
              placeholder={order.NewPrice}
            
      readOnly
                 
                 />  
         
          ))}
</div>



    



        

            </form>
     
        </div>
    )

}
export default ConfirmPrice
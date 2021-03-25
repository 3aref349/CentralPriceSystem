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




  
 function OldPrices()   {
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
  //Post Method
  const apiPost = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: inputs.title,
        body: inputs.body,
        userId: parseInt(inputs.userId),
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
  
        useEffect(() => {
      apiGet();
      apiProduct();
      
    }, []);

    // useEffect(() => {
    //   apiProduct();
      
    // }, []);
    return (
        <div className="center">
  
  <Fade  delay={500}>
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

   </Fade>
            
      
        </div>
    )

}
export default OldPrices
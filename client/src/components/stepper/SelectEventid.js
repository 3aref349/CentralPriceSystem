import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import axios from 'axios'
import './form.css';


const Title = styled.h1`


font-weight: 900;
font-size:350%;
 color: black;
padding-top:50px;
font-family: fantasy;

`;




  
 function SelectEventId()   {
    const [data, setData] = useState([]);



  //Get Method
  const apiGet = () => {
    fetch("http://localhost:7260/api/getpriceeventdetails")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  const changeHandler = e => {
    setData({ [e.target.name]: e.target.value })
}



 const submitHandler = e => {

e.preventDefault()

    axios
        .post('http://localhost:7258/api/appPrices', data,{
    method: "POST",
    body: JSON.stringify({
  
    //   creationdate:this.state.creationdate ,

          eventid: parseInt(this.state.eventid()),
        gasoline95: parseInt(data.gasoline95),
        gasoline92: parseInt(data.gasoline92),
        gasoline80: parseInt(data.gasoline80),
        diesel:parseInt (this.state.diesel),
            
            // userId: parseInt(inputs.userId),
    }),
    headers: {
    
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
}
        useEffect(() => {
      apiGet();
    
      
    }, []);

    // useEffect(() => {
    //   apiProduct();
      
    // }, []);
    return (
   
  
        <div>
        <form onSubmit={submitHandler}>
        <div className="row">
                <input
                     type="number" 
       className="form-control"    
                    name="gasoline95"
                 
      onChange={changeHandler}
      placeholder="Enter Gasoline 95 Price"
                />
            </div>
            <div className="row">
                <input
                    type="number" 
                    
                    className="form-control"      
                    name="gasoline92"
                    placeholder="Enter Gasoline 92 Price"
      onChange={changeHandler}
      
                />
            </div>
            <div className="row">
                <input
                     type="number" 
       className="form-control"         
      name="gasoline80"
                   
      onChange={changeHandler}
      placeholder="Enter Gasoline 80 Price"
                />
            </div>
            <div className="row">
                <input
     className="form-control"
                     type="number" 
                     min="4.50"
                      max="9.90" 
      name="diesel"
                    
      onChange={changeHandler}
      placeholder="Enter Diesel Price"
                />
            </div>

{/* <div>


            <div className="row">
                <input
                     type="number" 
       className="form-control"    
                    name="gasoline95"
                    value={gasoline95}
      onChange={changeHandler}
      placeholder="Enter Gasoline 95 Price"
                />
            </div>
  <div className="row">
                <input
                    type="number" 
                    className="form-control"      
                    name="gasoline92"
                    value={gasoline92}
      onChange={changeHandler}
      placeholder="Enter Gasoline 92 Price"
                />
            </div>
  
            <div className="row">
                <input
                     type="number" 
       className="form-control"         
      name="gasoline80"
                    value={gasoline80}
      onChange={this.changeHandler}
      placeholder="Enter Gasoline 80 Price"
                />
            </div>
            <div className="row">
                <input
     className="form-control"
                     type="number" 
                     min="4.50"
                      max="9.90" 
      name="diesel"
                    value={diesel}
      onChange={this.changeHandler}
      placeholder="Enter Diesel Price"
                />
            </div>

  
{/* <SelectEventId /> */}
<div className="row">
   
  
      
   <select className="form-wrapper"  >
{data.map((order) => (
     <option   onChange={changeHandler} value={order.id}>{order.NewPrice}</option>
   ))}
 </select>

   
      
      
</div>





  <div className="row">
  <button className=" submitbtn" type="submit">Submit</button>
  </div>
            
        </form>
    </div>



 
     
       
    )

}
export default SelectEventId
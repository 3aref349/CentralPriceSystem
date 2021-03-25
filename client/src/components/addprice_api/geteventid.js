import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import Axios from 'axios'



const Title = styled.h1`


font-weight: 900;
font-size:350%;
 color: black;
padding-top:50px;
font-family: fantasy;

`;




  
 function GetLasrEventID()   {
    const [data, setData] = useState([]);
 

  //Get Method
  const apiGet = () => {
    fetch("http://localhost:7258/api/geteventid")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };


  
        useEffect(() => {
      apiGet();
     
      
    }, []);

    // useEffect(() => {
    //   apiProduct();
      
    // }, []);
    return (data.eventid)



 

}
export default GetLasrEventID
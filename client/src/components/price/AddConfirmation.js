import React, { Component, useRef, useState, useEffect } from 'react'
import ConfirmPrice from './ConfirmPrice'
import ApplicationTime from './ApplicationTime'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import './form.css';
import moment from "moment";
const Title = styled.h1`


font-weight: 900;
font-size:350%;
 color: black;
padding-top:30px;
font-family: fantasy;

`;
export default function AddConfirmation() {
  const eventid = useRef(null);
  const [data, setData] = useState([]);
  const approveDate = new Date();

  const apiGet = () => {
    fetch("http://localhost:7260/api/geteventid")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  const apiPost = async () => {

    await fetch("http://localhost:7260/api/appconfirm", {
      method: "POST",
      body: JSON.stringify({
        eventid: parseInt(eventid.current.value),
        approveDate: approveDate,
        token: localStorage.getItem("token"),

      }),
      headers: {
        token: localStorage.getItem("token"),
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    apiPost();

  };

  useEffect(() => {
    apiGet();
  }, []);


  return (
    <div className="center">

      <Fade delay={500}>



        <form onSubmit={handleSubmit} className="Wrapper" >


          <div className="row">

            <label for=""> Price Event no.</label>

            {data.map((order) => (

              <input
                type="number"

                className="event center"
                name="eventid"
                ref={eventid}

                value={order.id}

                readOnly
              />

            ))}
          </div>
          <ApplicationTime />
          <ConfirmPrice />
          <div className="row">
            <button
              className=" submitbtn" type="submit" value="submit"
            // onClick={apiGet}
            >




              <i class="fas fa-check"></i>
              CONFIRM
          </button>
          </div>
        </form>



      </Fade>
    </div>
  )

}

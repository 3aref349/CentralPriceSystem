import React, { useState,useRef, useEffect } from "react";
import './form.css';

function FetchAPI() {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState({});
  const eventid= useRef(null);
  //Get Method
  const apiGet = () => {
    fetch("http://localhost:7260/api/geteventid")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  //Post Method
  const apiPost = async () => {
 
    await fetch("http://localhost:7260/api/appPrices", {
      method: "POST",
      body: JSON.stringify({
          eventid:   parseFloat(eventid.current.value),
        gasoline95:  parseFloat(inputs.gasoline95),
        gasoline92:  parseFloat(inputs.gasoline92),
        gasoline80: parseFloat(inputs.gasoline80),
        diesel:parseFloat(inputs.diesel),
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

//   const handleChangeevent = (event) => {
//     event.persist();
 
//     seteventinput({ 
//        ...eventinput,
//         [event.target.name]: event.target.value})

//   };
//   const changeHandler = e => {
//     eventinput = e.target.value 
// }


  const handleSubmit = (event) => {
    event.preventDefault();
    apiPost();
    console.log(inputs);
  };

    useEffect(() => {
      apiGet();
    }, []);

  return (
    <div>
     {/* My API <br /> */}
      {/* <button onClick={apiGet}>Fetch API</button>
      <br />  */}
     {/* <pre>{JSON.stringify(data)}</pre> */}
      
      <div className="row">
   
  
 
   
      
      
</div>
     
      <div>
        <form onSubmit={handleSubmit}  >
 

<div className="row">

 
<label for=""> Price Event no.</label>
{ data.map((order) => (

<input
type="number"

className="event center"      
name="eventid"
 ref={eventid}	
 onChange={handleChange}
 value={order.id }
 
 readOnly
/>




))}
  
</div>


    
   

     
  
<div className="row">
<input
           type="number"
           min="4.50"
           max="9.90" 
           className="form-control"      
           name="gasoline95"
           placeholder=" Gasoline 92 Price"
            onChange={handleChange}
          />{" "}
</div>

     
        <div className="row">
        <input
           type="number"
           min="4.50"
           max="9.90" 
           className="form-control"      
           name="gasoline92"
           placeholder=" Gasoline 92 Price"
            onChange={handleChange}
          />
  </div>
        
    <div className="row">
    <input
           type="number" 
           min="4.50"
           max="9.90"
           className="form-control"      
           name="gasoline80"
           placeholder=" Gasoline 92 Price"
            onChange={handleChange}
          />
  </div>
         


<div className="row">
<input
           type="number" 
           min="4.50"
           max="9.90"
           className="form-control"      
           name="diesel"
           placeholder=" Gasoline 92 Price"
            onChange={handleChange}
          />
</div>

       
          <input  className=" submitbtn" type="submit" value="Submit" onChange={handleChange} />
        </form>
      </div>
    </div>
  );
}

export default FetchAPI;
import React, { Component } from 'react'
import 'date-fns';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Fade from 'react-reveal/Fade';
import FilledInput from '@material-ui/core/FilledInput';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import styled from 'styled-components'
import './form.css'

const WrapperSection = styled.section`
background-color:white;
display:flex;
justify-content:center;
width:100%;

padding-bottom: 2em;
padding-top: 2em;
background-color:#f2f7f4;


`;
const Title = styled.h1`

line-height: 2.5;

font-family: "Brush Script MT";
font-weight: bold;
font-size:70%;
color:#ff4800;



`;

const Wrapper = styled.section`

display:flex;
justify-content:center;

flex-direction: column;
width:50%;
text-align:center;

`;
const Rowdiv = styled.div`
padding:10px;
display:flex;
flex-direction: row;

`;
  
export default class AddPrice extends Component {
  
    render() {
      
        return (
         
            <div>
                <WrapperSection>
               
            
                
              
           
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Wrapper>
   <Grid  >
 
   <Fade  delay={500}>
     <Title>
     <h1>Add Price</h1>
     </Title>
   
       </Fade>
       <Rowdiv>
     <KeyboardDatePicker
     className="Form_input"
       margin="normal"
       id="date-picker-dialog"
       label="Date picker dialog"
       format="MM/dd/yyyy"

       KeyboardButtonProps={{
         'aria-label': 'change date',
       }}
     />
        
        </Rowdiv>
        <Rowdiv>
        <KeyboardTimePicker
     className="Form_input"
       margin="normal"
       id="time-picker"
       label="Time picker"
      
       KeyboardButtonProps={{
         'aria-label': 'change time',
       }}
     />
        </Rowdiv>
 
      
      <Rowdiv>
<TextField  className="Form_input" id="outlined-basic" label="Put Gasoline 80 Price " variant="outlined"  />
</Rowdiv>
<Rowdiv>
<TextField className="Form_input"id="outlined-basic" label="Put Gasoline 92 Price" variant="outlined"  />
</Rowdiv>
<Rowdiv>
<TextField className="Form_input" id="outlined-basic" label="Put Gasoline 95 Price" variant="outlined"  />
</Rowdiv>
<Rowdiv>
<TextField  className="Form_input" id="outlined-basic" label="Put Diesel Price" variant="outlined"  />
</Rowdiv>
<Rowdiv>


<Button className="Form_input"
     variant="contained"
     color="primary"
     
     endIcon={<Icon>send</Icon>}
   >

     Send
   </Button>
</Rowdiv>



   </Grid>
   </Wrapper>
 </MuiPickersUtilsProvider>
           

          
                </WrapperSection>
               
        

               
                

            </div>
        )
    }
}

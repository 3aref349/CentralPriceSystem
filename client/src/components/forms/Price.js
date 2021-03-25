import 'date-fns';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import styled from 'styled-components'

const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  color:black;
`;

const Container = styled.div`

padding: 4em;
background: Grey;
`


class Price extends React.Component {


    
      render() {
        return (
       <Container>
           <div>
               <Title>
               <h1>Price</h1>
               </Title>
        
                    <form>
                        
            <label>product1</label>
            <input type="number" name="" value="" />
            <label>product2</label>
            <input type="number" name="" value="" />
            <label>product3</label>
            <input type="number" name="" value="" />
            <label>product4</label>
            <input type="number" name="" value="" />
        </form>
           </div>
         
    
       </Container>
        

          
       
                
         
        )
      }
    }


    export default Price

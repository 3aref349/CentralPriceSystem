import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Personal Details" />
         
            
            <input
            className="form-control"
            id="prodonePrice"
            name="prodonePrice"
            type="integer"
            placeholder="Enter Gasoline 80"
            /> 
            <br />
            <input
            className="form-control"
            id="prodonePrice"
            name="prodonePrice"
            type="integer"
            placeholder="Enter Gasoline 92"
            />  
             <input
            className="form-control"
            id="prodonePrice"
            name="prodonePrice"
            type="integer"
            placeholder="Enter Gasoline 95"
            />
            <input
            className="form-control"
            id="prodonePrice"
            name="prodonePrice"
            type="integer"
            placeholder="Enter Diesel"
            />  
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormPersonalDetails;

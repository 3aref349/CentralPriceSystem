import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (


      <div>
        <form>
          <input 
             placeholder="Enter Your First Name"
             label="First Price"
             onChange={handleChange('firstName')}
             defaultValue={values.firstName}
             margin="normal"
             fullWidth />

<input 
             placeholder="Enter Your First Name"
             label="last Price"
             onChange={handleChange('firstName')}
             defaultValue={values.firstName}
             margin="normal"
             fullWidth />


<input 
             placeholder="Enter Your First Name"
             label="middle namet Name"
             onChange={handleChange('firstName')}
             defaultValue={values.firstName}
             margin="normal"
             fullWidth />
    <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
        </form>
      </div>
      
    );
  }
}

export default FormUserDetails;

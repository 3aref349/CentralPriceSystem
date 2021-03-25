import React, { Component } from 'react';

import Input from '../../components/Form/Input/Input';
import Button from '../../components/Button/Button';
import { required, length, email } from '../../util/validators';
import Auth from './Auth';

class loginAdmin extends Component {
  state = {
    loginAdminForm: {
      email: {
        value: '',
        valid: false,
        touched: false,
        validators: [required, email]
      },
      password: {
        value: '',
        valid: false,
        touched: false,
        validators: [required, length({ min: 5 })]
      },
      
      formAdminIsValid:false
    }
  };

  inputChangeHandler = (input, value) => {
    this.setState(prevState => {
      let isValid = true;
      for (const validator of prevState.loginAdminForm[input].validators) {
        isValid = isValid && validator(value);
      }
      const updatedForm = {
        ...prevState.loginAdminForm,
        [input]: {
          ...prevState.loginAdminForm[input],
          valid: isValid,
          value: value
        }
      };
      let formAdminIsValid = true;
      for (const inputName in updatedForm) {
        formAdminIsValid = formAdminIsValid && updatedForm[inputName].valid;
      }
      return {
        loginAdminForm: updatedForm,
        formAdminIsValid: formAdminIsValid
      }
 
    });
  };

  inputBlurHandler = input => {
    this.setState(prevState => {
      return {
        loginAdminForm: {
          ...prevState.loginAdminForm,
          [input]: {
            ...prevState.loginAdminForm[input],
            touched: true
          }
        }
      };
    });
  };

  render() {
    return (
      <Auth>
        <form
          onSubmit={e =>
            this.props.onLogin(e, {
              email: this.state.loginForm.email.value,
              password: this.state.loginForm.password.value
            })
          }
        >
          <Input
            id="email"
            label="Your E-Mail"
            type="email"
            control="input"
            onChange={this.inputChangeHandler}
            onBlur={this.inputBlurHandler.bind(this, 'email')}
            value={this.state.loginAdminForm['email'].value}
            valid={this.state.loginAdminForm['email'].valid}
            touched={this.state.loginAdminForm['email'].touched}
          />
          <Input
            id="password"
            label="Password"
            type="password"
            control="input"
            onChange={this.inputChangeHandler}
            onBlur={this.inputBlurHandler.bind(this, 'password')}
            value={this.state.loginAdminForm['password'].value}
            valid={this.state.loginAdminForm['password'].valid}
            touched={this.state.loginAdminForm['password'].touched}
          />
          <Button design="raised" type="submit" loading={this.props.loading}>
            Login
          </Button>
        </form>
      </Auth>
    );
  }
}

export default loginAdmin;

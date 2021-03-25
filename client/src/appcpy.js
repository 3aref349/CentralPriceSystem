import React, { Component, Fragment } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import Layout from './components/Layout/Layout';
import Backdrop from './components/Backdrop/Backdrop';
import Toolbar from './components/Toolbar/Toolbar';
import MainNavigation from './components/Navigation/MainNavigation/MainNavigation';
import MobileNavigation from './components/Navigation/MobileNavigation/MobileNavigation';
import ErrorHandler from './components/ErrorHandler/ErrorHandler';

import './App.css';

import ConfirmPrice from './components/price/ConfirmPrice'
import AddConfirmation from './components/price/AddConfirmation'


import FormPrice from './components/price/form-price'
import Dashboard from './components/Reports/Dashboard';

import MasterForm from './components/SForm/test'

import Configrations from './components/Reports/Configrations';
import  AddPrice  from './components/SForm/testtwo';
import PriceEventApi from './components/addprice_api/AddForm'
// import Testtwo from './components/SForm/testtwo';
import Index from './components/stepper/Index'

class App extends Component {
  state = {
    showBackdrop: false,
    showMobileNav: false,
    isAuth: false,
  
    isAdminAuth:false,
    token: null,
    userId: null,
    status:null,
    authLoading: false,
    error: null
  };

  componentDidMount() {
    const token = localStorage.getItem('token');
    const expiryDate = localStorage.getItem('expiryDate');
    
    if (!token || !expiryDate) {
      return;
    }
    if (new Date(expiryDate) <= new Date()) {
      this.logoutHandler();
      return;
    }
    const userId = localStorage.getItem('userId');
    const status = localStorage.getItem('status');
    const remainingMilliseconds =
      new Date(expiryDate).getTime() - new Date().getTime();

  this.setState({ isAuth: true,  token: token, userId: userId });
  this.setAutoLogout(remainingMilliseconds);


    
  }

  mobileNavHandler = isOpen => {
    this.setState({ showMobileNav: isOpen, showBackdrop: isOpen });
  };

  backdropClickHandler = () => {
    this.setState({ showBackdrop: false, showMobileNav: false, error: null });
  };

  logoutHandler = () => {
    this.setState({ isAuth: false, token: null });
    localStorage.removeItem('token');
    localStorage.removeItem('expiryDate');
    localStorage.removeItem('userId');
  };

  loginHandler = (event, authData) => {
    event.preventDefault();
    this.setState({ authLoading: true });
    fetch('http://localhost:8080/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: authData.email,
        password: authData.password,
        status :authData.status
      })
    })
      .then(res => {
        if (res.status === 422) {
          throw new Error('Validation failed.');
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Could not authenticate you!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        if (resData.status == 'true'){
          this.setState({
            isAdminAuth: true,
            isAuth: true,
            token: resData.token,
            authLoading: false,
            userId: resData.userId
          });
        }
        else {
          this.setState({
            isAuth: true,
            token: resData.token,
            authLoading: false,
            userId: resData.userId
          });
        }
     
        localStorage.setItem('token', resData.token);
        localStorage.setItem('userId', resData.userId);
  
        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem('expiryDate', expiryDate.toISOString());
        this.setAutoLogout(remainingMilliseconds);
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isAuth: false,
          authLoading: false,
          error: err
        });
      });
  };




  signupHandler = (event, authData) => {
    event.preventDefault();
    this.setState({ authLoading: true });
    fetch('http://localhost:8080/auth/signup', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: authData.signupForm.email.value,
        password: authData.signupForm.password.value,
        name: authData.signupForm.name.value
      })
    })
      .then(res => {
        if (res.status === 422) {
          throw new Error(
            "Validation failed. Make sure the email address isn't used yet!"
          );
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Creating a user failed!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        this.setState({ isAuth: false, authLoading: false });
        this.props.history.replace('/');
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isAuth: false,
          authLoading: false,
          error: err
        });
      });
  };

  setAutoLogout = milliseconds => {
    setTimeout(() => {
      this.logoutHandler();
    }, milliseconds);
  };

  errorHandler = () => {
    this.setState({ error: null });
  };

  render() {
    let routes = (
      <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <Dashboard userId={this.state.userId} token={this.state.token} />
            )}
          />
     
               <Route
            path="/stepform"
            exact
            render={props => (
              <MasterForm userId={this.state.userId}  token={this.state.token} />
            )}
            
          />

<Route
            path="/confirm-price"
            exact
            render={props => (
              <AddConfirmation userId={this.state.userId}   token={this.state.token} />
            )}
            
          />

<Route
            path="/configrations"
            exact
            render={props => (
              <Index userId={this.state.userId}   token={this.state.token} />
            )}
            
          />
      
      </Switch>
    )
    
 

 

 



    return (
      <Fragment>
        {this.state.showBackdrop && (
          <Backdrop onClick={this.backdropClickHandler} />
        )}
        <ErrorHandler error={this.state.error} onHandle={this.errorHandler} />
        <Layout
          header={
            <Toolbar>
              <MainNavigation
                onOpenMobileNav={this.mobileNavHandler.bind(this, true)}
                onLogout={this.logoutHandler}
                isAuth={this.state.isAuth}
              />
            </Toolbar>
          }
          mobileNav={
            <MobileNavigation
              open={this.state.showMobileNav}
              mobile
              onChooseItem={this.mobileNavHandler.bind(this, false)}
              onLogout={this.logoutHandler}
              isAuth={this.state.isAuth}
            />
          }
        />
        {routes}
      </Fragment>
    );
  }
}

export default withRouter(App);

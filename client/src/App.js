import React, { Component, Fragment } from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./components/Layout/Layout";
import Backdrop from "./components/Backdrop/Backdrop";
import Toolbar from "./components/Toolbar/Toolbar";
import MainNavigation from "./components/Navigation/MainNavigation/MainNavigation";
import MobileNavigation from "./components/Navigation/MobileNavigation/MobileNavigation";
import ErrorHandler from "./components/ErrorHandler/ErrorHandler";

import "./App.css";
import LoginPage from "./pages/Auth/Login";

import AddConfirmation from "./components/price/AddConfirmation";


import Test2 from "./components/SForm/test2"

// import Testtwo from './components/SForm/testtwo';
import IndexConfigrations from "./components/Administrator/IndexConfigrations";
import FullWidthTabs from "./components/Reports/DashboardNew";

class App extends Component {
  state = {
    showBackdrop: false,
    showMobileNav: false,
    isAuth: false,
    isAdminAuth: false,
    token: null,
    userId: null,
    status: null,
    authLoading: false,
    error: null,
    isAdministrator: false,
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) {
      this.setState({ isAuth: false, token: null, userId: null });
    } else {
      this.setState({ token: token });
      fetch("http://localhost:7260/api/checkToken", {
        method: "get",
        headers: new Headers({
          Authorization: token,
        }),
      })
        .then((data) => data.json())
        .then((res) => {
          if (res.login == "admin") {
            this.setState({ isAdminAuth: true, user: res.user });
          } else if (res.login == "adminstrator") {
            this.setState({ isAdministrator: true, user: res.user });
          } else {
            this.setState({ isAuth: true, user: res.user });
          }
        })
        .catch((e) => {
          console.log(e);
          //if we are here , this means the token is expired or invalid
          localStorage.removeItem("token");
          this.setState({ isAuth: false, token: null, user: null });
        });
    }
  }

  mobileNavHandler = (isOpen) => {
    this.setState({ showMobileNav: isOpen, showBackdrop: isOpen });
  };

  backdropClickHandler = () => {
    this.setState({ showBackdrop: false, showMobileNav: false, error: null });
  };

  logoutHandler = () => {
    this.setState({
      isAuth: false,
      isAdminAuth: false,
      isAdministrator: false,
      token: null,
      user: null,
    });
    localStorage.removeItem("token");
  };

  loginHandler = (event, authData) => {
    event.preventDefault();
    this.setState({ authLoading: true });
    fetch("http://localhost:7260/api/loginUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: authData.email,
        password: authData.password,
      }),
    })
      .then((res) => {
        if (res.status === 422) {
          throw new Error("Validation failed.");
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log("Error!");
          throw new Error("Could not authenticate you!");
        }
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        localStorage.setItem("token", resData.token);
        if (authData.email == "userone@user.com") {
          this.setState({
            isAdminAuth: true,
            token: resData.token,
            authLoading: false,
            userId: resData.userId,
          });
        } else if (authData.email == "usertwo@user.com") {
          this.setState({
            isAuth: true,
            token: resData.token,
            authLoading: false,
            userId: resData.userId,
          });
        } else if (authData.email == "admin@admin.com") {
          this.setState({
            isAdministrator: true,
            token: resData.token,
            authLoading: false,
            userId: resData.userId,
          });
        }

        localStorage.setItem("token", resData.token);
        localStorage.setItem("userId", resData.userId);

        const remainingMilliseconds = 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem("expiryDate", expiryDate.toISOString());
        this.setAutoLogout(remainingMilliseconds);
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          isAuth: false,
          authLoading: false,
          error: err,
        });
      });
  };

  setAutoLogout = (milliseconds) => {
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
          render={(props) => (
            <LoginPage
              {...props}
              onLogin={this.loginHandler}
              loading={this.state.authLoading}
            />
          )}
        />

        <Redirect to="/" />
      </Switch>
    );

    if (this.state.isAuth) {
      routes = (
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => <FullWidthTabs token={this.state.token} />}
          />

          <Route
            path="/stepform"
            exact
            render={(props) => <Test2 token={this.state.token} />}
          />
        </Switch>
      );
    } else if (this.state.isAdminAuth) {
      routes = (
        <Switch>
          <Route
            path="/confirm-price"
            exact
            render={(props) => (
              <AddConfirmation
                userId={this.state.userId}
                token={this.state.token}
              />
            )}
          />
        </Switch>
      );
    } else if (this.state.isAdministrator) {
      routes = (
        <Switch>
          <Route
            path="/configrations"
            exact
            render={(props) => (
              <IndexConfigrations
                userId={this.state.userId}
                token={this.state.token}
              />
            )}
          />
        </Switch>
      );
    }

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
                isAdminAuth={this.state.isAdminAuth}
                isAuth={this.state.isAuth}
                isAdministratorAuth={this.state.isAdministrator}
              />
            </Toolbar>
          }
          mobileNav={
            <MobileNavigation
              open={this.state.showMobileNav}
              mobile
              onChooseItem={this.mobileNavHandler.bind(this, false)}
              onLogout={this.logoutHandler}
              isadminAuth={this.state.isAdminAuth}
              isAuth={this.state.isAuth}
              isAdministratorAuth={this.state.isAdministrator}
            />
          }
        />
        {routes}
      </Fragment>
    );
  }
}

export default withRouter(App);

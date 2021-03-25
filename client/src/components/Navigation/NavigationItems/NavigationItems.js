import React from "react";
import { NavLink } from "react-router-dom";

import "./NavigationItems.css";

const navigationItems = (props) => {
  return (
    <>
      {props.isAuth && (
        <li
          className={["navigation-item", props.mobile ? "mobile" : ""].join(
            " "
          )}
        >
          <NavLink to="/" exact id="dashboard" onClick={props.onChoose}>
            Dashboard
          </NavLink>
        </li>
      )}
      {props.isAuth && (
        <li
          className={["navigation-item", props.mobile ? "mobile" : ""].join(
            " "
          )}
        >
          <NavLink to="/stepform" exact id="stepform" onClick={props.onChoose}>
            Add Price
          </NavLink>
        </li>
      )}
      {props.isAdminAuth && (
        <li
          className={["navigation-item", props.mobile ? "mobile" : ""].join(
            " "
          )}
        >
          <NavLink
            to="/confirm-price"
            exact
            id="dashboard"
            onClick={props.onChoose}
          >
            Confirm Price
          </NavLink>
        </li>
      )}
      {/* SHOW ONLY IF USER IS NOT LOGGED IN */}
      {props.isAdministratorAuth && (
        <li
          className={["navigation-item", props.mobile ? "mobile" : ""].join(
            " "
          )}
        >
          <NavLink
            to="/configrations"
            exact
            id="dashboard"
            onClick={props.onChoose}
          >
            Configrations
          </NavLink>
        </li>
      )}
      {/* SHOW ONLY IF USER IS NOT LOGGED IN */}
      {!props.isAdministratorAuth && !props.isAdminAuth && !props.isAuth && (
        <li
          className={["navigation-item", props.mobile ? "mobile" : ""].join(
            " "
          )}
        >
          <NavLink to="/" exact id="login" onClick={props.onChoose}>
            Login
          </NavLink>
        </li>
      )}
      {(props.isAuth || props.isAdministratorAuth || props.isAdminAuth) && (
        <li className="navigation-item" key="logout">
          <a onClick={props.onLogout}>Logout</a>
        </li>
      )}
    </>
  );
};

export default navigationItems;

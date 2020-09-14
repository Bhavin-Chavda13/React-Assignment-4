import React from 'react';
import {Link} from "react-router-dom";
import {useFirebase} from 'react-redux-firebase';

const Navbar = () => {
  const firebase = useFirebase();
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={require("../../assets/studentlogo.png")}
            height="80px"
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="dropdownContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="dropdownContent">
          <ul className="navbar-nav mr-auto"></ul>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link to="/studentForm" className="btn btn-primary mr-3">
                Add Student
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="!#"
                id="navbarDropdown"
                data-toggle="dropdown"
              >
                <img
                  src={require("../../assets/admin.jpg")}
                  alt="admin"
                  height="30"
                />
                <span className="ml-2 navbar-text">Bhavin Chavda</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="" className="dropdown-item" >
                  Profile
                </Link>
                <a
                  className="dropdown-item"
                  href="!#"
                  onClick={() => firebase.logout()}
                >
                  Logout
                </a>
                <div className="dropdown-divider"></div>
                <Link to="" className="dropdown-item" >
                 Ads
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
  
export default Navbar;
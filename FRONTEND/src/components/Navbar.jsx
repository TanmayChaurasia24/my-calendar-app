import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const navigate = useNavigate()
  const [isloggedin, setisloggedin] = useState(false)

  useEffect(() => {
    const cheeck = localStorage.getItem("token")
    if(cheeck) {
      setisloggedin(true)
    }
  },[])

  const handleLogout = () => {
    try {
      localStorage.removeItem("token")
      setisloggedin(false)
      navigate("/")
    } catch (error) {
      console.log("error generated while logging out", error.message);
    }
  }

  return (
    <nav className="navbar bg-slate-900">
      <div className="navbar-left flex justify-center items-center">
        <Link to="/" className="navbar-logo">
          <FontAwesomeIcon
            icon={faCalendarAlt}
            size="2x"
            className="calendar-icon"
          />
          <span className="navbar-title">CALENDAR APP</span>
        </Link>
      </div>
      <div className="navbar-right font-sans">
        <div className="gap-3 flex items-center justify-center">
          {!isloggedin ? (
            <>
              <Link to="/">Home</Link>
              <Link to="/register">Signup</Link>
              <Link to="/login">Login</Link>
              <Link to="/AboutUs">AboutUs</Link>
              <Link to="/ContactUs">ContactUs</Link>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              <button onClick={handleLogout}>Logout</button>
              <Link to="/AboutUs">AboutUs</Link>
              <Link to="/ContactUs">ContactUs</Link>
            </>
          )}
        </div>
        <button className="profile-button bg-transparent">
          <FontAwesomeIcon icon={faUserCircle} size="2x" onClick={() => navigate("/profile")}/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

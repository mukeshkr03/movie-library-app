import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const logout = () => {
    localStorage.removeItem("signUp");
    window.location.reload();
  };
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          {/* <div className="brand">
            <Link to="/">WatchList</Link>
          </div> */}

          {/* <ul className="nav-links"> */}
            {/* <li> */}
              <Link to="/">Drama</Link>
            {/* </li> */}

            {/* <li> */}
              <Link to="/watched">Action</Link>
            {/* </li> */}

            {/* <li> */}
              <Link to="/add" className="btn btn-main">
                Search movie
              </Link>
              <h3 style = {{color : "white" ,cursor:"pointer"}}onClick = {logout}>Logout</h3>
            {/* </li> */}
          {/* </ul> */}
        </div>
      </div>
    </header>
  );
};

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <Link className="brand-name" to="/">
            <h1 className="text-info text-left">IDM</h1>
          </Link>
          <div>
            <ul>
              <li className="btn btn-default">
                <Link to="/login">Login</Link>
              </li>
              <li className="btn btn-primary">
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/" className="btn btn-danger">
              Log out
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

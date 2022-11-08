import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="bmi-calc">
                  BMI Calculator
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="table-pagination"
                >
                  Pagination Table
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="tourism">
                  Tourism In Jordan
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="books">
                  Books
                </Link>
              </li>
            </ul>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                return props.handelSearch(e.target.value);
              }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

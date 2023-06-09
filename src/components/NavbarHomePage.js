import React from 'react'
import { Link } from 'react-router-dom'; 
export default function NavbarHomePage() {
  return (
    <div>
      <>
      <nav className="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
        <div className="container-fluid">
    

          <Link className="navbar-brand" to="/">
            CalculateMe
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/bmi">
                  Body mass index
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/areaofshapes">
                  Area of Shapes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/calculator">
                  Calculator
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
    </div>
  )
}

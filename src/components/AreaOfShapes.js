import React from "react";
import circle from "./images/circle.png";
import triangle from "./images/triangle.png";
import sqaure from "./images/square.png";
import rectangle from "./images/rectangle.png";
import semiCircle from "./images/semi-circle.png";
import parallelogram from "./images/Parallelogram.png";
import rhombus from "./images/rhombus.png";
import trapezium from "./images/trapezium.png";

import { Link } from 'react-router-dom';

export default function AreaOfShapes() {
  return (
    <div>
      <>
        <div className="myRow row">
          <div className="card" style={{ width: "18rem", marginLeft: "15px" }}>
            <img
              src={circle}
              className="card-img-top mx-4"
              style={{ width: "200px" }} alt= " not loaded"
            />
            <div className="card-body row text-center">
              <h5 className="card-title">Circle </h5>
              <Link to="/areaofshapes/circle" className="btn btn-primary">
                Click me
              </Link>
            </div>
          
          </div>
          <div className="card" style={{ width: "18rem", marginLeft: "20px" }}>
            <img
              src={triangle}
              className="card-img-top mx-4"
              style={{ width: "200px" }} alt= " not loaded"
            />
            <div className="card-body row text-center">
              <h5 className="card-title">Triangle</h5>
              <Link to="/areaofshapes/triangle" className="btn btn-primary">
                Click me
              </Link>
            </div>
          
          </div>
          
          <div className="card" style={{ width: "18rem", marginLeft: "20px" }}>
            <img
              src={sqaure}
              className="card-img-top mx-4"
              style={{ width: "200px" }} alt= " not loaded"
            />
            <div className="card-body row text-center">
              <h5 className="card-title">Square</h5>
              <Link to="/areaofshapes/square" className="btn btn-primary">
                Click me
              </Link>
            </div>
          </div>
          
          <div className="card" style={{ width: "18rem", marginLeft: "20px" }}>
            <img
              src={rectangle}
              className="card-img-top mx-4 my-4"
              style={{ width: "200px" }} alt= " not loaded"
            />
            <div className="card-body row text-center">
              <h5 className="card-title">Rectangle</h5>
              <Link to="/areaofshapes/rectangle" className="btn btn-primary">
                Click me
              </Link>
            </div>
          </div>
        </div>
        <div className="myRow row">
          
          <div className="card" style={{ width: "18rem", marginLeft: "15px" }}>
            <img
              src={parallelogram}
              className="card-img-top mx-4 my-1 "
              style={{ width: "200px" }} alt= " not loaded"
            />
            <div className="card-body row text-center">
              <h5 className="card-title">parallelogram</h5>
              <Link to="/areaofshapes/parallelogram" className="btn btn-primary">
                Click me
              </Link>
            </div>
          </div>
          
          <div className="card" style={{ width: "18rem", marginLeft: "20px" }}>
            <img
              src={semiCircle}
              className="card-img-top mx-4 "
              style={{ width: "200px" }} alt= " not loaded"
            />
            <div className="card-body row text-center">
              <h5 className="card-title">Semi-Circle</h5>
              <Link to="/areaofshapes/semi-circle" className="btn btn-primary">
                Click me
              </Link>
            </div>
          </div>
          
          <div className="card" style={{ width: "18rem", marginLeft: "20px" }}>
            <img
              src={rhombus}
              className="card-img-top mx-4 my-3"
              style={{ width: "200px" }} alt= " not loaded"
            />
            <div className="card-body row text-center">
              <h5 className="card-title ">Rhombus</h5>
              <Link to="/areaofshapes/rhombus" className="btn btn-primary">
                Click me
              </Link>
            </div>
          </div>
          
          <div className="card" style={{ width: "18rem", marginLeft: "20px" }}>
            <img
              src={trapezium}
              className="card-img-top mx-4 my-3"
              style={{ width: "200px" }} alt= " not loaded"
            />
            <div className="card-body row text-center">
              <h5 className="card-title">Trapezium</h5>
              <Link to="/areaofshapes/trapezium" className="btn btn-primary align-middle">
                Click me
              </Link>
            </div>
          </div>
        </div>
        <br />
      </>
    </div>
  );
}

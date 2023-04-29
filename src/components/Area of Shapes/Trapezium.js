import React from 'react'
import { useState } from 'react';

export default function Trapezium() {
  const [Area, setArea] = useState();
  const [base1, setBase1] = useState();
  const [base2, setBase2] = useState();
  const [height, setHeight] = useState();   
  const [areaInM, setAreaInM] = useState();

  function handleSubmit(event) {
    event.preventDefault();

    setArea((0.5 * (base1 + base2) * height ).toFixed(2))
    setAreaInM(((0.5 * (base1 + base2) * height )/100).toFixed(2))

  }

  return (
    <div>
  
        <form onSubmit={handleSubmit} className="mx-4 my-4 bmiForm">
          <label>
            Base 1 (in cm) : <br />
            <input
              className=" my-input-fields height-field"
              type="number"
              value={base1}
              onChange={(e) => {
                setBase1(Number(e.target.value));
              }}
              placeholder="numbers only"
            />
          </label>
          <br />
          <label>
            Base 2  (in cm) : <br />
            <input
              className=" my-input-fields weight-field"
              type="number"
              value={base2}
              onChange={(f) => {
                setBase2(Number(f.target.value));
              }}
              placeholder="numbers only"
            />
          </label>
          
           <label>
             Height  (in cm) : <br />
            <input
              className=" my-input-fields weight-field"
              type="number"
              value={height}
              onChange={(f) => {
                setHeight (Number(f.target.value));
              }}
              placeholder="numbers only"
            />
          </label>
          <input
            type="submit"
            value="Submit"
            className=" my-3  bmisubmitbtn btn btn-primary"
            onclick="bmiStatus()"
          />
        </form>
        <p className="triangleResults mx-4">
          {" "}
          Area of trapezium    is : {Area}cm<sup>2</sup> / {areaInM}m<sup>2</sup>{" "}
        </p>
    </div>
  );
}


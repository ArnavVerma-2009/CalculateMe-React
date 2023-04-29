import React from "react";
import { useState } from "react";

export default function Parallelogram() {
  const [Area, setArea] = useState();
  const [breadth, setBreadth] = useState();
  const [lenght, setLenght] = useState();
  const [areaInM, setAreaInM] = useState();

  function handleSubmit(event) {
    event.preventDefault();

    setArea((lenght * breadth).toFixed(1));
    setAreaInM((lenght * breadth).toFixed(1) / 100);

  }

  return (
    <div>
      <>
        <form onSubmit={handleSubmit} className="mx-4 my-4 bmiForm">
          <label>
            breadth (in cm) : <br />
            <input
              className=" my-input-fields height-field"
              type="number"
              value={breadth}
              onChange={(e) => {
                setBreadth(e.target.value);
              }}
              placeholder="numbers only"
            />
          </label>
          <br />
          <label>
            Height (in cm) : <br />
            <input
              className=" my-input-fields weight-field"
              type="number"
              value={lenght}
              onChange={(f) => {
                setLenght(f.target.value);
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
        <p className="triangleResults">
          {" "}
          Area of Parallelogram is : {Area}cm<sup>2</sup> / {areaInM}m<sup>2</sup>{" "}
        </p>
      </>
    </div>
  );
}

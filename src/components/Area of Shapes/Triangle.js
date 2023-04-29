import React, { useState } from "react";


export default function Triangle() {
  
  const [Area, setArea] = useState();
  const [base, setBase] = useState();
  const [theight, setTheight] = useState();
  const [areaInM, setAreaInM] = useState();

  function handleSubmit(event) {
    event.preventDefault();
  
    if (base.valueOf() == "" && theight.valueOf() == "") {
      alert("Enter the Values");
    }
    
    setArea((1/2 * base * theight).toFixed(1))
    setAreaInM(((1/2 * base * theight).toFixed(1))/100)
    
  }
  


  return (

    <>
  <div>
        <form onSubmit={ handleSubmit } className="mx-4 my-4 bmiForm">
          <label>
            Base (in cm) : <br />
            <input
             className=" my-input-fields height-field"
              type="number"
              value={base}
              onChange={(e) => {
                setBase(e.target.value);
              } }
              placeholder="numbers only" />
          </label>
          <br />
          <label>
            Height (in cm) : <br />
            <input
             className=" my-input-fields weight-field"
              type="number"
              value={theight}
              onChange={(f) => {
                setTheight(f.target.value);
              } }
              placeholder= "numbers only" />
          </label>
          <input
            type="submit"
            value="Submit"
            className=" my-3  bmisubmitbtn btn btn-primary" 
            onclick = "bmiStatus()"

            />
          
        </form><p className="triangleResults"> Area of Triangle is : {Area}cm<sup>2</sup> / {areaInM}m<sup>2</sup> </p>
      </div></>
  );
} 

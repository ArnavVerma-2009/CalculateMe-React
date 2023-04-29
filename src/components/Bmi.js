import React, { useState } from "react";



export default function Bmi() {
  
  const [bmi, setBmi] = useState();
  

  function handleSubmit(event) {
    event.preventDefault();
  
    if (weight.valueOf() == " " && height.valueOf() == " ") {
      alert("Enter a  Number");
    }
  
    let heightincm = height / 100;
    
    setBmi((weight / (heightincm * heightincm)).toFixed(2));

  
  }
  
  
  const [height, setHeight] = useState(" ");
  const [weight, setWeight] = useState(" ");

  return (

    <>
  <div>
        <form onSubmit={ handleSubmit } className="mx-4 my-4 bmiForm">
          <label>
            Height (in cm) : <br />
            <input
             className=" my-input-fields height-field"
              type="number"
              value={height}
              onChange={(e) => {
                setHeight(e.target.value);
              } }
              placeholder="numbers only" />
          </label>
          <br />
          <label>
            Weight (in kg) : <br />
            <input
             className=" my-input-fields weight-field"
              type="number"
              value={weight}
              onChange={(f) => {
                setWeight(f.target.value);
              } }
              placeholder= "numbers only" />
          </label>
          <input
            type="submit"
            value="Submit"
            className=" my-3  bmisubmitbtn btn btn-primary" 
            onclick = "bmiStatus()"

            />
          <p> your bmi is : {bmi}</p>
        </form>
      </div></>
  );
} 

import React from 'react'
import { useState } from 'react';

export default function Circle() {

  const [radius, setRadius] = useState(" ")
  const [circum, setCircum] = useState(" ")
  const [circumInM, setCircumInM] = useState(" ")
  const [area, setArea] = useState(" ")
  const [areaInM, setAreaInM] = useState(" ")
  
  const PI = 22/7
  
  function handleSubmit(event){
    event.preventDefault();
    
    // circumferance

    setCircum((2 * PI * radius).toFixed(2))
    setCircumInM(((2 * PI * radius)/100).toFixed(2))

    // Area of Circle

    setArea((PI * (radius * radius )).toFixed(2))
    setAreaInM(((PI * (radius * radius ))/100).toFixed(2))

  }
  return (
    <div>
      <>
      <form onSubmit={ handleSubmit } className="mx-4 my-4 bmiForm">
          <label>
            Radius (in cm) : <br />
            <input 
            min="0" 
             className=" my-input-fields radius-field"
              type="number"
              value={radius}
              onChange={(e) => {
                setRadius(e.target.value);
               
              } }
              placeholder="numbers only" />
          </label>
          <input
            type="submit"
            value="Submit"
            className=" my-3  bmisubmitbtn btn btn-primary"
            />
        </form>

        <br />

        <p className= "circleResults mx-4 ">Circumferance :  {circum }cm/ {circumInM}m </p>
        <p className= "circleResults mx-4 ">Area :  { area }cm<sup>2</sup> / { areaInM }m<sup>2</sup> </p>
        <p className='Text mx-4 '>*pi taken as 22/7</p>
      
      </>
    </div>
  )
}

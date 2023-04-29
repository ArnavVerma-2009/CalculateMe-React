import React from 'react'
import { useState } from 'react';

export default function Square() {

  const [side, setSide] = useState(" ")
  const [peri, setPeri] = useState(" ")
  const [periInM, setPeriInM] = useState(" ")
  const [area, setArea] = useState(" ")
  const [areaInM, setAreaInM] = useState(" ")

  
  function handleSubmit(event){
    event.preventDefault();

    // AREA
    
    setArea((side**2).toFixed(2))
    setAreaInM(((side**2)/100).toFixed(2))

    // PERIMETER

    setPeri((side*4).toFixed(2))
    setPeriInM(((side*4)/100).toFixed(2))
  }
  return (
    <div>
      <>
      <form onSubmit={ handleSubmit } className="mx-4 my-4 bmiForm">
          <label>
            Side (in cm) : <br />
            <input 
             
             className=" my-input-fields radius-field"
              type="number"
              value={side}
              onChange={(e) => {
                setSide(e.target.value);
               
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

        <p className= "circleResults mx-4 ">Perimeter:  {peri }cm/ {periInM}m </p>
        <p className= "circleResults mx-4 ">Area :  { area }cm<sup>2</sup> / { areaInM }m<sup>2</sup> </p>
       
      
      </>
    </div>
  )
}

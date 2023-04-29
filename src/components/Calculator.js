import React from "react";
import { useState } from "react";

export default function Calculator() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = value => {
    
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
      )
    {
      return;
    }
    
    setCalc(calc + value);

    if (!ops.includes(value)){
        setResult(eval(calc + value).toString())
    }
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          key={i}
          className="CalcBtns"
          onClick={() => {
            updateCalc(i.toString());
          }}
        >
          {" "}
          {i}
        </button>
      );
    }



    return digits;
  };
   
  const equalTo = () => {
      setCalc(eval(calc).toString())
    }
  const deleteInput = () => {
      if(calc === ""){
        return;
      }

      const value = calc.slice(0, -1)

      setCalc(value)
  }
  return (
    <div className="App">
      <>
        <div className="calculator">
          <div className="display">
            {result ? <span className="mySpan" > { result }</span> : ''}
                {calc || '0'}
          </div>

          <div className="operators">
            <button
              className="CalcBtns"
              onClick={() => {
                updateCalc("*");
              }}
            >
              *
            </button>
            <button
              className="CalcBtns"
              onClick={() => {
                updateCalc("/");
              }}
            >
              /
            </button>
            <button
              className="CalcBtns"
              onClick={() => {
                updateCalc("+");
              }}
            >
              +
            </button>
            <button
              className="CalcBtns"
              onClick={() => {
                updateCalc("-");
              }}
            >
              -
            </button>
            <button className="CalcBtns" onClick={ deleteInput }>DEL</button>
          </div>

          <div className="digits">
            {createDigits()}
            <button
              className="CalcBtns"
              onClick={() => {
                updateCalc("0");
              }}
            >
              0
            </button>
            <button
              className="CalcBtns"
              onClick={() => {
                updateCalc(".");
              }}
            >
              .
            </button>
            <button className="CalcBtns" onClick={ equalTo }>=</button>
          </div>
        </div>
      </>
    </div>
  );
}

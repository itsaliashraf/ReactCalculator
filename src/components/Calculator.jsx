import React, { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [final, setFinal] = useState("");
  const [operator, setOperator] = useState("");
  const [disp, setDisp] = useState("");
  const [dispop, setdispop] = useState("");
  const [result, setResult] = useState("");

  function handleOnClick(value, isOperation) {
    if (first != "" && isOperation == true && second == "") {
      if (final != "") {
        setFirst(final);
        setDisp(final);
      }
      setFinal("");
      setOperator(value);
      setdispop(value);
    } else if (isOperation == false && operator == "") {
      if (first != "" && result != "") {
        setFirst(value);
        setFinal(value);
        setResult("");
      } else if (value === "." && !first.includes(".")) {
        setFirst((prevValue) => prevValue + value);
        setFinal((prevValue) => prevValue + value);
      } else if (value !== ".") {
        setFirst((prevValue) => prevValue + value);
        setFinal((prevValue) => prevValue + value);
      }
    } else if (isOperation == false && operator != "") {
      if (value === "." && !second.includes(".")) {
        setSecond((prevValue) => prevValue + value);
        setFinal((prevValue) => prevValue + value);
      } else if (value !== ".") {
        setSecond((prevValue) => prevValue + value);
        setFinal((prevValue) => prevValue + value);
      }
    }
  }

  function clearInput() {
    setFinal("");
    setFirst("");
    setSecond("");
    setOperator("");
    setDisp("");
    setdispop("");
    setResult("");
  }

  function calculateResult() {
    if (operator == "+") {
      setFinal(parseFloat(first) + parseFloat(second));
      setResult(parseFloat(first) + parseFloat(second));
    } else if (operator == "-") {
      setFinal(parseFloat(first) - parseFloat(second));
      setResult(parseFloat(first) - parseFloat(second));
    } else if (operator == "*") {
      setFinal(parseFloat(first) * parseFloat(second));
      setResult(parseFloat(first) * parseFloat(second));
    } else if (operator == "/") {
      setFinal(parseFloat(first) / parseFloat(second));
      setResult(parseFloat(first) / parseFloat(second));
    }

    setDisp("");
    setSecond("");
    setOperator("");
    setdispop("");
  }

  return (
    <>
      <div className="Outer">
        <div>{disp}</div>
        <div className="inputcontainer">
          <input
            className="calculator-input"
            type="text"
            value={final}
            onChange={() => {}}
            readOnly
          />
          <div>{dispop}</div>
        </div>
        <button onClick={clearInput} className="btn clear">
          Clear Input
        </button>
      </div>
      <div className="container">
        <div className="numberButtons">
          <button
            className="btn"
            onClick={() => {
              handleOnClick("9", false);
            }}
          >
            9
          </button>
          <button className="btn" onClick={() => handleOnClick("8", false)}>
            8
          </button>
          <button className="btn" onClick={() => handleOnClick("7", false)}>
            7
          </button>
          <button className="btn" onClick={() => handleOnClick("6", false)}>
            6
          </button>
          <button className="btn" onClick={() => handleOnClick("5", false)}>
            5
          </button>
          <button className="btn" onClick={() => handleOnClick("4", false)}>
            4
          </button>
          <button className="btn" onClick={() => handleOnClick("3", false)}>
            3
          </button>
          <button className="btn" onClick={() => handleOnClick("2", false)}>
            2
          </button>
          <button className="btn" onClick={() => handleOnClick("1", false)}>
            1
          </button>
          <button className="btn" onClick={() => handleOnClick(".", false)}>
            .
          </button>
          <button className="btn" onClick={() => handleOnClick("0", false)}>
            0
          </button>

          <button onClick={calculateResult} className="btn equal">
            =
          </button>
        </div>
        <div className="Operators">
          <button
            onClick={() => handleOnClick("+", true)}
            className="btn operator"
          >
            +
          </button>
          <button
            onClick={() => handleOnClick("-", true)}
            className="btn operator"
          >
            -
          </button>
          <button
            onClick={() => handleOnClick("/", true)}
            className="btn operator"
          >
            /
          </button>
          <button
            onClick={() => handleOnClick("*", true)}
            className="btn operator"
          >
            *
          </button>
        </div>
      </div>
    </>
  );
}

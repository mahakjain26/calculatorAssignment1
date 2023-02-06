import React, { useState } from "react";
import Result from "../components/Result";
import Button from "../components/Button";
import InputBox from "../components/Input";

const Main = () => {
  let [Number1, setNum1] = useState("");
  let [Number2, setNum2] = useState();
  let [Number3, setNum3] = useState("");
  let [add, setAdd] = useState();
  let [sub, setSub] = useState();
  let [multiply, setMultiply] = useState();
  let [div, setDivide] = useState();

  const setNumber1 = (event) => {
    setNum1(event?.target?.value);
  };

  const setNumber2 = (event) => {
    setNum2(event?.target?.value);
  };

  const setNumber3 = (event) => {
    setNum3(event?.target?.value);
  };

  const calculate = () => {
    setAdd(parseInt(Number1) + parseInt(Number2));
    setSub(parseInt(Number1) - parseInt(Number2));
    setMultiply(parseInt(Number1) * parseInt(Number2));
    setDivide(parseInt(Number1) / parseInt(Number2));
  };

  const calculateAdd=()=>{
    setAdd((prev)=>(prev+parseInt(Number3)));
  }
  const calculateSub=()=>{
    setSub((prev)=>(prev-parseInt(Number3)));
  }
  const calculateMultiply=()=>{
    setMultiply((prev)=>(prev*parseInt(Number3)));
  }
  const calculateDivide=()=>{
    setDivide((prev)=>(prev/parseInt(Number3)));
  }

  function refreshPage() {
    window.location.reload(false);
  }

  const reset=()=>{
    console.log("clicked")
    setNum1("");
    setNum2("")
  }


  return (
    <div className="container h-screen bg-rose-100">
      <div className="flex justify-evenly p-6 mb-2">
        <InputBox value={Number1} onChange={setNumber1} />
        <InputBox value={Number2} onChange={setNumber2} />
          <Button value="Calculate" onClick={calculate} />
      </div>

        <div className="flex justify-center">
        <Button value="Reset" onClick={reset} />
          <InputBox value={Number3} onChange={setNumber3}/>

        </div>


      <div className="flex flex-row justify-around my-2">
        <div className="flex flex-col">
        <Result operation={"Addition"} value={add} num={`+ ${Number3}`} onClick={calculateAdd} />
        <Result operation={"Subtraction"} value={sub} num={`- ${Number3}`} onClick={calculateSub} />
        </div>

        <div className="flex flex-col">
        <Result operation={"Multiplication"} value={multiply} num={`* ${Number3}`} onClick={calculateMultiply} />
        <Result operation={"Division"} value={div} num={`/ ${Number3}`} onClick={calculateDivide} />
        </div>
      </div>

      <Button value="Reset" onClick={refreshPage} />
    </div>
  );
};

export default Main;

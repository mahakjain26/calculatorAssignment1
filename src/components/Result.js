import React from "react";
import Button from "./Button";

const Result = (props) => {
  return (
    <div className="border-2 border-pink-900 my-2">
        <h3 className="text-lg m-1">{props.operation}</h3>
        <h3 className=" text-lg m-1"> {props.value} </h3>
        <Button onClick={props.onClick} value={`${props.num}`} />
      {/* <div>
        <p>Subtraction</p>
        <p> {props.value2} </p>
        <Button value={`- ${props.num}`} />
      </div>
      <div>
        <p>Multiplication</p>
        <p> {props.value3} </p>
        <Button value={`* ${props.num}`} />
      </div>
      <div>
        <p>Division</p>
        <p> {props.value4} </p>
        <Button value={`/ ${props.num}`} />
      </div> */}
      
      
    </div>
  );
};

export default Result;

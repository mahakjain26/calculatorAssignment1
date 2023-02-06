import React from "react";

const InputBox=(props)=>{
    return(
        <div className="w-96">
        <input className="border-2 border-pink-900 border-black p-2 " value={props.value} placeholder="Enter the number..." onChange={props.onChange}/>
        </div>
    )
}

export default InputBox;
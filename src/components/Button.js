import React from "react";

const Button=(props)=>{
    return(
        <button className="border-2 border-pink-900 mx-20 mb-8 w-36 h-10 bg-white text-lg" onClick={props.onClick}>{props.value}</button>
    )
}

export default Button;
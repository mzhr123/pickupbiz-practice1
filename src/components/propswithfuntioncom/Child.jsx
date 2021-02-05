import React from "react";

export const Child =(props)=>{
    return(
        <div>
        <p>my office name is {props.name}</p>
        <p>our office owner is {props.brand}</p>
        <p>we serve {props.value}</p>
        </div>
    );
};
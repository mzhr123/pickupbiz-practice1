import React from "react";
import { Child } from "./Child";

export const Parent = () =>{
    const personName="pickupbiz";
    return(
        <div>
        <Child name={personName} brand="amjad Sir" value="software solution"/>
        </div>
    );
};
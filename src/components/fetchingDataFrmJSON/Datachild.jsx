import React from "react";

export const DataChild =({itemCurrent})=>{
    return(
        <div>
            {/* <img src={props.studentimage} width="100" height="100" /> */}
            <p>The Student name {itemCurrent.name} is, his Age is {itemCurrent.age} and he is in Standard {itemCurrent.discription} </p>
        </div>
    );
};
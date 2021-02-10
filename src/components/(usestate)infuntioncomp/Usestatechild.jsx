import React  from "react";

export const Usestatechild = (item) =>{
    return(
        <div>
            <p onClick={item.clicked}>
                my name is {item.name} and my age is {item.age}
            </p>

            <input type="text" onChange={item.inputclicked}/>
        </div>
    );
};
import React, {useState} from "react";
import { Usestatechild } from "./Usestatechild";

export const Usestateparent = () =>{

    // this is use to define the usestate
    // this is also get state
    const [personData, setPersonData] = useState({
        person: [
            {name:"khan", age:20},
            {name:"shaikh", age:22},
            {name:"pathan", age:25}
        ],
    });
    // this is for change state/set state
    // also use the bind method
    const nameswitch = (name1,name2) => { 
        setPersonData({
          person: [
            {name: name1, age:20},
            {name:"rizwan shaikh", age:22},
            {name: name2, age:25}
        ],  
        }); 
    };
    const paraswitch = () => {
        setPersonData({
          person: [
            {name:"mazhar khan", age:10},
            {name:"saim shaikh", age:28},
            {name:"aamer pathan", age:29}
        ],  
        });
    };
    const inputswitch = (event) => {
        setPersonData({
            person: [
            {name:event.target.value, age:10},
            {name:"superman", age:28},
            {name:"batman", age:29}
        ],
        });
    };
    return(
        <div>
            <button onClick={()=>nameswitch ("adil", "kashif")}>change state</button>
            <Usestatechild 
            name={personData.person[0].name} 
            age={personData.person[0].age}
             clicked={paraswitch}
             inputclicked={inputswitch}
             />
            <Usestatechild 
            name={personData.person[1].name} 
            age={personData.person[1].age}/>
            <Usestatechild 
            name={personData.person[2].name} 
            age={personData.person[2].age}/>
        </div>
    );
};
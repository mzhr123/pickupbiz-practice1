// import React, { useState } from "react";

// export const CounterPractice =()=> {
//     const [addNumber, setaddNumber] = useState(0);

//         // set state with this method

//     // const addNumberHandler =()=>{
//     //     setaddNumber(addNumber+1)
//     // };

//         // this is also a bind method
//      const deleteNumberHandler =(delnumber)=>{
//          setaddNumber(addNumber-delnumber);
//      };

//     return(
//         <div>
//         <h1>numbers....... {addNumber}</h1>
//         {/* set state using bind method */}
//         <button onClick={()=> setaddNumber(addNumber+1)}>add number</button>
//         <br/><br/>
//         <button onClick={deleteNumberHandler.bind(addNumber,1)}>delete number</button>
//         </div>
//     );
// };




import React from "react";

export const Counterpractice = () =>{

    return(
        <div>
            <h1>numbers.......</h1>

            <button>Add Numbers</button>
            <br/><br/>
            <button>delete Numbers</button>
        </div>
    );
};
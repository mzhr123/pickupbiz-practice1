// import React from "react";

// export const DataChild =({itemCurrent})=>{
//     return(
//         <div>
//             {/* <img src={props.studentimage} width="100" height="100" /> */}
//             <p>The Student name {itemCurrent.name} is, his Age is {itemCurrent.age} and he is in Standard {itemCurrent.discription} </p>
//         </div>
//     );
// };





import React from "react";

export const Datachild = ({itemCurrent}) => {
    return(
        <div>
            <img src={itemCurrent.image} width="200" height="200"/>
            <p>the student name is {itemCurrent.name} and his age is {itemCurrent.age} and his in {itemCurrent.discription} </p>
        </div>
    );
};
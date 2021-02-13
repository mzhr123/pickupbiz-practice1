import React from "react";
import { DataChild } from "../fetchingDataFrmJSON/Datachild";
import { personDetailsReducer } from "../State/Reducer/personDetailsReducer";

export const DataParent =()=>{
    return(
        <div>
            {personDetailsReducer.personDetails.map((fetchData) => {
                return <DataChild itemCurrent={fetchData}/>
                
            })
            };

        </div>
    );
};
import React from "react";
import { DataChild } from "../fetchingDataFrmJSON/Datachild";
import { personDetailsReducer } from "../State/Reducer/personDetailsReducer";

export const DataParent =()=>{
    return(
        <div>
            
            <DataChild/>
        </div>
    );
};
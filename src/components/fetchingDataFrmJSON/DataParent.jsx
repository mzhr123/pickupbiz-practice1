import React, { useState } from "react";
import { DataChild } from "../fetchingDataFrmJSON/Datachild";
import { personDetailsReducer } from "../State/Reducer/personDetailsReducer";

export const DataParent =()=>{
    const {personDetails, SetPersonData}=useState();
    return(
        <div>
            <DataChild/>
        </div>
    );
};
import React, { useState } from "react";
import { DataChild } from "../fetchingDataFrmJSON/Datachild";

export const DataParent =()=>{
    const {personDetails, SetPersonData}=useState();
    return(
        <div>
            <DataChild/>
        </div>
    );
};
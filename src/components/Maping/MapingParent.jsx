import React, { useState } from "react";
import { MapingChild } from "./MapingChild";

export const MapingParent =()=>{
    const Details=[
        {companyName:"Ford", carName:"Endeavour"},
        {companyName:"TaTa", carName:"Hexa"},
        {companyName:"Honda", carName:"City"},
        {companyName:"Hyundai", carName:"Verna"},
        {companyName:"Mahindra", carName:"Thar"},
    ];
    const {companyDetails,setCompanyDetails}=useState(Details);
    return(
        <div>
            {Details.map((fetchData) =>{
                return(
                    <MapingChild
                    company={fetchData.companyName}
                    product={fetchData.carName}/>
                    
                )
            }

            )}
        </div>
    );
};
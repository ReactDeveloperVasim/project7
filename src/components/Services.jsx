import React, { useState } from "react";
import { Grid } from "@mui/material";
import { ServicesItem } from "./ServicesItem";

export const Services=()=>{
    const[data,setData]=useState(["Software Development","Mobile App Development","Digital Marketing","Maintenance"])
    return(
       <Grid container spacing={2}>
            {data.map((item)=>
                <Grid item xs={4}>
                    <ServicesItem item={item} />
                </Grid>
            )}
       </Grid>
    );
}
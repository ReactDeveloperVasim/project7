import { List, ListItem } from "@mui/material";
import React, { useState } from "react";

export const SubscribersList=()=>{
    const[data,setData]=useState(["Sameer Dahelrai", "Vikram Singh","Kunal Singh","Sharmin Shah","Hanumant Patil"])
    return(
            <List>
                {
                    data.map((item)=>
                    {
                        <ListItem>{item}</ListItem>
                    }
                    )
                }
            </List>
    );
}
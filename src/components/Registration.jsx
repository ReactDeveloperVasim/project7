import React from "react";
import { Grid,TextField,Button } from "@mui/material";
import { UploadButton } from "./common/UploadButton";

export const Registration=()=>{
    return(
        <Grid container spacing={2} sx={{border:"5px solid gray", padding:3}}>
       
            <Grid item xs={4}>
                <TextField variant="outlined" label="First Name" fullWidth/>
            </Grid>
            <Grid item xs={4}>
                <TextField variant="outlined" label="Middle Name" fullWidth />
            </Grid>
            <Grid item xs={4}>
                <TextField variant="outlined" label="Last Name" fullWidth/>
            </Grid>
            <Grid item xs={6}>
                <TextField  variant="outlined" label="Enter Email" fullWidth/>
            </Grid>
            <Grid item xs={6}>
                <TextField variant="outlined" label="Enter Mobile No" fullWidth />
            </Grid>
            <Grid item xs={3}>
                <TextField fullWidth variant="outlined" label="House No" />
            </Grid>
            <Grid item xs={3}>
                <TextField fullWidth variant="outlined" label="Area Location" />
            </Grid>
            <Grid item xs={3}>
                <TextField fullWidth variant="outlined" label="City" />
            </Grid>
            <Grid item xs={3}>
            <TextField fullWidth variant="outlined" label="Pin Code" />

            </Grid>
            <Grid item xs={4}>
                <UploadButton title="Upload Profile Photo" />
            </Grid>
            <Grid item xs={4}>
                <UploadButton title="Upload Aadhar Card" />
            </Grid>
            <Grid item xs={4}>
                <UploadButton title="Upload Pan Card" />
            </Grid>
            
            <Grid item xs={6}>
                <Button variant="contained" color="success" fullWidth>submit</Button>
            </Grid>
            <Grid item xs={6}>
                <Button variant="contained" color="error" fullWidth>Cancel</Button>
            </Grid>

        </Grid>
    );
}
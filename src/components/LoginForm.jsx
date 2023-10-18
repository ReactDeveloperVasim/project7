import React from "react";
import { Grid,Button,TextField,Typography } from "@mui/material";
export const Login=()=>{
    return(
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h2" gutterBottom>Login Form</Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField variant="outlined" label="Email" fullWidth></TextField>
            </Grid>
            <Grid item xs={12}>
                <TextField variant="outlined" label="Password" fullWidth></TextField>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained"  fullWidth>LOGIN</Button>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h5" gutterBottom>Not a Member?</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h5" gutterBottom>Signup now</Typography>
            </Grid>
        </Grid>
    );
}
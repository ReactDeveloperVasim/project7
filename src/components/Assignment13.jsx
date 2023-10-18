import React from "react";
import { Grid, Button, Typography, TextField } from "@mui/material";
export const Assignment13 = () => {
  return (
    
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                BILLING ADDRESS
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" label="Full Name" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" label="Email" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" label="Address" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" label="City" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField variant="outlined" label="State" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField variant="outlined" label="Zip Code" fullWidth />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2.3}>
            <Grid item xs={12}>
              <Typography variant="h4" gutterBottom>
                Payment
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <img src="img/visacard.png" width={100} height={70} />
              <img src="img/visamaster.jpg" width={100} height={70} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Credit Card Number"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" label="Type Number" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField variant="outlined" label="Exp Year" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField variant="outlined" label="CVV" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Button
                sx={{ height: 50, marginTop: 1 }}
                variant="contained"
                fullWidth
              >
                Proceed To Checkout
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    
  );
};

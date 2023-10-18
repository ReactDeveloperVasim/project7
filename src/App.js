import React from "react";
import { Card, Grid, CardContent } from "@mui/material";
import { Home } from "./components/Home";
import { Assignment13 } from "./components/Assignment13";
import {LoginForm} from "./components/LoginForm";

function App() {
  return (
    <div style={{ backgroundColor: "#154c79",height:1000 }}>
      <Grid container spacing={3}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <Card style={{ marginTop: 80 }}>
            <CardContent>
              <Home />
    {/* <LoginForm/> */}



              {/* <Assignment13 /> */}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}

export default App;

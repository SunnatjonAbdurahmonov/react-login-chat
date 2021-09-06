import React from "react";
import {Container, Grid } from "@material-ui/core";

function Loader() {
  return (
    <Container>
      <Grid
        container
        alignItems={"center"}
        justify={"center"}
        style={{ height: window.innerHeight - 50 }}>
        <Grid container alignItems={"center"} justifyContent={"center"}>
          <div className="loadingio-spinner-eclipse-zmhsiiiy0at">
            <div className="ldio-dz7k6orv7k7">
              <div></div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Loader;

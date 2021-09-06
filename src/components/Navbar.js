import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "../App.css";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../util/const";

export default function Navbar() {
  const user = false;
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <h3>Sunnatjon</h3>
          <Grid container justify={"flex-end"}>
            {user ? (
              <Button variant={"outlined"}>Quit</Button>
            ) : (
              <NavLink to={LOGIN_ROUTE}>
                <Button variant={"outlined"}>Login</Button>
              </NavLink>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

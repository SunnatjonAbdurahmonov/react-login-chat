import React, {useContext} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "../App.css";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../util/const";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";

export default function Navbar() {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);


  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <h3>Sunnatjon</h3>
          <Grid container justify={"flex-end"}>
            {user ? (
              <Button onClick={() => auth.signOut()} variant={"outlined"}>EXIT</Button>
            ) : (
              <NavLink to={LOGIN_ROUTE}>
                <Button variant={"outlined"}>LOGIN</Button>
              </NavLink>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

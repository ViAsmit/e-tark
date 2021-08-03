import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import logo from "./logo.png";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
    height: "100px",
    // marginTop: theme.spacing(1),
  },
  title: {
    margin: "0 15px",
    fontSize: "16px",
    fontWeight: "bold",
  },
}));

function Appbar() {
  const classes = useStyles();
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      style={{ padding: "0px 40px" }}
    >
      <Toolbar>
        <img src={logo} className={classes.menuButton} aria-label="menu" />
        <Grid direction="row" container justifyContent="center">
          <Button className={classes.title}>HOW TO USE</Button>
          <Button className={classes.title}>ABOUT US</Button>
          <Button className={classes.title}>CONTACT US</Button>
        </Grid>
        <Button color="inherit">Login</Button>
        <Button
          color="primary"
          variant="contained"
          style={{
            marginLeft: "40px",
            minWidth: "8%",
            // color: "white",
            // background: "rgb(36, 95, 211)",
          }}
        >
          Get Started
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Appbar;

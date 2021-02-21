import React from "react";

import { AppBar, Toolbar, Typography, Grid, Button, Slide, makeStyles, useScrollTrigger } from "@material-ui/core";
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory';

import { useNavbar } from "../hooks/useNavbarTheme";

const useStyles = ({ color, background }) => makeStyles(({ palette }) => ({
  appBar: {
    color: color || palette.text.primary,
    background: background || palette.background.default
  },
  toolbarSections: {
    marginLeft: "auto",
    display: "flex"
  },
  title: {
    marginTop: 1,
    marginLeft: 10,
    textTransform: "uppercase",
    fontSize: 20,
    fontWeight: "bolder"
  }
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = () => {
  const { color, background } = useNavbar();
  const classes = useStyles({ color, background })();

  return (
    <HideOnScroll>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <ChangeHistoryIcon/>
          <Typography className={classes.title}>Maxim Dodon</Typography>
          <Grid className={classes.toolbarSections}>
            <Grid item>
              <Button><Typography style={{ color }}>Contact</Typography></Button>
            </Grid>
            <Grid item>
              <Button><Typography style={{ color }}>Resume</Typography></Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
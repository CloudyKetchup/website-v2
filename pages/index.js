import React, { useState } from 'react';

import {
  Box,
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core';
import Navbar from '../src/components/Navbar';
import Landing from '../src/components/Landing';

import { NavbarProvider } from "../src/hooks/useNavbarTheme";

const useStyles = makeStyles(() => ({
  root: {
    overflow: "hidden"
  },
  landingContainer: {
    width: "100vw"
  },
  introText: {
    letterSpacing: 0.5,
    fontSize: ({ fontSize }) => fontSize || 70,
    fontWeight: "bolder"
  }
}));

const RenderWithNavbar = ({ children }) => {
  const [background, setBackground] = useState("#181818");
  const [color, setColor] = useState("#fff");

  return (
    <NavbarProvider value={{ background, setBackground, color, setColor }}>
      <Navbar />
      {children}
    </NavbarProvider>
  )
};

export default function Index() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <RenderWithNavbar>
        <Grid direction="column" container>
          <Grid className={classes.landingContainer} item>
            <Landing/>
          </Grid>
          <Grid item>
            <Box my={4} height="20vh">
              <Box padding="60px">
                <Typography variant="h2">Site is still under development, coming soon...</Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </RenderWithNavbar>
    </Box>
  );
};

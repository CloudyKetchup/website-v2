import React from "react";

import { Paper, Box, Grid, Divider, makeStyles, Typography } from "@material-ui/core";
import { useNavbar } from "../hooks/useNavbarTheme";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    borderRadius: "unset",
    height: 80,
    width: "100vw",
    padding: 20,
    background: ({ background }) => background || palette.background.default,
    "& *": {
      color: ({ color }) => color || palette.text.primary,
    }
  },
  divider: {
    background: ({ color }) => color || palette.text.primary
  },
  content: {
    display: "flex"
  }
}));

const Contact = () => {
  const { color, background } = useNavbar();
  const classes = useStyles({ color, background });

  return (
    <Paper className={classes.root}>
      <Box className={classes.content}>
        <Box margin="auto">
          <Grid direction="row" spacing={2} container>
            <Grid item>
              <Typography>maxdodon25@gmail.com</Typography>
            </Grid>
            <Grid item>
              <Divider className={classes.divider} orientation="vertical" />
            </Grid>
            <Grid item>
              <Typography>+447440715195</Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Paper>
  );
};

export default Contact;
import React from "react";

import { Paper, makeStyles, Box } from "@material-ui/core";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles(() => ({
  root: {
    borderRadius: 5,
    padding: 20
  },
  content: {
    height: "calc(100% - 100px)"
  },
  footer: {
    height: 60,
    display: "flex"
  }
}));

const LandingWidget = ({ children }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} variant="elevation">
      <Box className={classes.content}>
        {children}
      </Box>
      <Box className={classes.footer}>
        <Box margin="auto" marginRight="unset">
          <NavigateNextIcon/>
        </Box>
      </Box>
    </Paper>
  );
};

export default LandingWidget;
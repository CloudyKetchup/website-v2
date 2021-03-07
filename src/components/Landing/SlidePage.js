import React, { forwardRef, useEffect, useRef, useCallback } from "react";

import { Box, Typography, makeStyles } from "@material-ui/core";
import LandingSlide from "./LandingSlide";

import { useNavbar } from "../../hooks/useNavbarTheme";

const useStyles = makeStyles(() => ({
  root: {
    "& *": {
      color: ({ color }) => color || "inherit",
    }
  },
  introText: {
    fontSize: ({ fontSize }) => fontSize || "inherit",
    fontWeight: "bolder"
  }
}));

const SlidePage = forwardRef(({ index, activeStep, text, style, ...props }, ref) => {
  const { color, background, fontSize } = style;

  const { setColor, setBackground } = useNavbar();
  const classes = useStyles({ color, fontSize });
  const rootRef = useRef();

  useEffect(() => {
    if (index === activeStep) {
      setColor(color);
      setBackground(background);
    }
  }, [index, activeStep, color, background]);

  const onMoreButton = useCallback(() => {
    const height = rootRef.current.offsetHeight + 64;

    window.scroll({
      top: height,
      behavior: "smooth"
    });
  }, [rootRef.current]);

  return (
    <LandingSlide
      {...props}
      ref={rootRef}
      className={classes.root}
      onMoreButtonClick={onMoreButton}
    >
      <Box width="50vw">
        <Typography className={classes.introText}>{text}</Typography> 
      </Box>
    </LandingSlide>
  );
});

export default SlidePage;
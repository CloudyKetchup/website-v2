import React, { forwardRef } from "react";

import { Box, Typography, Button, makeStyles } from "@material-ui/core";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ImageContainer from './ImageContainer';

const useStyles = makeStyles(({ palette }) => ({
  landingContent: {
    margin: "auto",
    padding: 60,
    wordBreak: "break-word",
    width: "60vw",
    height: "100%",
    top: 0,
    bottom: 0,
    position: "absolute",
    zIndex: 10
  },
  landingImage: {
    objectFit: "cover"
  },
  landingContainer: {
    display: "flex",
    position: "relative"
  },
  moreButton: {
    position: "absolute",
    bottom: 20,
    left: 40,
    color: palette.text.primary
  }
}));

const LandingSlide = forwardRef(({ children, imageSrc, onMoreButton, ...props }, ref) => {
  const classes = useStyles();

  return (
    <Box {...props} ref={ref}>
      <Box>
        <ImageContainer
          style={{ height: "calc(100vh - 64px)", width: "100vw" }}
          imageSrc={imageSrc}
          imageProps={{ className: classes.landingImage }}
          className={classes.landingImageContainer}
        />
      </Box>
      <Box className={classes.landingContent}>
        {children}
        <Button className={classes.moreButton} onClick={onMoreButton} variant="text">
          <ArrowDownwardIcon />
          <Box marginLeft="10px">
            <Typography>More</Typography>
          </Box>
        </Button>
      </Box>
    </Box>
  );
});

export default LandingSlide;
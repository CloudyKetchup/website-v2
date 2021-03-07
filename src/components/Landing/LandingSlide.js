import React, { forwardRef } from "react";

import { Box, Container, Typography, IconButton, Button, makeStyles } from "@material-ui/core";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ImageContainer from '../ImageContainer';

const useStyles = makeStyles(({ palette }) => ({
  landingContainer: {
    display: "flex",
    margin: "auto",
    marginTop: "-50px"
  },
  landingContent: {
    display: "flex",
    margin: "auto",
    padding: 60,
    wordBreak: "break-word",
    width: "100vw",
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
  },
  button: {
    fontSize: 40,
    "& svg": {
      height: "2em",
      width: "2em"
    }
  }
}));

const LandingSlide = forwardRef(({ children, imageSrc, onMoreButtonClick, onPrevious, onNext, disablePrev, disableNext, ...props }, ref) => {
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
        {/* <Container className={classes.landingContianer} maxWidth="lg">
          <Box margin="auto" display="flex"> */}
            {/* <Box margin="auto"> */}
              {/* {!disablePrev && (
                <IconButton className={classes.button} onClick={onPrevious}>
                  <ArrowBackIosIcon />
                </IconButton>
              )} */}
            {/* </Box> */}
            {children}
            {/* <Box margin="auto" marginLeft="auto"> */}
              {/* {!disableNext && (
                <IconButton className={classes.button} onClick={onNext}>
                  <ArrowForwardIosIcon />
                </IconButton>
              )} */}
            {/* </Box> */}
          {/* </Box>
        </Container> */}
        <Button className={classes.moreButton} onClick={onMoreButtonClick} variant="text">
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
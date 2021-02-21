import React, { useRef, useCallback, useEffect, useState } from 'react';

import {
  Box,
  Typography,
  Grid,
  makeStyles
} from '@material-ui/core';
import Navbar from '../src/components/Navbar';
import LandingSlide from '../src/components/LandingSlide';

import { useSlides } from '../src/slides';
import { useNavbar, NavbarProvider } from "../src/hooks/useNavbarTheme";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles(() => ({
  root: {
    overflow: "hidden"
  },
  introText: {
    marginTop: "15vh",
    letterSpacing: 0.5,
    fontSize: ({ fontSize }) => fontSize || 70,
    fontWeight: "bolder"
  },
  slidePage: {
    "& *": {
      color: ({ color }) => color || "inherit"
    }
  }
}));

const SlidePage = ({ index, activeStep, imageSrc, text, style, onPrevious, onNext }) => {
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
      ref={rootRef}
      className={classes.slidePage}
      onMoreButtonClick={onMoreButton}
      onPrevious={onPrevious}
      imageSrc={imageSrc}
      onNext={onNext}
    >
      <Typography className={classes.introText}>{text}</Typography> 
    </LandingSlide>
  );
};

const IntervalProgress = ({ activeStep }) => {
  const [progress, setProgress] = useState(0);
  const slides = useSlides();

  useEffect(() => setProgress(0), [activeStep]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(progress => progress + 0.10);
    }, 1);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <Box
      height="3px"
      width={`${progress}vw`}
      style={{
        background: slides[activeStep].style.color,
        position: 'absolute',
        borderRadius: 5,
        zIndex: 100,
        bottom: 0
      }}
    />
  );
};

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
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
  const slides = useSlides();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(currentStep => {
        return currentStep === slides.length -1 ? 0 : currentStep + 1;
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  const onPreviousSlide = index => () => {
    
  };

  const onNextSlide = index => () => {

  };

  return (
    <Box className={classes.root}>
      <RenderWithNavbar>
        <Grid direction="column" container>
          <Grid className={classes.landingContainer} item>
            <AutoPlaySwipeableViews index={activeStep}>
              {slides.map((props, index) => (
                <SlidePage
                  key={index}
                  index={index}
                  activeStep={activeStep}
                  onPrevious={onPreviousSlide(index)}
                  onNext={onNextSlide(index)}
                  {...props}
                />
              ))}
            </AutoPlaySwipeableViews>
            <IntervalProgress activeStep={activeStep} />
          </Grid>
          <Grid item>
            <Box my={4} height="100vh">

            </Box>
          </Grid>
        </Grid>
      </RenderWithNavbar>
    </Box>
  );
};

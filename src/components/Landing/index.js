import React, { useRef, useState, useEffect } from "react";

import { Box } from "@material-ui/core";
import SlidePage from "./SlidePage";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import { useSlides } from "../../slides";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const IntervalProgress = ({ activeStep }) => {
  const slides = useSlides();
  const ref = useRef();

  useEffect(() => {
    if (!ref) return;
    let progress = 0;

    const interval = setInterval(() => {
      progress += 0.1;

      ref.current.style.width = `${progress}vw`;
      // setProgress(progress => progress + 0.9);
    }, 5);

    return () => {
      clearInterval(interval);
    }
  }, [activeStep]);

  return (
    <Box
      ref={ref}
      height="3px"
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

const Landing = () => {
  const [activeStep, setActiveStep] = useState(0);
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

  const onPreviousSlide = index => () => setActiveStep(--index)

  const onNextSlide = index => () => setActiveStep(++index);

  return (
    <>
      <AutoPlaySwipeableViews index={activeStep}>
        {slides.map((props, index) => (
          <SlidePage
            key={index}
            index={index}
            activeStep={activeStep}
            onPrevious={onPreviousSlide(index)}
            onNext={onNextSlide(index)}
            disablePrev={index === 0}
            disableNext={activeStep === slides.length - 1}
            {...props}
          />
        ))}
      </AutoPlaySwipeableViews>
      {/* <IntervalProgress activeStep={activeStep} /> */}
    </>
  );
};

export default Landing;
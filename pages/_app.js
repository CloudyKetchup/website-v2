import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';

import gsap from "gsap";

import "./styles.css";

export default function MyApp(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  React.useEffect(() => {
    const $cursor = document.querySelector('.cursor__circle');

    const onMouseMove = (e) => {
      gsap.to($cursor, {
        x: e.clientX - 32,
        y: e.clientY - 32
      });
    };

    document.body.addEventListener("mousemove", onMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", onMouseMove);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
        <div className="cursor">
          <div className="cursor__circle">
            <svg height="64" width="64"><circle cx="32" cy="32" r="16"></circle>
            </svg>
          </div>
        </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

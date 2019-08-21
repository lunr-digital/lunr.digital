import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import Global from '../styles';

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <>
                    <Global />
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    <Component {...pageProps} />
                </>
            </ThemeProvider>
        );
    }
}

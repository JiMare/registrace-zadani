import React from 'react';
import {
    ThemeProvider as MuiThemeProvider,
    StyledEngineProvider,
} from '@mui/material';
import { ThemeProvider } from 'styled-components';

export const StyledWrapper = ({ theme, children }) => {
    return (
        <StyledEngineProvider injectFirst>
            <MuiThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </MuiThemeProvider>
        </StyledEngineProvider>
    );
};
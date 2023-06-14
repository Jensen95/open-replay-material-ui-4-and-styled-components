import React from 'react'
import { ReactNode } from 'react'
import maTheme from './themes'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as StyledCompThemeProvider } from 'styled-components'
import { StylesProvider } from '@material-ui/styles'

export const StyledComponentsThemeProvider = ({ children }: { children: ReactNode }) => {
	return <StyledCompThemeProvider theme={maTheme[0]}>{children}</StyledCompThemeProvider>
}

export const MaterialUiThemeProvider = ({ children }: { children: ReactNode }) => {
	return <MuiThemeProvider theme={maTheme[0]}>{children}</MuiThemeProvider>
}

export const MaterialUiStylesProvider = ({ children }: { children: ReactNode }) => {
	return <StylesProvider injectFirst>{children}</StylesProvider>
}

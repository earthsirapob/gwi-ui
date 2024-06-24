import React, { FC, ReactNode } from 'react'
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  ThemeOptions,
} from '@mui/material/styles'

interface ThemeProviderProps {
  themeOptions: ThemeOptions
  children: ReactNode
}

const ThemeProvider: FC<ThemeProviderProps> = ({ themeOptions, children }) => {
  const theme = createTheme(themeOptions)
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider

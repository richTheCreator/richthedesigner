import React, { useState, useContext, useCallback, createContext } from 'react'
import { ThemeProvider as BaseThemeProvider } from 'styled-components'
import merge from 'lodash.merge'
import get from 'lodash.get'
import baseTheme from './theme'

const modes = ['light', 'dark']

// merge the color mode with the base theme
// to create a new theme object
const getTheme = (mode) =>
  merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors)
  })

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  //   const [themeString, setThemeString] = useState('light')

  const [mode, setMode] = useState(modes[0])

  //   const themeObject = themeString === 'dark' ? darkTheme : lightTheme
  const theme = getTheme(mode)

  console.log('appliedTheme---------', theme)

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <BaseThemeProvider theme={theme}>{children}</BaseThemeProvider>
    </ThemeContext.Provider>
  )
}

function useTheme() {
  const context = useContext(ThemeContext)
  //err handling
  if (!context) throw new Error('useTheme must be used within a ThemeProvider')

  // ref to state in context provider
  const { mode, setMode } = context

  // callback that uses the state fn to set theeme
  const toggleTheme = useCallback(
    (themeOption) => {
      console.log('passedVar----', themeOption)
      //   if (mode === 'light') setMode('dark')
      //   else if (mode === 'dark') setMode('light')
      setMode(themeOption)
    },
    [mode]
  )
  return {
    theme: mode,
    toggleTheme
  }
}

export { ThemeProvider, useTheme }

import React, { useState } from 'react'

import { HelmetProvider } from 'react-helmet-async'
import merge from 'lodash.merge'
import get from 'lodash.get'
import Layout from './src/components/Layout'
import baseTheme from './static/styles/theme'
import { GlobalStyle } from './src/components/GlobalStyles'
import { ThemeProvider } from './static/styles/theme-context'

// the full theme object

export const wrapRootElement = ({ element }) => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <GlobalStyle />
        {element}
      </ThemeProvider>
    </HelmetProvider>
  )
}

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export const onPreRouteUpdate = ({ location, prevLocation }) => {
  console.log('Gatsby started to change location to', location.pathname)
  console.log(
    'Gatsby started to change location from',
    prevLocation ? prevLocation.pathname : null
  )
}

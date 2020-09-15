import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './src/components/Layout'
import { GlobalStyle } from './src/components/GlobalStyles'
import { ThemeProvider } from './static/styles/theme-context'

export const wrapRootElement = ({ element }) => {
  const helmetContext = {}

  return (
    <HelmetProvider context={helmetContext}>
      <ThemeProvider>
        <GlobalStyle />
        {element}
      </ThemeProvider>
    </HelmetProvider>
  )
}

// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

// export const onRenderBody = (
//   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
//   pluginOptions
// ) => {
//   const helmet = Helmet.renderStatic()
//   setHtmlAttributes(helmet.htmlAttributes.toComponent())
//   setBodyAttributes(helmet.bodyAttributes.toComponent())
//   setHeadComponents([
//     helmet.title.toComponent('Testing new title'),
//     helmet.link.toComponent(),
//     helmet.meta.toComponent(),
//     helmet.noscript.toComponent(),
//     helmet.script.toComponent(),
//     helmet.style.toComponent()
//   ])
// }

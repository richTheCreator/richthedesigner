// import React from 'react'
// import PropTypes from 'prop-types'
// import { ThemeProvider } from 'styled-components'
// import theme from '../../../static/styles/theme'
// import { GlobalStyle } from '../../components/GlobalStyles'
// import { ProductPageTemplate } from '../../templates/product-details'
//
// const ProductPagePreview = ({ entry, widgetFor, getAsset }) => {
//   const data = entry.getIn(['data']).toJS()
//   console.log('DATA------', data)
//   return (
//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
//       <ProductPageTemplate
//         title={data.title}
//         // metaDescription={entry.getIn(['data', 'meta_description'])}
//         // strain={entry.getIn(['data', 'strain'])}
//         // category={entry.getIn(['data', 'category'])}
//         // thc={entry.getIn(['data', 'thc'])}
//         // cbd={entry.getIn(['data', 'cbd'])}
//         // html={widgetFor('body')}
//       />
//     </ThemeProvider>
//   )
// }
//
// ProductPagePreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func
//   }),
//   widgetFor: PropTypes.func
// }
//
// export default ProductPagePreview

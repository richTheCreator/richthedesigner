import React from 'react'
import PropTypes from 'prop-types'
import { ProductPageTemplate } from '../../templates/product-details'

const ProductPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  console.log('DATA------', data)
  return (
    <ProductPageTemplate
      title={data.title}
      product_image={data.product_image}
      category={data.category}
      strain={data.strain}
      thc={data.thc}
      cbd={data.cbd}
      weight={data.weight}
      coa_link={data.coa_link}
    />

  )
}

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default ProductPagePreview

import React from 'react'

import Layout from '../../components/Layout'
import ProductResults from '../../components/ProductResults'
import SEO from '../../components/SEO/SEO'
import { SectionWrapper, SectionMax } from '../../components/Containers'

export default class ProductResultsPage extends React.Component {
  render() {
    return (
      <>
        <SEO />
        <ProductResults />
      </>
    )
  }
}

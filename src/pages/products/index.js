
import React from 'react'

import Layout from '../../components/Layout'
import ProductResults from '../../components/ProductResults'
import SEO from '../../components/SEO/SEO'

export default class ProductResultsPage extends React.Component {
  render () {
    return (
      <Layout>
        <SEO />
        <section className='section'>
          <div className='container'>
            <div className='content'>
              <ProductResults />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

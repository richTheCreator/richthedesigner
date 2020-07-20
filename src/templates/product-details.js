import React from 'react'
import {
  // Link,
  graphql
} from 'gatsby'
import Hero from './ProductDetails/Hero'
import Description from './ProductDetails/Description'
import Footer from '../components/Footer'
import SEO from '../components/SEO/SEO'

const ProductPageTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <>
      <SEO
        title={frontmatter.title}
        desc={frontmatter.meta_description}
      />
      <Hero frontmatter={frontmatter} />
      <Description content={html} />
    </>
  )
}

export default ProductPageTemplate

export const pageQuery = graphql`
  query ProductPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "product-details" } }) {
      html
      frontmatter {
        title
        meta_description
        category
        weight
        coa_link
        strain
        thc
        cbd
        product_image {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

import React from 'react'
import {
  // Link,
  graphql
} from 'gatsby'
import Hero from './ProductDetails/Hero'
import Description from './ProductDetails/Description'
import Footer from '../components/Footer'
import SEO from '../components/SEO/SEO'

const ProductPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  return (
    <>
      <SEO
        title={frontmatter.name}
        desc={frontmatter.meta_description}
      />
      <Hero hero={frontmatter.hero} />
      <Description content={html} />
      <Footer/>
    </>
  )
}

export default ProductPage

export const pageQuery = graphql`
  query ProductPage {
    markdownRemark(frontmatter: { templateKey: { eq: "product-details" } }) {
      html
      frontmatter {
        name
        meta_description
        category
        weight
        coa_link
        strain
        THC
        CBD
        hero {
          title
          button_text
          workout__image {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

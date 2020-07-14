import React from 'react'
import {
  // Link,
  graphql
} from 'gatsby'
import Hero from './ProductDetails/Hero'
import Footer from '../components/Footer'
import SEO from '../components/SEO/SEO'

const ProductPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return (
    <>
      <SEO
        title={'Placeholder Page'}
        desc={'Placeholder description'}
      />
      <Hero hero={frontmatter.hero} />
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

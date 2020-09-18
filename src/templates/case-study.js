import React from 'react'
import {
  // Link,
  graphql
} from 'gatsby'
import { Description, Hero } from './CaseStudy/'
import SEO from '../components/SEO/SEO'

const ProductPage = ({ data, location, pageContext }) => {
  const { frontmatter, body } = data.products
  return (
    <>
      <SEO />
      <Hero frontmatter={frontmatter} />
      <div className='noise'></div>
    </>
  )
}

export default ProductPage

export const pageQuery = graphql`
  query ProductPageTemplate($id: String!) {
    products: mdx(id: { eq: $id }) {
      body
      frontmatter {
        cover_image {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        theme
        title
        project {
          focus
          blurb
          challenge {
            label
            description
          }
          skills {
            skill
          }
        }
      }
    }
  }
`

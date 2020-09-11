import React from 'react'
import {
  // Link,
  graphql
} from 'gatsby'
import SEO from '../components/SEO/SEO'
import Policies from './Policiespage'

const ProductPage = ({ data }) => {
  console.log('data', data)
  const { frontmatter, body } = data.mdx
  return (
    <>
      <SEO />
      <Policies hero={frontmatter.hero} content={body} />
    </>
  )
}

export default ProductPage

export const pageQuery = graphql`
  query Policies {
    mdx(frontmatter: { templateKey: { eq: "policies" } }) {
      body
      frontmatter {
        hero {
          heading
        }
      }
    }
  }
`

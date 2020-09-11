import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/SEO/SEO'
import { Heading2 } from '../components/Typography'
import { Hero, Certificates } from '../templates/LabResults'
const IndexPage = ({ data }) => {
  const { edges: posts } = data.products
  const { frontmatter } = data.page

  return (
    <>
      <SEO />
      <Hero hero={frontmatter.hero} />
      <Certificates products={posts} />
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query LabResults {
    page: mdx(frontmatter: { templateKey: { eq: "lab-results" } }) {
      frontmatter {
        hero {
          heading
          description
          backgroundImg {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 800, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    products: allMdx(
      sort: { order: DESC, fields: [frontmatter___category] }
      filter: { frontmatter: { templateKey: { eq: "product-details" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            coa_link {
              name
              extension
              publicURL
            }
          }
        }
      }
    }
  }
`

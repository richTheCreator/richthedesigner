import React from 'react'
import { graphql } from 'gatsby'
import { Hero, Work } from './Homepage'
import SEO from '../components/SEO/SEO'
const IndexPage = ({ data }) => {
  const { frontmatter } = data.page
  const { edges: companies } = data.companies

  console.log('companies', companies)
  return (
    <>
      <SEO />
      <Hero hero={frontmatter.hero} />
      <Work companies={companies} />
      <div style={{ height: '100vh' }}> placeholder </div>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomePage {
    page: mdx(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        hero {
          heading
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
    companies: allMdx(
      sort: { order: DESC, fields: [frontmatter___category] }
      filter: { frontmatter: { templateKey: { eq: "company-profile" } } }
    ) {
      edges {
        node {
          frontmatter {
            company
          }
        }
      }
    }
  }
`
// 3147b4

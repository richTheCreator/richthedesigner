import React from 'react'
import { graphql } from 'gatsby'
import { Hero, Work, Resume } from './Homepage'
import SEO from '../components/SEO/SEO'
const IndexPage = ({ data }) => {
  const { frontmatter } = data.page
  const { edges: companies } = data.companies

  console.log('resume', frontmatter.resume)
  return (
    <>
      <SEO />
      <Hero hero={frontmatter.hero} />
      <Work companies={companies} />
      <Resume resume={frontmatter.resume} />
      <div className='noise'></div>
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
        resume {
          company
          year
          title
          description
        }
      }
    }
    companies: allMdx(
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

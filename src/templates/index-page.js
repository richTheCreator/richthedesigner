import React from 'react'
import {
  graphql
} from 'gatsby'
import Footer from '../components/Footer'
import Hero from './Homepage/Hero'
import SEO from '../components/SEO/SEO'
const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <>
      <SEO />
      <Hero hero={frontmatter.hero}/>
    </>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomePage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        hero {
          subtitle
          title
        }
      }
    }
  }
`

import React from 'react'
import { graphql } from 'gatsby'
import Footer from '../components/Footer'
import {
  Hero,
  Products,
  RogueValley,
  Values,
  Farm,
  SupplyChain
} from './Homepage'
import SEO from '../components/SEO/SEO'
import { Body1 } from '../components/Typography'
const StarterKit = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark

  console.log('starter-kit', frontmatter)

  return (
    <>
      <SEO
        pathname={location.pathname}
        title={frontmatter.title}
        desc={frontmatter.metaDescription}
        banner={frontmatter.product_image.childImageSharp.fluid.src}
      />
      <Body1>{frontmatter.title}</Body1>
    </>
  )
}

export default StarterKit

export const pageQuery = graphql`
  query StarterKit {
    markdownRemark(frontmatter: { templateKey: { eq: "starter-kit" } }) {
      html
      frontmatter {
        product_image {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        meta_description
        title
        included {
          title
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
  }
`

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
        banner={frontmatter.starter_img.image.childImageSharp.fluid.src}
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
        starter_img {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        title
        meta_description
        includes {
          item
          description
        }
      }
    }
  }
`

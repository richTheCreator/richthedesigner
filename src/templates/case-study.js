import React from 'react'
import {
  // Link,
  graphql
} from 'gatsby'
import { Description, Hero } from './CaseStudy/'
import SEO from '../components/SEO/SEO'

const ProductPage = ({ data, location, pageContext }) => {
  const { frontmatter, body } = data.mdx
  const desc = `A case study for ${frontmatter.title} by Richard Morales`
  const title = `${frontmatter.title} - A Case Study`
  return (
    <>
      <SEO
        pathname={location.pathname}
        title={title}
        desc={desc}
        banner={frontmatter.cover_image.childImageSharp.fluid.src}
      />
      <Hero frontmatter={frontmatter} />
      <Description
        pageContext={pageContext}
        blogImages={frontmatter.project.blogImages}
        content={body}
      />
      <div className='noise'></div>
    </>
  )
}

export default ProductPage

export const pageQuery = graphql`
  query CasetudyTemplate($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        cover_image {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 100) {
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
          blogImages {
            image {
              childImageSharp {
                fluid(maxWidth: 1800, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            alt
          }
        }
      }
    }
  }
`

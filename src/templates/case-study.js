import React, { useEffect } from 'react'
import {
  // Link,
  graphql
} from 'gatsby'
import { Description, Hero } from './CaseStudy/'
import Footer from '../components/Footer'
import SEO from '../components/SEO/SEO'
import { useTheme } from '../../static/styles/theme-context'

const ProductPage = ({ data, location, pageContext }) => {
  const { theme, toggleTheme } = useTheme()
  useEffect(() => {
    toggleTheme(frontmatter.theme)
  }, [])
  const { frontmatter, body } = data.products
  return <>Case Study</>
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
      }
    }
  }
`

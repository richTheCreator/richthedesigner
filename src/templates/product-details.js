import React from 'react'
import {
  // Link,
  graphql
} from 'gatsby'
import { Description, Hero } from './ProductDetails/'
import Footer from '../components/Footer'
import SEO from '../components/SEO/SEO'

export const ProductPageTemplate = ({
  title,
  metaDescription,
  productImage,
  category,
  cbd,
  thc,
  html,
  weights,
  pathname
}) => {
  return (
    <>
      <SEO
        pathname={pathname}
        title={title}
        desc={metaDescription}
        banner={productImage.childImageSharp.fluid.src}
      />
      <Hero
        title={title}
        productImage={productImage.childImageSharp.fluid}
        category={category}
        cbd={cbd}
        thc={thc}
        weights={weights}
      />
      <Description content={html} />
    </>
  )
}

const ProductPage = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark
  console.log('coa------', frontmatter.coa_link)
  return (
    <ProductPageTemplate
      pathname={location.pathname}
      title={frontmatter.title}
      metaDescription={frontmatter.meta_description}
      productImage={frontmatter.product_image}
      category={frontmatter.category}
      cbd={frontmatter.cbd}
      thc={frontmatter.thc}
      weights={frontmatter.weights}
      coaLink={frontmatter.coa_link}
      html={html}
    />
  )
}

export default ProductPage

export const pageQuery = graphql`
  query ProductPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_description
        category
        weights {
          value
          metric
        }
        coa_link {
          name
          extension
          publicURL
        }
        thc
        cbd
        product_image {
          childImageSharp {
            fluid(maxWidth: 800, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

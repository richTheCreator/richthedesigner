import React from 'react'
import {
  // Link,
  graphql
} from 'gatsby'
import Hero from './ProductDetails/Hero'
import Description from './ProductDetails/Description'
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
  weights
}) => {
  return (
    <>
      <SEO
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

const ProductPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  console.log('data----', data)
  return (
    <ProductPageTemplate
      title={frontmatter.title}
      metaDescription={frontmatter.meta_description}
      productImage={frontmatter.product_image}
      category={frontmatter.category}
      cbd={frontmatter.cbd}
      thc={frontmatter.thc}
      weights={frontmatter.weights}
      html={html}
    />
  )
}

export default ProductPage

export const pageQuery = graphql`
  query ProductPageTemplate ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        meta_description
        category
        weights {
          weight {
            value
            metric
          }
        }
        coa_link
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

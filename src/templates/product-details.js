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
  strain,
  cbd,
  thc,
  html,
  weight
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
        strain={strain}
        cbd={cbd}
        thc={thc}
        weight={weight}
      />
      <Description content={html} />
    </>
  )
}

const ProductPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <ProductPageTemplate
      title={frontmatter.title}
      metaDescription={frontmatter.meta_description}
      productImage={frontmatter.product_image}
      category={frontmatter.category}
      strain={frontmatter.strain}
      cbd={frontmatter.cbd}
      thc={frontmatter.thc}
      weight={frontmatter.weight}
      html={html}
    />
  )
}

export default ProductPage

export const pageQuery = graphql`
  query ProductPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "product-details" } }) {
      html
      frontmatter {
        title
        meta_description
        category
        weight
        coa_link
        strain
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

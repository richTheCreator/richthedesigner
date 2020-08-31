import React from 'react'
import { Col } from 'react-flexbox-grid'
import { useStaticQuery, graphql } from 'gatsby'
import { Body1 } from '../Typography'
import { SectionMax, SectionWrapper } from '../Containers'
import { Title } from './styles'

const Shipping = ({ children }) => {
  const {
    markdownRemark: {
      frontmatter: {
        shipping: { description }
      }
    }
  } = useStaticQuery(query)

  return (
    <SectionWrapper bg='black' pt={0}>
      <SectionMax m='auto!important'>
        <Col xs>
          <Title mb={3} mt={0}>
            Shipping
          </Title>
          <Body1 color='ivory'> {description} </Body1>
        </Col>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Shipping }

const query = graphql`
  query shippingInfo {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      fields {
        slug
      }
      frontmatter {
        shipping {
          description
        }
      }
    }
  }
`

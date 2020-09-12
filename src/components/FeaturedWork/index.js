import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { StyledFileIcon, Container, ProductImage } from './styles'
import { LinkButton } from '../Button'
import { Heading5 } from '../Typography'
const FeaturedWork = ({
  node: {
    frontmatter: { company, cover_img }
  }
}) => {
  return (
    <ProductImage
      height={['50vh']}
      mb={4}
      fluid={cover_img.childImageSharp.fluid}
    >
      <Container xs={12}>
        <Heading5
          mb={2}
          mt={2}
          color='ivory'
          lineHeight='90%'
          textAlign='right'
          fontFamily='headingOutline'
          opacity='25%!important'
        >
          {company}
        </Heading5>
        <Heading5
          mb={2}
          mt={2}
          color='ivory'
          lineHeight='90%'
          textAlign='right'
          fontFamily='headingOutline'
          opacity='25%!important'
        >
          {company}
        </Heading5>
        <Heading5
          mb={2}
          mt={2}
          color='ivory'
          lineHeight='90%'
          textAlign='right'
          fontFamily='headingOutline'
          opacity='25%!important'
        >
          {company}
        </Heading5>
        <Heading5
          mb={2}
          mt={2}
          color='ivory'
          textAlign='right'
          fontFamily='heading'
          opacity='100%!important'
        >
          {company}
        </Heading5>
      </Container>
    </ProductImage>
  )
}

export { FeaturedWork }

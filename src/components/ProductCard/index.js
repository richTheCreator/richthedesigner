import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'gatsby'
import { Body1, formattedDescription, Heading5 } from '../Typography'
import {
  ProductImage,
  BaseBorder,
  InfoContainer,
  Wrapper,
  StyledLogo,
  LogoContainer
} from './styles'

const ProductCard = ({
  post: {
    id,
    fields,
    frontmatter: { title, category, thc, cbd, product_image }
  }
}) => {
  return (
    <Col>
      <Link to={fields.slug} style={{ textDecoration: 'none' }}>
        <ProductImage fluid={product_image.childImageSharp.fluid} />
        <Wrapper bg='ivory'>
          <Heading5 p={2} m={0}>
            {title}
          </Heading5>
          <InfoContainer>
            <Col
              xs={8}
              style={{
                padding: '0px'
              }}
            >
              <BaseBorder color='black' borderWidth='0px 2px 2px 0px'>
                {category}
              </BaseBorder>
              <BaseBorder color='black' borderWidth='0px 2px 2px 0px'>
                {thc}% THC
              </BaseBorder>
              <BaseBorder color='black' borderWidth='0px 2px 0px 0px'>
                {cbd}% CBD
              </BaseBorder>
            </Col>
            <LogoContainer xs={4}>
              <StyledLogo fillColor='black' />
            </LogoContainer>
          </InfoContainer>
        </Wrapper>
      </Link>
    </Col>
  )
}

export { ProductCard }

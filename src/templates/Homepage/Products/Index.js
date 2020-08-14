import React from 'react'
import { SectionWrapper, SectionMax } from '../../../components/Containers'
import { Button } from '../../../components'
import { Heading2, Body1 } from '../../../components/Typography'
import useSiteMetadata from '../../../components/SiteMetadata'
import { Row, Col } from 'react-flexbox-grid'
import { CategoryImage } from './styles'

const Products = ({ products: { heading, description, productImages } }) => {
  const { menuLinks } = useSiteMetadata()

  return (
    <SectionWrapper bg='ivory'>
      <SectionMax center='xs' style={{ margin: 'auto' }}>
        <Col xs={12}>
          <Heading2 mt={0} mb={3} textAlign={['left', 'center']}>
            {heading}
          </Heading2>
          <Body1 textAlign={['left', 'center']}>{description}</Body1>
          <Button
            bg={'transparent'}
            hasBorder
            mt={4}
            mb={6}
            url={menuLinks[0].link}
          >
            VIEW PRODUCTS
          </Button>
          <Row center={'xs'}>
            {productImages.map((images) => (
              <Col lg={5} xs={12}>
                <CategoryImage
                  mb={3}
                  fluid={images.image.childImageSharp.fluid}
                  height={['360px', '460px']}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </SectionMax>
    </SectionWrapper>
  )
}

export default Products

import React from 'react'
import { SectionWrapper, SectionMax } from '../../../components/Containers'
import { Button } from '../../../components'
import { Heading2, Body2 } from '../../../components/Typography'
import useSiteMetadata from '../../../components/SiteMetadata'
import { categoryStyles } from './styles'
import PreviewCompatibleImage from '../../../components/PreviewCompatibleImage'
import { Row, Col } from 'react-flexbox-grid'

const Products = ({ products: { heading, description, productImages } }) => {
  const { menuLinks } = useSiteMetadata()

  return (
    <SectionWrapper bg='ivory'>
      <SectionMax center='xs' style={{ margin: 'auto' }}>
        <Col xs={12}>
          <Heading2 mt={0} mb={3} textAlign={['left', 'center']}>
            {heading}
          </Heading2>
          <Body2 textAlign={['left', 'center']} maxWidth={'1000px'} m='auto'>
            {description}
          </Body2>
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
                <PreviewCompatibleImage
                  imageInfo={images}
                  style={categoryStyles}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Products }

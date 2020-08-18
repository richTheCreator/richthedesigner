import React from 'react'
import {
  GridParent,
  SectionWrapper,
  SectionMax
} from '../../../components/Containers'
import { Row, Col } from 'react-flexbox-grid'
import { Button } from '../../../components'
import useSiteMetadata from '../../../components/SiteMetadata'
import {
  HeroImage,
  HeroText,
  HeroTextOutline,
  HeroTextContainer,
  TextGridArea,
  ImageGridArea,
  BackgroundContainer
} from './styles'
import { Body1 } from '../../../components/Typography'

const Hero = ({
  hero: {
    heading,
    description,
    backgroundImg: { alt, image }
  }
}) => {
  const { menuLinks } = useSiteMetadata()

  return (
    <BackgroundContainer fluid={image.childImageSharp.fluid}>
      <SectionWrapper top='xs' width='100%'>
        <SectionMax style={{ margin: 'auto' }} maxWidth={0}>
          <Col lg={6} xs={12}>
            <HeroText fontSize={['55px', '72px']} mt={3} mb={3} color='black'>
              {heading}
            </HeroText>
            <Body1 maxWidth={['60%', '60%', '60%', '100%']}>
              {description}
            </Body1>
            <Button bg={'ivory'} mt={4} url={menuLinks[0].link}>
              VIEW PRODUCTS
            </Button>
          </Col>
        </SectionMax>
      </SectionWrapper>
    </BackgroundContainer>
  )
}

export { Hero }

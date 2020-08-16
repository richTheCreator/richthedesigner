import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { SectionWrapper, SectionMax } from '../../../components/Containers'
import { Button } from '../../../components'
import {
  Heading2,
  Body1,
  Overline,
  formattedDescription
} from '../../../components/Typography'
import { BackgroundContainer } from './style'
import useSiteMetadata from '../../../components/SiteMetadata'
import HempSVG from '../../../img/svg/hemp_flower.svg'
import SunSVG from '../../../img/svg/sun_grown.svg'

const RogueValley = ({
  rogueValley: {
    heading,
    description,
    backgroundImg: { alt, image }
  }
}) => {
  return (
    <BackgroundContainer fluid={image.childImageSharp.fluid}>
      <SectionWrapper top='xs'>
        <SectionMax style={{ margin: 'auto' }}>
          <Row between='xs'>
            <Col lg={5} md={6} sm={12}>
              <Heading2
                mb={0}
                mt={0}
                textAlign='left'
                color='ivory'
                textTransform='uppercase'
              >
                {heading}
              </Heading2>
              <Row style={{ paddingTop: '16px' }}>
                <Col style={{ paddingRight: '16px' }}>
                  <SunSVG />
                  <Overline> Sun Grown </Overline>
                </Col>
                <Col>
                  <HempSVG />
                  <Overline pb={4}> High Quality </Overline>
                </Col>
              </Row>
            </Col>
            <Col lg={7} md={6} sm={12}>
              <Body1
                dangerouslySetInnerHTML={{
                  __html: formattedDescription(description)
                }}
                textAlign='left'
                color={'ivory'}
                pb={['140px', '200px']}
              />
            </Col>
          </Row>
        </SectionMax>
      </SectionWrapper>
    </BackgroundContainer>
  )
}

export { RogueValley }

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
import { valueStyles } from './style'
import useSiteMetadata from '../../../components/SiteMetadata'
import HempSVG from '../../../img/svg/hemp_flower.svg'
import SunSVG from '../../../img/svg/sun_grown.svg'
import PreviewCompatibleImage from '../../../components/PreviewCompatibleImage'

const SupplyChain = ({
  supplyChain: { heading, description, supplyImages }
}) => {
  return (
    <SectionWrapper top='xs' bg={'sage'}>
      <SectionMax style={{ margin: 'auto' }}>
        <Row between='xs'>
          <Col lg={4} sm={12}>
            <Heading2
              mb={0}
              mt={0}
              textAlign='left'
              color='ivory'
              textTransform='uppercase'
            >
              {heading}
            </Heading2>
          </Col>
          <Col lg={8} sm={12}>
            <Body1
              dangerouslySetInnerHTML={{
                __html: formattedDescription(description)
              }}
              textAlign='left'
              color={'ivory'}
            />
          </Col>
        </Row>
        <Row style={{ margin: 'auto', width: '100%' }} between='xs'>
          {supplyImages.map((images) => (
            <Col lg={3} md={4} xs={12}>
              <PreviewCompatibleImage imageInfo={images} style={valueStyles} />
            </Col>
          ))}
        </Row>
      </SectionMax>
    </SectionWrapper>
  )
}

export { SupplyChain }

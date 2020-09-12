import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { SectionWrapper, SectionMax } from '../../../components/Containers'
import { FeaturedWork } from '../../../components'
import { Heading3 } from '../../../components/Typography'
const Work = ({ companies }) => {
  console.log('companies----', companies)
  return (
    <SectionWrapper bg='tan'>
      <SectionMax maxWidth='1800px' style={{ margin: 'auto' }}>
        <Row style={{ width: '100%' }} center='xs'>
          <Heading3 fontFamily='headingOutline'>Case studies</Heading3>
        </Row>
        <Row style={{ width: '100%' }}>
          {companies &&
            companies.map(({ node }) => (
              <Col xs={12} md={6} lg={3}>
                <FeaturedWork node={node} />
              </Col>
            ))}
        </Row>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Work }

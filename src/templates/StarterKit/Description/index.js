import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Heading6, Body2 } from '../../../components/Typography'
import { SectionMax, SectionWrapper } from '../../../components/Containers'
import { ValueText, Title, ProductImg } from './styles'
import Content, { HTMLContent } from '../../../components/Content'

const Description = ({ included }) => {
  return (
    <SectionWrapper bg={'black'} className='PDP-Description' pt={[4, 4, 0, 0]}>
      <SectionMax style={{ justifyContent: 'center', margin: 'auto' }}>
        <Col xs>
          <Title mb={3} mt={0}>
            Included items
          </Title>
        </Col>
        <Row style={{ width: '100%' }}>
          {included &&
            included.map((d) => (
              <Col lg={4} md={4} sm={6} xs={12}>
                <ValueText color='ivory'> {d.title} </ValueText>
                <ProductImg
                  fluid={d.backgroundImg.image.childImageSharp.fluid}
                  height={'250px'}
                />
                <Body2 color='ivory'> {d.description}</Body2>
              </Col>
            ))}
        </Row>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Description }

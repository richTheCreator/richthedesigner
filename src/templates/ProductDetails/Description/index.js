import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Heading6, Body2 } from '../../../components/Typography'
import { SectionMax, SectionWrapper } from '../../../components/Containers'
import { ValueText, Title } from './styles'
import Content, { HTMLContent } from '../../../components/Content'

const Description = ({ program, content, contentComponent, details }) => {
  const PostContent = HTMLContent || Content

  return (
    <SectionWrapper bg={'black'} className='PDP-Description'>
      <SectionMax style={{ justifyContent: 'center', margin: 'auto' }}>
        <Col xs>
          <Title mb={3} mt={0}>
            Description
          </Title>
        </Col>
        <Row style={{ width: '100%' }}>
          {details &&
            details.info.map((d) => (
              <Col xs style={{ minWidth: '270px' }}>
                <ValueText color='ivory'> {d.label} </ValueText>
                {d.items.map((i) => (
                  <Body2 color='ivory'> {i.item}</Body2>
                ))}
              </Col>
            ))}
        </Row>
        <Col xs={12} lg={10}>
          <PostContent content={content} />
        </Col>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Description }

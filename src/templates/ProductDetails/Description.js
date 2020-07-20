
import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { H3 } from '../../components/Typography'
import { SectionWrapper, SectionMax } from '../../components/Containers'
import Content, { HTMLContent } from '../../components/Content'

const Description = ({ program, content, contentComponent }) => {
  const PostContent = HTMLContent || Content

  return (
    <SectionWrapper>
      <SectionMax style={{ justifyContent: 'center', margin: 'auto' }}>
        <Col xs={8}>
          <Col sm={12} lg={4}>
            <H3 mt={0} mr={3}>
            Description
            </H3>
          </Col>
          <Col sm={12} lg={8}>
            <PostContent content={content} />
          </Col>
        </Col>
      </SectionMax>
    </SectionWrapper>
  )
}

export default Description

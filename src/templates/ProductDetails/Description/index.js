import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Heading4 } from '../../../components/Typography'
import { SectionWrapper, SectionMax } from '../../../components/Containers'
import Content, { HTMLContent } from '../../../components/Content'

const Description = ({ program, content, contentComponent }) => {
  const PostContent = HTMLContent || Content

  return (
    <SectionWrapper bg={'black'} className='PDP-Description'>
      <SectionMax style={{ justifyContent: 'center', margin: 'auto' }}>
        <Col xs={12} lg={10}>
          <PostContent content={content} />
        </Col>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Description }

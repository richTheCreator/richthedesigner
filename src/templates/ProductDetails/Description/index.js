import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Heading4 } from '../../../components/Typography'
import { SectionMax } from '../../../components/Containers'
import { StyledWrapper } from './styles'
import Content, { HTMLContent } from '../../../components/Content'

const Description = ({ program, content, contentComponent }) => {
  const PostContent = HTMLContent || Content

  return (
    <StyledWrapper bg={'ivory'} className='PDP-Description'>
      <SectionMax style={{ justifyContent: 'center', margin: 'auto' }}>
        <Col xs={12} lg={10}>
          <PostContent content={content} />
        </Col>
      </SectionMax>
    </StyledWrapper>
  )
}

export { Description }

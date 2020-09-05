import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Heading6, Body2, Heading2 } from '../../components/Typography'
import { SectionMax, SectionWrapper } from '../../components/Containers'
import Content, { HTMLContent } from '../../components/Content'

const Policies = ({ content, hero }) => {
  const PostContent = HTMLContent || Content

  return (
    <SectionWrapper bg={'ivory'} className='PDP-Description' pt={[4, 4, 0, 0]}>
      <SectionMax style={{ justifyContent: 'center', margin: 'auto' }}>
        <Col xs={12} lg={10}>
          <Heading2 textAlign='center' color='sage' mb={0}>
            {hero.heading}
          </Heading2>
        </Col>
        <Col xs={12} lg={10}>
          <PostContent content={content} />
        </Col>
      </SectionMax>
    </SectionWrapper>
  )
}

export default Policies

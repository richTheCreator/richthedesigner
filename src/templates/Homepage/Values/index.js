import React from 'react'
import { SectionWrapper, SectionMax } from '../../../components/Containers'
import {
  Heading2,
  Body1,
  Body2,
  formattedDescription
} from '../../../components/Typography'
import { Col } from 'react-flexbox-grid'
import { ValueText, ValueContainer, peekStyles } from './styles'
import PreviewCompatibleImage from '../../../components/PreviewCompatibleImage'

const Values = ({
  etcValues: { heading, description, values, peeksImage }
}) => {
  return (
    <SectionWrapper bg='ivory' style={{ position: 'relative' }}>
      <SectionMax start='xs' between='xs' style={{ margin: 'auto' }}>
        <Col lg={5} xs={12}>
          <Heading2 mt={0} mb={3} textAlign={'left'}>
            {heading}
          </Heading2>
          <Body1
            color='black'
            textAlign={'left'}
            dangerouslySetInnerHTML={{
              __html: formattedDescription(description)
            }}
          />
        </Col>
        <Col lg={6} xs={12}>
          {values.map((value) => (
            <ValueContainer>
              <ValueText maxWidth='fit-content' mb='0'>
                {value.value}
              </ValueText>
              <Body2 color='darkGrey'>{value.description}</Body2>
            </ValueContainer>
          ))}
        </Col>
        <PreviewCompatibleImage imageInfo={peeksImage} style={peekStyles} />
      </SectionMax>
    </SectionWrapper>
  )
}

export { Values }

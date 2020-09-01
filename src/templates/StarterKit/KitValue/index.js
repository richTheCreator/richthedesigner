import React, { useState } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import {
  Heading4,
  Button as ButtonText,
  Caption,
  Body2,
  Heading6
} from '../../../components/Typography'
import { Button, LinkButton } from '../../../components/Button'
import { SectionMax, SectionWrapper } from '../../../components/Containers'
import { ProductImg, TextContainer, Title, Wrapper } from './styles'

const KitValue = ({ image, callouts }) => {
  return (
    <Wrapper bg='black'>
      <SectionWrapper pb={0} pt={0}>
        <SectionMax bg='black' m='auto!important'>
          <Col xs>
            <Title mb={3} mt={0}>
              Not just a kit, a solution
            </Title>
          </Col>
        </SectionMax>
      </SectionWrapper>
      <SectionWrapper pl={[0, 0, 5, 6]} pr={[0, 0, 5, 6]} pt={0}>
        <SectionMax
          style={{ position: 'relative' }}
          justifyContent={['center', 'center', 'flex-end', 'flex-end']}
          m='auto!important'
          p={[0, 4]}
        >
          <ProductImg
            fluid={image.childImageSharp.fluid}
            height={['300px', '300px', '100%', '100%']}
            position={[
              'relative',
              'relative',
              'absolute !important',
              'absolute !important'
            ]}
            width={['100%', '100%', '50%', '50%']}
          />
          <TextContainer
            bg={'ivory'}
            lg={8}
            md={8}
            xs={11}
            pt={4}
            pb={4}
            pl={[3, 3, 4, 4]}
            pr={[3, 3, 4, 4]}
            mt={['-50px', '-50px', 0, 0]}
          >
            {callouts.map((c) => (
              <>
                <Heading6>{c.value}</Heading6>
                <Body2 mb={4}>{c.description}</Body2>
              </>
            ))}
          </TextContainer>
        </SectionMax>
      </SectionWrapper>
    </Wrapper>
  )
}

export { KitValue }

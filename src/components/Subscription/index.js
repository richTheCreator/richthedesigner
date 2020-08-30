import React, { useState } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Heading4, Button as ButtonText, Caption } from '..//Typography'
import { Button, LinkButton } from '../Button'
import { SectionMax, SectionWrapper } from '../Containers'
import {
  ProductImg,
  TextContainer,
  Banner,
  StyledFileIcon,
  BaseBorder
} from './styles'

const Subscription = ({
  title,
  productImage,
  category,
  cbd,
  thc,
  weights,
  coa_link
}) => {
  return (
    <SectionWrapper
      bg='black'
      pl={[0, 0, 5, 6]}
      pr={[0, 0, 5, 6]}
      pt={[0, 0, 5, 6]}
      pb={[0, 0, 5, 6]}
    >
      <SectionMax
        style={{ position: 'relative' }}
        justifyContent={['center', 'center', 'flex-end', 'flex-end']}
        m='auto!important'
        p={[0, 4]}
      >
        <ProductImg
          fluid={productImage}
          height={['300px', '300px', '460px', '460px']}
          position={[
            'relative',
            'relative',
            'absolute !important',
            'absolute !important'
          ]}
          width={['100%', '100%', '80%', '80%']}
        />
        <TextContainer
          bg={'ivory'}
          lg={5}
          md={6}
          xs={11}
          pt={4}
          pb={4}
          pl={[2, 2, 4, 4]}
          pr={[2, 2, 4, 4]}
          mt={['-50px', '-50px', 0, 0]}
        >
          <Banner bg='sage'>
            <Caption
              textAlign='center'
              color='ivory'
              p={'0px !important'}
              mt={'6px !important'}
            >
              Save with a subscription
            </Caption>
          </Banner>
          <Heading4 mb={2} mt={2} textAlign='center' color='black'>
            {title}
          </Heading4>
          <Row style={{ width: '100%' }}>
            <BaseBorder xs={3} borderWidth='2px 2px 2px 0px'>
              <ButtonText textAlign='left' fontSize={7} color='black'>
                {cbd}% <br />
                <span style={{ fontSize: '11.85px' }}>CBD</span>
              </ButtonText>
            </BaseBorder>
            <BaseBorder xs={6} borderWidth='2px 2px 2px 0px'>
              <ButtonText fontSize={6} textAlign='center' color='black'>
                {category}
              </ButtonText>
            </BaseBorder>
            <BaseBorder xs={3} borderWidth='2px 0px 2px 0px'>
              <ButtonText textAlign='right' fontSize={7} color='black'>
                {thc}% <br />
                <span style={{ fontSize: '11.85px' }}>∆9-THC</span>
              </ButtonText>
            </BaseBorder>
          </Row>
          <Row style={{ width: '100%' }}>
            <BaseBorder xs={12} borderWidth='0px 0px 2px 0px'>
              <ButtonText textAlign='center' color='black' fontSize={6}>
                LAB CERTIFIED HEMP
              </ButtonText>
            </BaseBorder>
          </Row>
        </TextContainer>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Subscription }

import React, { Component, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { space, borderRadius, height } from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import {
  Body2,
  Heading3,
  Caption,
  Overline,
  Button as ButtonText,
  Heading6
} from '../../../components/Typography'
import { Button, LinkButton } from '../../../components'
import { SectionMax } from '../../../components/Containers'
import {
  HeroContainer,
  ProductImg,
  TextContainer,
  ImageWrapper,
  StyledFileIcon,
  BaseBorder,
  SelectWrapper
} from './styles'

const formatOptionLabel = ({ value, metric }) => (
  <ButtonText color='black' p={0}>
    {value}
    {metric}
  </ButtonText>
)

const Hero = ({
  title,
  productImage,
  category,
  cbd,
  thc,
  weights,
  coa_link
}) => {
  console.log('coa', coa_link)
  const [weightVal, setWeight] = useState(
    `${weights[0].value} ${weights[0].metric}`
  )

  const mailTo = `mailto:cody@elevatedtrading.com?cc=justin@elevatedtrading.com&subject=Price%20request%20for%3A%20${title}%20-%20${weightVal}&body=Testing`

  const sendEmail = (e) => {
    e.preventDefault()
    location.href = mailTo
  }

  return (
    <HeroContainer pb={4} pt={4}>
      <SectionMax m='auto!important' p={[2, 4]}>
        <ImageWrapper lg={7} md={6} sm={12}>
          <ProductImg
            fluid={productImage}
            height={['250px', '460px']}
            lg={12}
          />
        </ImageWrapper>
        <TextContainer lg={5} md={6} sm={12}>
          <Heading3 mb={2} mt={2} textAlign='center' color='ivory'>
            {title}
          </Heading3>
          <Row style={{ width: '100%' }}>
            <BaseBorder xs={3} borderWidth='2px 2px 2px 0px'>
              <ButtonText textAlign='left' fontSize={7} color='ivory'>
                {cbd}% <br />
                <span style={{ fontSize: '11.85px' }}>CBD</span>
              </ButtonText>
            </BaseBorder>
            <BaseBorder xs={6} borderWidth='2px 2px 2px 0px'>
              <ButtonText fontSize={6} textAlign='center' color='ivory'>
                {category}
              </ButtonText>
            </BaseBorder>
            <BaseBorder xs={3} borderWidth='2px 0px 2px 0px'>
              <ButtonText textAlign='right' fontSize={7} color='ivory'>
                {thc}% <br />
                <span style={{ fontSize: '11.85px' }}>∆9-THC</span>
              </ButtonText>
            </BaseBorder>
          </Row>
          <Row style={{ width: '100%' }}>
            <BaseBorder xs={12} borderWidth='0px 0px 2px 0px'>
              <ButtonText textAlign='center' color='ivory' fontSize={6}>
                LAB CERTIFIED HEMP
              </ButtonText>
            </BaseBorder>
          </Row>
          <SelectWrapper
            onChange={(option) => {
              setWeight(`${option.value} ${option.metric}`)
            }}
            mb={3}
            mt={3}
            formatOptionLabel={formatOptionLabel}
            options={weights}
            defaultValue={weights[0]}
            getOptionLabel={(option) => `${option.value} ${option.metric}`}
            styles={{
              control: (provided) => ({
                ...provided,
                height: 50,
                minHeight: 50,
                cursor: 'pointer'
              }),
              singleValue: (provided, state) => {
                const width = '100%'
                const paddingRight = 8
                return { ...provided, width, paddingRight }
              },
              dropdownIndicator: (provided, state) => ({
                ...provided,
                color: '#2D2926'
              }),
              option: (provided, state) => ({
                ...provided,
                cursor: 'pointer',
                padding: '0px 8px'
              })
            }}
            isSearchable={false}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: '#F5F7F9',
                primary: '#DBEBF6'
              }
            })}
          />
          <Row style={{ padding: '0px' }}>
            <Col xs={8} style={{ paddingLeft: '0px' }}>
              <Button
                bg={'sage'}
                width='100%'
                height='100%'
                color='black'
                bg='ivory'
                onClick={(e) => sendEmail(e)}
              >
                REQUEST PRICE
              </Button>
            </Col>
            <Col xs={4} style={{ paddingRight: '0px' }}>
              <LinkButton
                color='ivory'
                display='flex'
                width='100%'
                height='100%'
                justifyItems='center'
                alignItems='center'
                borderColor='ivory'
                href={coa_link.publicURL}
              >
                <StyledFileIcon pr={2} /> COA
              </LinkButton>
            </Col>
          </Row>
        </TextContainer>
      </SectionMax>
    </HeroContainer>
  )
}

export { Hero }

import React, { Component, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { space, borderRadius, height } from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import {
  Body2,
  Heading2,
  Caption,
  Overline,
  Button as ButtonText,
  Heading6
} from '../../../components/Typography'
import { Checkout, PriceItem, Button } from '../../../components'
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

const Hero = ({ title, productImage, category, cbd, thc, weights }) => {
  console.log('weights', weights)

  // const options = [
  //   { value: 'SKU_3MONTH', label: <PriceItem program={weight} price='minimum order' /> }
  // ]
  // const [discountAmount, setDiscount] = useState(options[0].label.props.strikeout - options[0].label.props.price)
  // const [sku, setSku] = useState(options[0].value)
  // useEffect(() => {
  //   setDiscount()
  // }, [enabled])

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
          <Heading2 mb={2} mt={2} textAlign='center' color='ivory'>
            {title}
          </Heading2>
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
                <span style={{ fontSize: '11.85px' }}>THC</span>
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
              // setDiscount(option.label.props.strikeout - option.label.props.price)
              // setSku(option.value)
              console.log(option.value)
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
              <Button bg={'sage'} width='100%' color='ivory'>
                REQUEST PRICE
              </Button>
            </Col>
            <Col xs={4} style={{ paddingRight: '0px' }}>
              <Button
                height='100%'
                bg='transparent'
                width='100%'
                color='ivory'
                display='flex'
                alignItems='center'
                textPadding={'0px!important'}
              >
                <StyledFileIcon pr={2} /> COA
              </Button>
            </Col>
          </Row>
        </TextContainer>
      </SectionMax>
    </HeroContainer>
  )
}

export { Hero }

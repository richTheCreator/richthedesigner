import React, { Component, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import {
  space,
  borderRadius,
  height
} from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import { Body2, Outlined, Caption, Overline, H6 } from '../../components/Typography'
import { Checkout, PriceItem } from '../../components'
import Select from 'react-select'
import { SectionMax } from '../../components/Containers'
import HomeIcon from '../../img/svg/home.svg'
import Calendar from '../../img/svg/calendar.svg'
import Skill from '../../img/svg/zap.svg'

const HeroContainer = styled(Row)`
  ${space}
  position: relative;
  background-position: center center;
  background-size: cover;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.black}
`
const ProductImg = styled(BackgroundImage)`
  ${borderRadius}
  ${height}
  background-size:cover;
  width:100%;
  box-shadow: ${props => props.theme.shadows.md}
`

const StyledCalendar = styled(Calendar)`
  path {
    stroke: ${props => props.theme.colors.lightGrey}
  }
`
const StyledHome = styled(HomeIcon)`
  path {
    stroke: ${props => props.theme.colors.lightGrey}
  }
`
const StyledSkill = styled(Skill)`
  path {
    stroke: ${props => props.theme.colors.lightGrey}
  }
`
const TextContainer = styled(Col)`
  ${space}
  align-self: center;
  z-index:1;
`
const ImageWrapper = styled(Col)`
  ${space}
`
const SelectWrapper = styled(Select)`
  ${space}
`
const Callout = ({ title, text }) =>
  <Col>
    <Overline>
      {title}
    </Overline>
    <H6 color='white'>
      {text}
    </H6>
  </Col>

const Hero = ({
  title,
  productImage,
  category,
  cbd,
  thc,
  weights
}) => {
  console.log('All Weights---', weights)
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
        <ImageWrapper lg={6} md={6} sm={12}>
          <ProductImg fluid={productImage} height={['250px', '460px']} lg={12} />
        </ImageWrapper>
        <TextContainer lg={6} md={6} sm={12} >
          <Outlined is='H1' fontSize={['24px', '32px']} outlineColor={'white'} fontSize='50' mb={1} mt={2}> {title} </Outlined>
          <Row between='xs'>
            <Callout title='Category' text={category} />
            <Callout title='CBD' text={`${cbd}%`} />
            <Callout title='THC' text={`${thc}%`} />
          </Row>
          <Row between='xs'>
            <Overline>
              Weights
            </Overline>
          </Row>
          <Row />
          <Checkout bg='#F0E9E2' color='black' width='100%' mb={0} sku={'sku'}>
            REQUEST PRICE
          </Checkout>
        </TextContainer>
      </SectionMax>
    </HeroContainer>
  )
}

export default Hero

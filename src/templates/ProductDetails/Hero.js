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

const Hero = ({ frontmatter }) => {
  const options = [
    { value: 'SKU_3MONTH', label: <PriceItem program='1lb' price='minimum order' /> }
  ]

  // const [discountAmount, setDiscount] = useState(options[0].label.props.strikeout - options[0].label.props.price)
  // const [sku, setSku] = useState(options[0].value)

  // useEffect(() => {
  //   setDiscount()
  // }, [enabled])
  return (
    <HeroContainer pb={4} pt={4}>
      <SectionMax m='auto!important' p={[2, 4]}>
        <ImageWrapper lg={6} md={6} sm={12}>
          <ProductImg fluid={frontmatter.product_image.childImageSharp.fluid} height={['250px', '460px']} lg={12} />
        </ImageWrapper>
        <TextContainer lg={6} md={6} sm={12} >
          <Outlined is='H1' fontSize={['24px', '32px']} outlineColor={'white'} fontSize='50' mb={1} mt={2}> {frontmatter.title} </Outlined>
          <Row between='xs'>
            <Callout title='Category' text={frontmatter.category} />
            <Callout title='Strain' text={frontmatter.strain} />
            <Callout title='CBD' text={frontmatter.cbd} />
            <Callout title='THC' text={frontmatter.thc} />
          </Row>
          <Row between='xs'>
            <Overline>
              Weights
            </Overline>
          </Row>
          <SelectWrapper
            onChange={option => {
              console.log('Weight', option)
              // setDiscount(option.label.props.strikeout - option.label.props.price)
              // setSku(option.value)
            }}
            mb={2}
            options={options}
            defaultValue={options[0]}
            styles={{
              control: base => ({
                ...base,
                height: 50,
                minHeight: 50,
                cursor: 'pointer'
              }),
              singleValue: (provided, state) => {
                const width = '100%'
                const paddingRight = 8
                return { ...provided, width, paddingRight }
              },
              option: (provided, state) => ({
                ...provided,
                cursor: 'pointer'
              })
            }}
            isSearchable={false}
            theme={theme => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: '#F5F7F9',
                primary: '#DBEBF6'
              }
            })}
          />
          <Checkout bg='#F0E9E2' color='black' width='100%' mb={0} sku={'sku'}>
            REQUEST PRICE
          </Checkout>
        </TextContainer>
      </SectionMax>
    </HeroContainer>
  )
}

export default Hero

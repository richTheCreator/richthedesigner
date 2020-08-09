import React, { Component, useRef } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Link } from 'gatsby'
import { Body1, Heading1 } from '../../../components/Typography'
import { SectionMax, GridParent } from '../../../components/Containers'
import { Button } from '../../../components'
import ETLogo from '../../../img/svg/ElevatedTradingLogo.svg'
import {
  HeroImage,
  HeroText,
  HeroTextOutline,
  HeroTextContainer,
  TextGridArea,
  ImageGridArea
} from './styles'

const Hero = ({
  hero: {
    heading,
    backgroundImg: { alt, image }
  }
}) => {
  return (
    <GridParent bg='black' height='70vh'>
      <HeroTextContainer m={4} bg={'black'} gridArea={TextGridArea}>
        {heading.split(' ').map((text, i) =>
          i === 1 ? (
            <HeroTextOutline color='transparent' mt={3} mb={3}>
              {text}
            </HeroTextOutline>
          ) : (
            <HeroText mt={3} mb={3} color='white'>
              {text}
            </HeroText>
          )
        )}
        <Button bg={'ivory'} mt={4}>
          VIEW PRODUCTS
        </Button>
      </HeroTextContainer>
      <HeroImage gridArea={ImageGridArea} fluid={image.childImageSharp.fluid} />
    </GridParent>
  )
}

export default Hero

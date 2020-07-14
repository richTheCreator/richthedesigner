import React, { Component, useRef } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import {
  space,
  width
} from 'styled-system'
import { Link } from 'gatsby'
import { Body1, H4 } from '../../components/Typography'
import { SectionMax } from '../../components/Containers'
import { Button } from '../../components'
import ETLogo from '../../img/svg/ElevatedTradingLogo.svg'

import useSiteMetadata from '../../components/SiteMetadata'

const HeroContainer = styled(Row)`
  ${space}
  background-position: center center;
  background-size: cover;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.ivory}
`
const Logo = styled(Col)`
  background-image:url('../../src/img/svg/ElevatedTradingLogo.svg')
`
// const callKG = () => {
//   window.open('tel:+15126302038', '_self')
// }

const Hero = ({ hero }) => {
  // const { menuLinks } = useSiteMetadata()

  return (
    <HeroContainer>
      <SectionMax ml='auto!important' mr='auto!important' style={{ position: 'relative', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
        <Col>
          <ETLogo />
          <H4 textAlign='center'> Coming Soon... </H4>
        </Col>
      </SectionMax>
    </HeroContainer>
  )
}

export default Hero

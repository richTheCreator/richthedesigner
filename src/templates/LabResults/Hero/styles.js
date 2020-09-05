import styled from 'styled-components'
import { height, position, width, space, color } from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import { Heading1 } from '../../../components/Typography'
import { Col } from 'react-flexbox-grid'

export const ProductImg = styled(BackgroundImage)`
  ${height}
  ${position}
  ${width}
  top: 0;
  right: 0;
  background-size: cover;
  box-shadow: ${(props) => props.theme.shadows.md};
`

export const HeroText = styled(Heading1)`
  line-height: 100%;
`
export const HeroTextOutline = styled(Heading1)`
  line-height: 100%;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.colors.white};
`

export const TextContainer = styled(Col)`
  ${space}
  ${color}
  ${height}
  display:flex;
  flex-direction: column;
  align-items:center;
  position:relative;
  justify-self: center;
  align-self: center;
  justify-content:center;
  z-index: 1;
`

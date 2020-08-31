import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import {
  space,
  borderWidth,
  color,
  borderRadius,
  height,
  width,
  position
} from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import Select from 'react-select'
import { Body1, Overline, Heading3 } from '../Typography'

export const Title = styled(Heading3)`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.colors.ivory};
  color: transparent;
  text-align: left;
`

export const TitleContainer = styled(Col)`
  ${space}
`

export const Wrapper = styled.div`
  ${color}
`
export const ProductImg = styled(BackgroundImage)`
  ${borderRadius}
  ${height}
  ${position}
  ${width}
  background-size: cover;
`

export const TextContainer = styled(Col)`
  ${space}
  ${color}
  position:relative;
  justify-self: center;
  align-self: center;
  z-index: 1;
`

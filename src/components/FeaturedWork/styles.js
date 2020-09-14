import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import {
  space,
  height,
  width,
  color,
  borderWidth,
  opacity
} from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import { Overline, Body2 } from '../Typography'

export const Container = styled(Col)`
  ${space}
  height: 100%;
  background: rgb(0 0 0 / 35%);
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
`

export const ProductImage = styled(BackgroundImage)`
  ${space}
  ${height}
  ${width}
  ${opacity}
  display:flex;
  flex-direction: row;
  background-position: center center;
  background-size: cover;
  position: absolute!important;
  overflow: hidden;
`

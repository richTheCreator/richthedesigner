import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { space, height, color, borderWidth } from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import { Overline, Body2 } from '../Typography'

export const ProductImage = styled(BackgroundImage)`
  ${space}
  ${height}
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-position: top;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`
export const Wrapper = styled(Col)`
  ${color}
  ${space}
`

export const InfoContainer = styled(Col)`
  border-width: 2px 0px 2px 0px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.black};
`
export const BaseBorder = styled(Overline)`
  ${borderWidth}
  margin: 0px;
  padding: 8px;
  height: fit-content;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.black};
`
export const BaseBorderBody = styled(Body2)`
  ${borderWidth}
  margin: 0px;
  padding: 8px;
  height: fit-content;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.black};
`

export const MiddleDivider = styled(Row)`
  border-color: ${(props) => props.theme.colors.black};
  border-style: solid;
  border-width: 2px 0px 0px 0px;
`

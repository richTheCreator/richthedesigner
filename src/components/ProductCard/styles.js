import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { space, borderWidth, color } from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import { Body1, Overline } from '../Typography'
import { ETCTriangleLogo } from '../SVG/ETC_TriangleLogo'

export const ProductImage = styled(BackgroundImage)`
  ${space}
  display:flex;
  flex-direction: row;
  width: 100%;
  height: 220px;
  background-position: center center;
  background-size: cover;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  box-shadow: ${(props) => props.theme.shadows.md};
  overflow: hidden;
`

export const BaseBorder = styled(Overline)`
  ${borderWidth}
  ${space}
  margin: 0px;
  padding: 8px;
  height: fit-content;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.black};
`

export const InfoContainer = styled(Row)`
  border-width: 2px 0px 2px 0px;
  border-style: solid;
  border-color: ${(props) => props.theme.colors.black};
`

export const Wrapper = styled(Col)`
  ${color}
  ${space}
`

export const StyledLogo = styled(ETCTriangleLogo)`
  ${space}
  height: 60px;
`

export const LogoContainer = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`

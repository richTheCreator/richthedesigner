import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { space, gridArea, flexbox, height } from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import { Heading1, Outlined } from '../../../components/Typography'

export const HeroImage = styled(BackgroundImage)`
  ${space}
  ${gridArea}
  background-size: cover;
  overflow: hidden;
  align-self: normal;
`
export const ImageGridArea = ['1 / 1 / 9 / 5', '1 / 6 / 9 / 13;']

export const HeroTextContainer = styled.div`
  ${gridArea}
  ${space}
  align-self: center;
  z-index: 2;
`
export const TextGridArea = ['1 / 1 / 9 / 5', '2 / 4 / 8 / 9']

export const HeroText = styled(Heading1)``
export const HeroTextOutline = styled(Heading1)`
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${(props) => props.theme.colors.black};
`

export const BackgroundContainer = styled(BackgroundImage)`
  ${space}
  ${height}
  display:flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-position: center bottom;
  align-items: flex-start;
  position: relative;
  min-height: 500px;
  margin-left: auto;
  margin-right: auto;
`

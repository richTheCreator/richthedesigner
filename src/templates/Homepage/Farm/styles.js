import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { space, gridArea, flexbox, height } from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import { Body1, Heading2 } from '../../../components/Typography'

export const ImageContainer = styled.div`
  ${gridArea}
  min-height:400px
`
export const ImageContainerGridArea = [
  '1 / 1 / 1 / 5',
  '1 / 1 / 1 / 5',
  '1 / 1 / 1 / 5',
  '1 / 2 / 9 / 7'
]

export const FarmImage = styled(BackgroundImage)`
  ${space}
  ${gridArea}
  ${height}
  background-size: cover;
  overflow: hidden;
  align-self: normal;
`
export const FarmImageGridArea = [
  '2 / 1 / 8 / 5',
  '2 / 1 / 8 / 5',
  '2 / 1 / 8 / 5',
  '2 / 1 / 8 / 13'
]

export const TitleTop = styled(Heading2)`
  ${gridArea}
  ${space} 
  align-self:center;
  z-index: 2;
`
export const TitleTopGridArea = [
  '1 / 1 / 3 / 5',
  '1 / 1 / 3 / 5',
  '1 / 1 / 3 / 5',
  '1 / 1 / 3 / 13'
]

export const TitleBot = styled(Heading2)`
  ${gridArea}
  ${space}
  align-self:center;
  z-index: 2;
`
export const TitleBotGridArea = [
  '9 / 2 / 7 / 5',
  '9 / 2 / 7 / 5',
  '9 / 2 / 7 / 5',
  '7 / 1 / 9 / 13'
]

export const Description = styled.div`
  ${gridArea}
  ${space}
  z-index: 2;
`
export const DescriptionGridArea = [
  '2 / 1 / 9 / 5',
  '2 / 1 / 9 / 5',
  '2 / 1 / 9 / 5',
  '2 / 7 / 8 / 12'
]

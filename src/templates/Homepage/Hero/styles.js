import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { space, typography, gridArea } from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import { Heading1, Outlined } from '../../../components/Typography'

export const HeroImage = styled(BackgroundImage)`
  ${space}
  ${gridArea}
  background-size: cover;
  overflow: hidden;
`
export const ImageGridArea = ['1 / 1 / 8 / 5', '1 / 6 / 9 / 13;']

export const HeroTextContainer = styled.div`
  ${gridArea}
  ${space}
  z-index: 2;
`
export const TextGridArea = ['1 / 1 / 8 / 5', '2 / 4 / 8 / 9']

export const HeroText = styled(Heading1)``
export const HeroTextOutline = styled(Heading1)`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(props) => props.theme.colors.white};
`

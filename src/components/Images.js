import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'
import { space, height, width, opacity, minHeight } from 'styled-system'

export const BGImage = styled(BackgroundImage)`
  ${space}
  ${height}
  ${width}
  ${opacity}
  ${minHeight}
  background-position: center center;
  background-size: cover;
  overflow: hidden;
  z-index: 6;
`

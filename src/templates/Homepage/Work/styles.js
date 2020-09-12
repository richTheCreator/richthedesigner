import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { space, gridArea, flexbox, height } from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import { Body1, Heading2 } from '../../../components/Typography'

export const FarmImage = styled(BackgroundImage)`
  ${space}
  ${gridArea}
  ${height}
  background-size: cover;
  overflow: hidden;
  align-self: normal;
`

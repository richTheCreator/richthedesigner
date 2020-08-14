import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { space, gridArea, flexbox, layout, height } from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import { Heading1, Outlined } from '../../../components/Typography'

export const CategoryImage = styled(BackgroundImage)`
  ${space}
  ${layout}
  ${height}
  display:flex;
  flex-direction: column;
  max-width: 440px;
  background-size: cover;
  background-position:top;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-left:auto;
  margin-right:auto;
`

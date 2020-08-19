import styled from 'styled-components'
import { space, height, width } from 'styled-system'
import BackgroundImage from 'gatsby-background-image'

export const CategoryImage = styled(BackgroundImage)`
  ${space}
  ${height}
  ${width}
  display:flex;
  flex-direction: column;
  max-width: 440px;
  background-size: cover;
  background-position: top;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-left: auto;
  margin-right: auto;
`

export const categoryStyles = {
  overflow: 'hidden',
  maxWidth: '440px',
  margin: 'auto',
  width: '100%',
  marginBottom: '24px'
}

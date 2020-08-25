import styled from 'styled-components'
import { space, height, width, system, style } from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import { Body2 } from '../../../components/Typography'

export const categoryStyles = {
  overflow: 'hidden',
  maxWidth: '440px',
  margin: 'auto',
  width: '100%',
  marginBottom: '24px'
}

const columnCount = style({
  prop: 'columnCount',
  cssProperty: 'column-count'
})

export const TextColumn = styled(Body2)`
  ${columnCount}
`

import system from '@rebass/components'
import styled from 'styled-components'
import { Row } from 'react-flexbox-grid'

const containerStyles = [
  'color',
  'space',
  'height',
  'justifyContent',
  'maxWidth',
  'maxHeight',
  'width',
  'minHeight',
  'gridTemplateColumns',
  'gridTemplateRows',
  'gridColumnGap',
  'gridRowGap',
  'display'
]

const FlexRow = styled(Row)``

export const FourCol = 'repeat(4, 1fr)'
export const TwelveCol = 'repeat(12, 1fr)'

export const GridParent = system(
  {
    display: 'grid',
    gridTemplateColumns: [FourCol, TwelveCol],
    // gridAutoColumns: 'minmax(min-content, max-content)',
    // gridTemplateRows: 'repeat(8,1fr)',
    gridAutoRows: 'minmax(min-content, max-content)',
    gridColumnGap: '0px',
    gridRowGap: '0px'
  },
  ...containerStyles
)

export const SectionWrapper = system(
  {
    extend: FlexRow,
    pl: [3, 4, 5, 6],
    pr: [3, 4, 5, 6],
    pt: [5, 6],
    pb: [5, 6],
    height: 0
  },
  ...containerStyles
)

export const SectionMax = system(
  {
    extend: FlexRow,
    maxWidth: 0,
    mt: 5,
    mb: 5
  },
  ...containerStyles,
  {
    width: '100%'
  }
)

export const Overlay = system(
  {
    extend: FlexRow,
    minHeight: 0,
    width: '100%',
    bg: 'black70'
  },
  ...containerStyles
)

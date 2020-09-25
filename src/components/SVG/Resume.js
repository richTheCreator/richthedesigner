import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import theme from '../../../static/styles/theme'

const Svg = styled(Icon)`
  stroke: ${({ theme }) => theme.colors.text};
`

export const Resume = ({ className, fillColor }) => (
  <Svg viewBox='0 0 24 25' className={className}>
    <path
      d='M14 2.49979H6C5.46957 2.49979 4.96086 2.7105 4.58579 3.08557C4.21071 3.46065 4 3.96935 4 4.49979V20.4998C4 21.0302 4.21071 21.5389 4.58579 21.914C4.96086 22.2891 5.46957 22.4998 6 22.4998H18C18.5304 22.4998 19.0391 22.2891 19.4142 21.914C19.7893 21.5389 20 21.0302 20 20.4998V8.49979L14 2.49979Z'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M14 2.49979V8.49979H20'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M16 13.4998H8'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M16 17.4998H8'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
    <path
      d='M10 9.49979H9H8'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
    />
  </Svg>
)

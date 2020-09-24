import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import theme from '../../../static/styles/theme'

const Svg = styled(Icon)`
  fill: ${({ theme }) => theme.colors.text};
`

export const Menu = ({ className, fillColor }) => (
  <Svg viewBox='0 0 24.75 24.75' className={className}>
    <path d='M0 3.875a2 2 0 012-2h20.75a2 2 0 010 4H2a2 2 0 01-2-2zm22.75 6.5H2a2 2 0 000 4h20.75a2 2 0 000-4zm0 8.5H2a2 2 0 000 4h20.75a2 2 0 000-4z' />
  </Svg>
)

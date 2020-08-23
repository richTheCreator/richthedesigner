import React from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import theme from '../../../static/styles/theme'

const Svg = styled(Icon)``

export const MountainLogo = ({ className, fillColor }) => (
  <Svg viewBox='0 0 40 17' className={className}>
    <path d='M26.6662 16.0946L13.5559 0L0 16.0946' fill='#959889' />
    <path d='M39.9999 16.0946L26.8896 0L13.3337 16.0946' fill='#959889' />
    <path
      fill-rule='evenodd'
      clip-rule='evenodd'
      d='M20.1118 8.04751L26.6668 16.0946H13.334L20.1118 8.04751Z'
      fill='#575B4A'
    />
  </Svg>
)

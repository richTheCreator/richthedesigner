import React from 'react'
import styled from 'styled-components'
import { height, space } from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import { Flex } from 'reflexbox/styled-components'

export const ProductImg = styled(BackgroundImage)`
  ${height}
  ${space}
  width: 100%;
  background-size: cover;
  background-position: center;
  box-shadow: ${(props) => props.theme.shadows.md};
`

export const ImgContainer = (props) => (
  <Flex
    {...props}
    sx={{
      position: 'relative',
      flexDirection: 'column',
      height: 0,
      zIndex: 6
    }}
  />
)

export const TextContainer = (props) => (
  <Flex
    {...props}
    sx={{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      zIndex: 6
    }}
  />
)

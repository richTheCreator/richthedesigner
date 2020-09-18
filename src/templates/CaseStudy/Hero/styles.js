import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { Flex } from 'reflexbox/styled-components'

// export const ProductImg = styled(BackgroundImage)`
//   ${borderRadius}
//   ${height}
//   ${position}
//   ${width}
//   top: 0;
//   left: 0;
//   background-size: cover;
//   box-shadow: ${(props) => props.theme.shadows.md};
// `

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

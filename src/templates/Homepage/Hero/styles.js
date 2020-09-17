import React from 'react'
import styled from 'styled-components'
import {
  height,
  position,
  width,
  space,
  color,
  order,
  display
} from 'styled-system'
import BackgroundImage from 'gatsby-background-image'
import { Heading1 } from '../../../components/Typography'
import { Col } from 'react-flexbox-grid'
import { Flex } from 'reflexbox/styled-components'

export const ProfileImg = styled(BackgroundImage)`
  ${height}
  ${position}
  ${width}
  ${order}
  top: 0;
  right: 0;
  background-size: cover;
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
      display: 'flex',
      zIndex: 6
    }}
  />
)

// export const TextContainer = styled(Col)`
//   ${order}
//   ${space}
//   flex-direction: column;
//   justify-content: center;
//   display: flex;
//   z-index: 6;
// `
export const InfoContainer = styled(Col)`
  ${order}
  ${space}
  ${position}
  ${display}
  flex-direction: column;
  justify-content: flex-end;
  display: flex;
  bottom:24px;
  right:24px;
`

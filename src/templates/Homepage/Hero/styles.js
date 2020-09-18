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
import PreviewCompatibleImage from '../../../components/PreviewCompatibleImage'

export const ProfileImg = styled(PreviewCompatibleImage)`
  ${height}
  ${position}
  ${width}
  ${order}
  ${space}
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

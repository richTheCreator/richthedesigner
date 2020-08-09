import React from 'react'
import styled from 'styled-components'
import { space, width, color } from 'styled-system'
import { Link } from 'gatsby'
import { Button as ButtonText } from '../components/Typography'

const Container = styled.button`
  ${space}
  ${color}
  ${width}
  box-shadow: ${(props) => props.theme.shadows.md};
  align-self: center;
  border: 0px;
  padding:0px 16px;
`

const Button = (props) => (
  <Link style={{ margin: 'auto' }} to={props.url}>
    <Container {...props}>
      <ButtonText color={props.color || 'black'}>{props.children}</ButtonText>
    </Container>
  </Link>
)

export { Button }

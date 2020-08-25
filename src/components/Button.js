import React from 'react'
import styled from 'styled-components'
import { space, width, color, border, height, borderColor } from 'styled-system'
import { Link } from 'gatsby'
import { Button as ButtonText } from '../components/Typography'

const Container = styled.button`
  ${space}
  ${color}
  ${width}
  ${height}
  ${border}
  align-self: center;
  padding:0px 16px;
  cursor: pointer;
  &: focus {
    outline: 0
  }
`
const LinkContainer = styled.a`
  ${space}
  ${color}
  ${width}
  ${height}
  ${border}
  ${borderColor}
  text-decoration: none;
  display:flex;
  border: 2px solid;
  align-self: center;
  justify-content:center;
  padding:0px 16px;
  cursor: pointer;
  &: focus {
    outline: 0
  }
`

const Button = (props) => (
  <Link to={props.url}>
    <Container {...props}>
      <ButtonText
        display={props.display}
        alignItems={props.alignItems}
        p={props.textPadding}
        color={props.color || 'black'}
      >
        {props.children}
      </ButtonText>
    </Container>
  </Link>
)
const LinkButton = (props) => (
  <LinkContainer href={props.href} borderColor={props.borderColor}>
    <ButtonText {...props}>{props.children}</ButtonText>
  </LinkContainer>
)

export { Button, LinkButton }

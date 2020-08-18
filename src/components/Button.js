import React from 'react'
import styled from 'styled-components'
import { space, width, color, border } from 'styled-system'
import { Link } from 'gatsby'
import { Button as ButtonText } from '../components/Typography'

const Container = styled.button`
  ${space}
  ${color}
  ${width}
  ${border}
  align-self: center;
  padding:0px 16px;
  cursor: pointer;
`

const Button = (props) => (
  <Link to={props.url}>
    <Container {...props}>
      <ButtonText
        color={props.color || 'black'}
        borderColor={props.borderColor || 'black'}
        border={props.noBorder ? '0px' : '2px solid'}
      >
        {props.children}
      </ButtonText>
    </Container>
  </Link>
)

export { Button }

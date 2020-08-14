import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { color, space } from 'styled-system'
import { Heading4, Heading5, Body2 } from '../components/Typography'

const Container = styled(Col)`
  ${color}
  justify-content:center;
`
const Number = styled(Heading4)`
  ${color}
  font-size:60px;
  font-weight: 900;
`

const Step = ({ number, title, desc }) => {
  return (
    <Container>
      <Col>
        <Number color={'black'} mt={0} mb={0}>
          {number}
        </Number>
      </Col>
      <Col xs>
        <Heading5 textAlign={'center'} m={0} mt={3}>
          {title}
        </Heading5>
        <Body2 textAlign={'center'} mt={0}>
          {desc}
        </Body2>
      </Col>
    </Container>
  )
}

export { Step }

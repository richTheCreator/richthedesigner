import React from 'react'
import { Heading, Text } from 'rebass/styled-components'
import styled from 'styled-components'

export const Heading1 = (props) => (
  <Heading
    as='h1'
    sx={{
      fontSize: ['72px', '96px'],
      fontWeight: 500,
      lineHeight: ['84px', '96px'],
      letterSpacing: '-1.5px',
      fontFamily: 'sans'
    }}
    {...props}
  />
)

export const MarqueeText = styled(Heading1)`
  color: transparent;
  font-weight: 700;
  -webkit-text-stroke-color: ${({ theme }) => theme.colors.text};
  -webkit-text-stroke-width: 1px;
`

export const Heading2 = (props) => (
  <Heading
    as='h2'
    sx={{
      fontSize: ['50px', '60px'],
      fontWeight: 500,
      lineHeight: ['59px', '69px'],
      letterSpacing: '1px',
      fontFamily: 'sans',
      hyphens: 'auto'
    }}
    {...props}
  />
)

export const Heading3 = (props) => (
  <Heading
    {...props}
    as='h3'
    sx={{
      fontSize: ['40px', '48px'],
      fontWeight: 500,
      lineHeight: ['46px', '52px'],
      letterSpacing: '1px',
      fontFamily: 'sans'
    }}
  />
)

export const Heading4 = (props) => (
  <Heading
    {...props}
    as='h4'
    sx={{
      fontSize: '34px',
      fontWeight: 500,
      lineHeight: '39px',
      letterSpacing: '1.25px',
      fontFamily: 'sans'
    }}
  />
)

export const Heading5 = (props) => (
  <Heading
    {...props}
    as='h5'
    sx={{
      fontSize: '24px',
      fontWeight: 700,
      lineHeight: '28px',
      fontFamily: 'sans',
      textTransform: 'uppercase'
    }}
  />
)

export const Heading6 = (props) => (
  <Heading
    {...props}
    as='h6'
    sx={{
      fontSize: '20px',
      fontWeight: 500,
      lineHeight: '23px',
      letterSpacing: '0.15px',
      fontFamily: 'sans'
    }}
  />
)
export const Body1 = (props) => (
  <Text
    as='p'
    fontSize={['18px', '21px']}
    fontWeight={500}
    lineHeight={['24px', '32px']}
    letterSpacing={'0.5px'}
    fontFamily='sans'
    {...props}
  />
)

export const Body2 = (props) => (
  <Text
    as='p'
    sx={{
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '26px',
      letterSpacing: '0.25px',
      fontFamily: 'sans'
    }}
    {...props}
  />
)
export const Subtitle2 = (props) => (
  <Text
    {...props}
    as='p'
    sx={{
      fontSize: ['22px', '22px', '32px', '32px'],
      fontWeight: 500,
      lineHeight: ['30px', '30px', '38px', '38px'],
      letterSpacing: '0.15px',
      fontFamily: 'sans'
    }}
  />
)
export const Subtitle1 = (props) => (
  <Text
    {...props}
    as='p'
    sx={{
      fontSize: ['26px', '26px', '42px', '42px'],
      fontWeight: 500,
      lineHeight: ['32px', '32px', '54px', '54px'],
      letterSpacing: '0.15px',
      fontFamily: 'sans'
    }}
  />
)

export const Button = (props) => (
  <Text
    {...props}
    as='p'
    sx={{
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '16px',
      letterSpacing: '0.75px',
      fontFamily: 'heading',
      padding: '16px 0px',
      margin: '0px',
      borderWidth: '2px',
      textTransform: 'uppercase'
    }}
  />
)

export const Caption = (props) => (
  <Text
    {...props}
    as='p'
    sx={{
      fontSize: '10px',
      fontWeight: 400,
      lineHeight: '16px',
      letterSpacing: '0.4px',
      fontFamily: 'sans'
    }}
  />
)

export const Overline = (props) => (
  <Text
    {...props}
    as='p'
    sx={{
      fontSize: 1,
      fontWeight: 2,
      lineHeight: 0,
      letterSpacing: 9,
      textTransform: 'uppercase'
    }}
  />
)

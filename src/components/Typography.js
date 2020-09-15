import React from 'react'
import { Heading, Text } from 'rebass/styled-components'

export const Heading1 = (props) => (
  <Heading
    {...props}
    as='h1'
    sx={{
      fontSize: ['72px', '96px'],
      fontWeight: 700,
      color: 'black',
      lineHeight: ['84px', '110px'],
      letterSpacing: '-1.5px',
      fontFamily: 'heading'
    }}
  />
)
export const Heading2 = (props) => (
  <Heading
    {...props}
    as='h2'
    sx={{
      fontSize: '60px',
      fontWeight: 700,
      color: 'black',
      lineHeight: '69px',
      letterSpacing: '5.5px',
      fontFamily: 'heading'
    }}
  />
)

export const Heading3 = (props) => (
  <Heading
    {...props}
    as='h3'
    sx={{
      fontSize: ['40px', '48px'],
      fontWeight: 700,
      color: 'black',
      lineHeight: '55px',
      letterSpacing: '4px',
      fontFamily: 'heading'
    }}
  />
)

export const Heading4 = (props) => (
  <Heading
    {...props}
    as='h4'
    sx={{
      fontSize: '34px',
      fontWeight: 700,
      color: 'black',
      lineHeight: '39px',
      letterSpacing: '1.25px',
      fontFamily: 'heading'
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
      color: 'black',
      lineHeight: '28px',
      fontFamily: 'heading'
    }}
  />
)

export const Heading6 = (props) => (
  <Heading
    {...props}
    as='h6'
    sx={{
      fontSize: '20px',
      fontWeight: 700,
      color: 'black',
      lineHeight: '23px',
      letterSpacing: '0.15px',
      fontFamily: 'heading'
    }}
  />
)
export const Body1 = (props) => (
  <Text
    {...props}
    as='p'
    sx={{
      fontSize: ['21px'],
      fontWeight: 400,
      color: 'darkGrey',
      lineHeight: '32px',
      letterSpacing: '0.5px',
      fontFamily: 'sans'
    }}
  />
)

export const Body2 = (props) => (
  <Text
    {...props}
    as='p'
    sx={{
      fontSize: '16px',
      fontWeight: 400,
      color: 'darkGrey',
      lineHeight: '26px',
      letterSpacing: '0.25px',
      fontFamily: 'sans'
    }}
  />
)
export const Subtitle1 = (props) => (
  <Text
    {...props}
    as='p'
    sx={{
      fontSize: ['22px', '32px'],
      fontWeight: 500,
      color: 'black',
      lineHeight: ['30px', '38px'],
      letterSpacing: '0.15px',
      fontFamily: 'sans'
    }}
  />
)
export const Subtitle2 = (props) => (
  <Text
    {...props}
    as='p'
    sx={{
      fontSize: 3,
      fontWeight: 1,
      color: 'darkGrey',
      lineHeight: 2,
      letterSpacing: 2,
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
      fontWeight: 700,
      color: 'black',
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
      color: 'darkGrey',
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
      color: 'lightGrey',
      lineHeight: 0,
      letterSpacing: 9,
      textTransform: 'uppercase'
    }}
  />
)

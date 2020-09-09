import React from 'react'
import system from '@rebass/components'
import styled from 'styled-components'
import { borderColor, space, fontWeight, color } from 'styled-system'
const textStyles = [
  'fontSize',
  'textAlign',
  'fontWeight',
  'fontStyle',
  'color',
  'lineHeight',
  'letterSpacing',
  'space',
  'fontFamily',
  'maxWidth',
  'alignItems',
  'display',
  'justifyItems',
  'opacity'
]

export const Heading1 = system(
  {
    is: 'h1',
    fontSize: '96px',
    fontWeight: 700,
    color: 'black',
    lineHeight: '110px',
    letterSpacing: '-1.5px',
    fontFamily: 'heading'
  },
  ...textStyles
)

export const Heading2 = system(
  {
    is: 'H2',
    fontSize: '60px',
    fontWeight: 700,
    color: 'black',
    lineHeight: '69px',
    letterSpacing: '5.5px',
    fontFamily: 'heading'
  },
  ...textStyles
)

export const Heading3 = system(
  {
    is: 'H3',
    fontSize: ['40px', '48px'],
    fontWeight: 700,
    color: 'black',
    lineHeight: '55px',
    letterSpacing: '4px',
    fontFamily: 'heading'
  },
  ...textStyles
)

export const Heading4 = system(
  {
    is: 'H4',
    fontSize: '34px',
    fontWeight: 700,
    color: 'black',
    lineHeight: '39px',
    letterSpacing: '1.25px',
    fontFamily: 'heading'
  },
  ...textStyles
)

export const Heading5 = system(
  {
    is: 'H5',
    fontSize: '24px',
    fontWeight: 700,
    color: 'black',
    lineHeight: '28px'
  },
  ...textStyles
)

export const Heading6 = system(
  {
    is: 'H6',
    fontSize: '20px',
    fontWeight: 700,
    color: 'black',
    lineHeight: '23px',
    letterSpacing: '0.15px'
  },
  ...textStyles
  // {
  //   textTransform: 'uppercase'
  // }
)

export const Body1 = system(
  {
    is: 'p',
    fontSize: '21px',
    fontWeight: 400,
    color: 'darkGrey',
    lineHeight: '32px',
    letterSpacing: '0.5px'
  },
  ...textStyles
)

export const Body2 = system(
  {
    is: 'p',
    fontSize: '16px',
    fontWeight: 400,
    color: 'darkGrey',
    lineHeight: '26px',
    letterSpacing: '0.25px'
  },
  ...textStyles
)

export const Subtitle1 = system(
  {
    is: 'p',
    fontSize: '32px',
    fontWeight: 400,
    color: 'black',
    lineHeight: '38px',
    letterSpacing: '0.15px'
  },
  ...textStyles
)

export const Subtitle2 = system(
  {
    is: 'p',
    fontSize: 3,
    fontWeight: 1,
    color: 'darkGrey',
    lineHeight: 2,
    letterSpacing: 2
  },
  ...textStyles
)

export const Button = system(
  {
    is: 'p',
    fontSize: '14px',
    fontWeight: 700,
    color: 'black',
    lineHeight: '16px',
    letterSpacing: '0.75px',
    fontFamily: 'heading'
  },
  ...textStyles,
  {
    padding: '16px 0px',
    margin: '0px',
    borderWidth: '2px',
    textTransform: 'uppercase'
  }
)

export const Caption = system(
  {
    is: 'p',
    fontSize: '10px',
    fontWeight: 400,
    color: 'darkGrey',
    lineHeight: '16px',
    letterSpacing: '0.4px'
  },
  ...textStyles
)

export const Overline = system(
  {
    is: 'p',
    fontSize: 1,
    fontWeight: 2,
    color: 'lightGrey',
    lineHeight: 0,
    letterSpacing: 9
  },
  ...textStyles,
  {
    textTransform: 'uppercase'
  }
)

// VARIANTS
const ListItemSquare = styled.li`
  display: flex;
  align-items: center;
  &:before {
    ${borderColor}
    content: " ";
    /* flex-shrink: 0; */
    /* position: relative; */
    /* vertical-align: sub; */
    width: 10px;
    height: 10px;
    margin-right: 8px;
    border-width: 2px;
    border-radius: 3px;
    border-style: solid;
    border-image: initial;
  }
`

export const formattedDescription = (description) => {
  return description
    .split(`\n\n`)
    .map((paragraph) => `${paragraph.replace(/\n/g, `<br> <br>`)}`)
    .join(``)
}

export const WithDecorator = ({ bodyText, bodyColor, decoratorColor }) => (
  <ListItemSquare borderColor={decoratorColor}>
    <Body2 m={0} color={bodyColor}>
      {' '}
      {bodyText}{' '}
    </Body2>
  </ListItemSquare>
)

export const Outlined = styled(Heading3)`
${space}
${fontWeight}
${color}
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: ${(props) => props.outlineColor};
font-weight: ${(props) => props.theme.fontWeights[3]};
font-size: ${(props) =>
  props.fontSize
    ? `calc(${props.fontSize}px + (40 - 18) * ((100vw - 300px) / (1600 - 300)));`
    : 'auto'}
line-height: ${(props) =>
  props.fontSize
    ? `calc(${props.fontSize}px + (40 - 18) * ((100vw - 300px) / (1600 - 300)))!important;`
    : 'auto'}
display:inline-block;
font-family: ${(props) => props.theme.fonts.heading}
`

import React from 'react'
import { Body1, Heading4, Subtitle2 } from '../../../components/Typography'
import { Flex } from 'reflexbox/styled-components'

export const ImgContainer = (props) => (
  <Flex
    {...props}
    sx={{
      position: 'relative',
      flexDirection: 'column',
      height: 0
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

export const ResumeItem = ({ res: { company, title, year, description } }) => {
  return (
    <Flex width='100%' height='100%' flexDirection='column'>
      <Subtitle2 style={{ textTransform: 'uppercase' }} pb={2}>
        {' '}
        {year}{' '}
      </Subtitle2>
      <Flex
        width='100%'
        flexDirection='row'
        justifyContent={'space-between'}
        py={4}
        css={`
          border-top: 2px solid ${({ theme }) => theme.colors.text};
        `}
      >
        <Flex width={[1 / 2, 1 / 3]} flexDirection='column'>
          <Heading4
            style={{
              textTransform: 'uppercase',
              hyphens: 'auto'
            }}
          >
            {title}
          </Heading4>
          <Subtitle2 style={{ textTransform: 'uppercase' }} pt={2}>
            {' '}
            {company}{' '}
          </Subtitle2>
        </Flex>
        <Flex width={[1 / 2, 1 / 3]} flexDirection='column'>
          <Body1>{description}</Body1>
        </Flex>
      </Flex>
    </Flex>
  )
}

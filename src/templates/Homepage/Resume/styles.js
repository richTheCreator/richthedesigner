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
    <Flex width='100%' height='100%' flexDirection='column' mb={4}>
      <Subtitle2 style={{ textTransform: 'uppercase' }} pb={2}>
        {' '}
        {year}{' '}
      </Subtitle2>
      <Flex
        width='100%'
        flexWrap='wrap'
        flexDirection='row'
        justifyContent={'space-between'}
        py={4}
        css={`
          border-top: 3px solid ${({ theme }) => theme.colors.text};
        `}
      >
        <Flex width={[1, 1 / 2, 1 / 4]} mb={4} flexDirection='column' px={2}>
          <Heading4
            style={{
              hyphens: 'auto',
              textTransform: 'uppercase'
            }}
          >
            {title}
          </Heading4>
          <Subtitle2 style={{ textTransform: 'uppercase' }} pt={2}>
            {' '}
            {company}{' '}
          </Subtitle2>
        </Flex>
        <Flex width={[1, 1 / 2, 1 / 3]} flexDirection='column' px={2}>
          <Body1>{description}</Body1>
        </Flex>
      </Flex>
    </Flex>
  )
}

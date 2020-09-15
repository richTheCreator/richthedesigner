import React from 'react'

import { Flex } from 'reflexbox/styled-components'

export const SectionWrapper = React.forwardRef(({ ...props }, ref) => (
  <Flex
    {...props}
    ref={ref}
    sx={{
      pl: [3, 4, 5, 6],
      pr: [3, 4, 5, 6],
      pt: [5, 6],
      pb: [5, 6],
      height: 0,
      zIndex: '5',
      flexDirection: 'row'
    }}
  />
))

export const SectionMax = (props) => (
  <Flex
    {...props}
    sx={{
      maxWidth: 2,
      flexWrap: 'wrap',
      mt: 5,
      mb: 5,
      flexDirection: 'row'
    }}
  />
)

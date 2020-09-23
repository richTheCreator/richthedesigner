import React from 'react'

import { Flex } from 'reflexbox/styled-components'

export const SectionWrapper = React.forwardRef((props, ref) => (
  <Flex
    ref={ref}
    px={[3, 4, 5, 6]}
    py={0}
    height={0}
    zIndex={5}
    mt={[3, 9]}
    mb={[3, 9]}
    flexDirection={'row'}
    {...props}
  />
))

export const SectionMax = (props) => (
  <Flex
    maxWidth={2}
    flexWrap='wrap'
    width={0}
    mx='auto'
    pt={9}
    mb={5}
    flexDirection='row'
    sx={{
      borderBottomWidth: '0px',
      borderTopWidth: '1px',
      borderLeftWidth: '0px',
      borderRightWidth: '0px',
      borderStyle: 'solid',
      borderColor: 'text'
    }}
    {...props}
  />
)

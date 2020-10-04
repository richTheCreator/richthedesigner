import React from 'react'
import useInView from 'react-cool-inview'
import { useTheme } from '../../static/styles/theme-context'

import { Flex } from 'reflexbox/styled-components'

export const SectionWrapper = React.forwardRef((props, ref) => (
  <Flex
    ref={ref}
    px={[3, 4, 5, 6]}
    py={0}
    height={0}
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
    css={`
      z-index: 6;
    `}
    {...props}
  />
)

export const ThemeSection = ({ theme, children }) => {
  const { toggleTheme } = useTheme()
  const { ref } = useInView({
    threshold: 0.3, // Default is 0
    onChange: ({ inView, scrollDirection, entry, observe, unobserve }) => {
      console.log('inview-------ThemeSection', theme)
      inView ? toggleTheme(theme) : toggleTheme('light')
      // Triggered whenever the target meets a threshold, e.g. [0.25, 0.5, ...]
    }
  })
  return (
    <SectionWrapper ref={ref} mt={8}>
      <SectionMax
        pt={4}
        sx={{
          borderBottomWidth: '0px',
          borderTopWidth: '0px',
          borderLeftWidth: '0px',
          borderRightWidth: '0px',
          borderStyle: 'solid'
        }}
      >
        {children}
      </SectionMax>
    </SectionWrapper>
  )
}

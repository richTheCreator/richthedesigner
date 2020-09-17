import React, { useEffect, useState } from 'react'
import useInView from 'react-cool-inview'
import { Flex } from 'reflexbox/styled-components'

import { SectionWrapper, SectionMax } from '../../../components/Containers'
import { ProfileImg, ResumeItem } from './styles'
import { Heading5 } from '../../../components/Typography'

import { theme, useTheme } from '../../../../static/styles/theme-context'

// const Wrapper = React.forwardRef(({ style, ...props }, ref) => {
//   return <SectionWrapper ref={ref} style={{ ...style }} {...props} />
// })

const Resume = ({ resume }) => {
  // const [isLoaded, show] = useState(false)
  // const { toggleTheme } = useTheme()

  // const { ref, inView, scrollDirection, entry, observe, unobserve } = useInView(
  //   {
  //     threshold: 0.3, // Default is 0
  //     onChange: ({ inView, scrollDirection, entry, observe, unobserve }) => {
  //       inView ? toggleTheme('light') : toggleTheme('dark')

  //       // Triggered whenever the target meets a threshold, e.g. [0.25, 0.5, ...]
  //     },
  //     onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
  //       // Triggered when the target enters the viewport
  //     },
  //     onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
  //       // Triggered when the target leaves the viewport
  //     }
  //     // More useful options...
  //   }
  // )

  return (
    <SectionWrapper bg='transparent'>
      <SectionMax
        height={'100%'}
        m='auto!important'
        css={`
          border-bottom: 1px solid ${({ theme }) => theme.colors.text};
        `}
      >
        <Heading5
          mb={5}
          fontWeight={700}
          css={`
            hyphens: auto;
          `}
        >
          {' '}
          ● EXPERIENCE{' '}
        </Heading5>
        {resume.map((res) => {
          return <ResumeItem res={res} />
        })}
      </SectionMax>
    </SectionWrapper>
  )
}

export { Resume }

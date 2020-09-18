import React from 'react'
import useInView from 'react-cool-inview'
import { SectionWrapper, SectionMax } from '../../../components/Containers'
import { ProfileImg, TextContainer, imageStyle } from './styles'
import {
  Heading2,
  Heading4,
  Body1,
  Body2,
  Subtitle1
} from '../../../components/Typography'

import { Box, Flex } from 'reflexbox/styled-components'
import { theme, useTheme } from '../../../../static/styles/theme-context'
import PreviewCompatibleImage from '../../../components/PreviewCompatibleImage'

// const Wrapper = React.forwardRef(({ style, ...props }, ref) => {
//   return <SectionWrapper ref={ref} style={{ ...style }} {...props} />
// })

const Hero = ({
  hero: {
    heading,
    backgroundImg: { alt, image }
  }
}) => {
  // const [isLoaded, show] = useState(false)
  const { toggleTheme } = useTheme()

  const { ref, inView, scrollDirection, entry, observe, unobserve } = useInView(
    {
      threshold: 0.3, // Default is 0
      onChange: ({ inView, scrollDirection, entry, observe, unobserve }) => {
        inView ? toggleTheme('light') : toggleTheme('dark')

        // Triggered whenever the target meets a threshold, e.g. [0.25, 0.5, ...]
      },
      onEnter: ({ scrollDirection, entry, observe, unobserve }) => {
        // Triggered when the target enters the viewport
      },
      onLeave: ({ scrollDirection, entry, observe, unobserve }) => {
        // Triggered when the target leaves the viewport
      }
      // More useful options...
    }
  )

  return (
    <SectionWrapper bg='transparent' ref={ref}>
      <SectionMax
        m='auto!important'
        pb={4}
        css={`
          border-bottom: 1px solid ${({ theme }) => theme.colors.text};
          position: relative;
        `}
      >
        <Flex
          width={['100%', '75%', '45%', '35%']}
          sx={{
            position: 'relative'
          }}
        >
          <PreviewCompatibleImage
            imageInfo={image}
            width={'100%'}
            ml={['-50px', 'auto', 'auto', 'auto']}
            position='relative'
          ></PreviewCompatibleImage>
          <Heading4
            fontWeight='700'
            fontSize={'42px'}
            display={['block', 'block', 'none', 'none']}
            css={`
              writing-mode: vertical-rl;
              text-orientation: mixed;
              position: absolute;
              right: 0px;
              top: 0px;
              white-space: nowrap;
            `}
          >
            RICHARD MORALES
          </Heading4>
        </Flex>
        <TextContainer px={[0, 4, 4, 4]} mt={4} width={[0, 0, 2 / 4, 2 / 4]}>
          <Heading2
            fontWeight='700'
            display={['none', 'none', 'block', 'block']}
            mb={4}
            mt={2}
            css={`
              border-bottom: 5px solid ${({ theme }) => theme.colors.text};
            `}
          >
            RICHARD MORALES
          </Heading2>
          <Subtitle1>
            A seasoned Designer located in Irvine, California. Creating
            meaningful moments with measurable outcomes. Open to new
            opportunities and collaborations.
          </Subtitle1>
        </TextContainer>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Hero }

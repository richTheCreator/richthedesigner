import React from 'react'
import useInView from 'react-cool-inview'
import { SectionWrapper, SectionMax } from '../../../components/Containers'
import { TextContainer } from './styles'
import { Heading2, Heading4, Subtitle1 } from '../../../components/Typography'
import { Flex } from 'reflexbox/styled-components'
import { useTheme } from '../../../../static/styles/theme-context'
import PreviewCompatibleImage from '../../../components/PreviewCompatibleImage'

const Hero = ({
  hero: {
    heading,
    backgroundImg: { alt, image }
  }
}) => {
  const { toggleTheme } = useTheme()

  const { ref } = useInView({
    threshold: 0.3, // Default is 0
    onChange: ({ inView, scrollDirection, entry, observe, unobserve }) => {
      inView ? toggleTheme('light') : toggleTheme('dark')
      // Triggered whenever the target meets a threshold, e.g. [0.25, 0.5, ...]
    }
  })

  return (
    <SectionWrapper bg='transparent' ref={ref}>
      <SectionMax
        css={`
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
            zIndex={6}
          />
        </Flex>
        <TextContainer px={[0, 4, 4, 4]} mt={4} width={[0, 0, 2 / 4, '65%']}>
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

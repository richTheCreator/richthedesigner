import React, { useState } from 'react'
import useInView from 'react-cool-inview'
import { Flex } from 'reflexbox/styled-components'
import {
  Heading5,
  Button as ButtonText,
  Caption,
  Heading1,
  Heading6,
  Body2,
  Body1,
  Subtitle1
} from '../../../components/Typography'
import { Button, LinkButton } from '../../../components'
import { SectionMax, SectionWrapper } from '../../../components/Containers'
import { useTheme } from '../../../../static/styles/theme-context'
import { ProductImg, TextContainer } from './styles'

const Hero = ({
  frontmatter: {
    theme,
    cover_image,
    title,
    project: {
      focus,
      blurb,
      challenge: { label, description },
      skills
    }
  }
}) => {
  const { toggleTheme } = useTheme()
  const { ref } = useInView({
    threshold: 0.3, // Default is 0
    onChange: ({ inView, scrollDirection, entry, observe, unobserve }) => {
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
        <TextContainer width={0}>
          <Heading1
            css={`
              text-transform: uppercase;
              hyphens: auto;
            `}
            fontWeight={700}
          >
            {title}
          </Heading1>
          <Heading6
            mt={4}
            css={`
              text-transform: uppercase;
            `}
          >
            Project Focus
          </Heading6>
          <Body2
            textAlign='center'
            css={`
              text-transform: uppercase;
            `}
          >
            {focus}
          </Body2>
        </TextContainer>
        <ProductImg
          fluid={cover_image.childImageSharp.fluid}
          height={['50vh', '50vh', '600px']}
          my={4}
        />
        <Flex
          width={0}
          flexDirection='row'
          flexWrap='wrap'
          justifyContent='space-between'
        >
          <Flex
            width={0}
            flexDirection='column'
            mb={4}
            width={[0, 1 / 2, 1 / 3]}
          >
            <Subtitle1 mb={2}>{blurb}</Subtitle1>
            {skills.map(({ skill }) => (
              <Body2
                css={`
                  text-transform: uppercase;
                `}
              >
                {skill}
              </Body2>
            ))}
          </Flex>
          <Flex width={0} flexDirection='column' width={[0, 1 / 2, 1 / 3]}>
            <Heading5
              fontWeight={700}
              css={`
                hyphens: auto;
                text-transform: uppercase;
              `}
            >
              ● {label}
            </Heading5>
            <Body1 mt={2}>{description}</Body1>
          </Flex>
        </Flex>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Hero }

import React, { useEffect, useState } from 'react'
import useInView from 'react-cool-inview'
import { SectionWrapper, SectionMax } from '../../../components/Containers'
import { Button } from '../../../components'
import {
  ProfileImg,
  TextContainer,
  InfoContainer,
  ImgContainer
} from './styles'
import {
  Heading1,
  Heading3,
  Body1,
  Body2,
  Subtitle1
} from '../../../components/Typography'
import { Col } from 'react-flexbox-grid'
import { theme, useTheme } from '../../../../static/styles/theme-context'

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
      threshold: 0.5, // Default is 0
      onChange: ({ inView, scrollDirection, entry, observe, unobserve }) => {
        inView ? toggleTheme('homeBlue') : toggleTheme('light')

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
        height={['100%', '100%', '800px', '800px']}
        m='auto!important'
        justifyContent='space-between'
        style={{
          borderBottom: '1px solid white',
          position: 'relative'
        }}
      >
        <ImgContainer
          px={1}
          mb={4}
          width={[1, 1, 2 / 4, 1 / 2]}
          maxWidth={'600px'}
        >
          <ProfileImg
            fluid={image.childImageSharp.fluid}
            height={['600px', '500px', '95%', '95%']}
            width={'100%'}
          />
        </ImgContainer>
        <TextContainer
          px={2}
          mt={['-200px', '-200px', 0, 0]}
          width={[1, 1, 2 / 4, 2 / 4]}
        >
          <Heading1
            fontFamily='sans'
            fontWeight={'500'}
            mb={4}
            mt={2}
            color='#FFF'
            style={{
              borderBottom: '5px solid white'
            }}
          >
            Richard Morales
          </Heading1>
          <Subtitle1
            mb={4}
            // fontSize={['32px', '46px']}
            // lineHeight={'100%'}
          >
            A seasoned Designer located in Irvine, California. Creating
            meaningful moments with measurable outcomes. Open to new
            opportunities and collaborations.
          </Subtitle1>
        </TextContainer>

        {/* <InfoContainer
          display={['none']}
          position={['initial', 'initial', 'absolute', 'relative']}
          order={[3]}
          xs={12}
          md={12}
          lg={3}
          mt={[4, 4, 0, 0]}
          mb={[4, 4, 0, 0]}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        ></InfoContainer> */}
      </SectionMax>
    </SectionWrapper>
  )
}

export { Hero }

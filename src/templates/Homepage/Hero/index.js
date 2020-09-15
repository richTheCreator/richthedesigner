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
        height={['100%', '100%', '800px', '800px']}
        style={{ position: 'relative', borderBottom: '1px solid white' }}
        m='auto!important'
        justifyContent='space-between'
      >
        <TextContainer mt={5} width={[1, 1, 1 / 2]}>
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
            color='white'
            mb={4}
            // fontSize={['32px', '46px']}
            // lineHeight={'100%'}
          >
            A seasoned Designer located in Irvine, California. Creating
            meaningful moments with measurable outcomes. Open to new
            opportunities and collaborations.
          </Subtitle1>
        </TextContainer>
        <ImgContainer mb={4} order={[1, 2, 2]} width={[1, 1, 1 / 3]}>
          <ProfileImg
            fluid={image.childImageSharp.fluid}
            height={['600px', '500px', '100%', '100%']}
            width={'100%'}
          />
          <div style={{ position: 'absolute', bottom: '0px', left: '16px' }}>
            {/* {isLoaded && (
              <Trail
                items={items}
                keys={(item) => item.key}
                from={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
                to={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              >
                {(item, k) => (props) => {
                  const Page = items[k]
                  // console.log('page', Page)
                  return <Page style={props} />
                }}
              </Trail>
            )} */}
          </div>
        </ImgContainer>

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

import React, { useEffect, useState } from 'react'
import { SectionWrapper, SectionMax } from '../../../components/Containers'
import {
  ProfileImg,
  TextContainer,
  InfoContainer,
  ImgContainer
} from './styles'
import { Heading3, Body1, Body2 } from '../../../components/Typography'
import { Trail } from 'react-spring/renderprops'
import { Col } from 'react-flexbox-grid'
import { useTransition, animated } from 'react-spring'

const AnimatedName = animated(Heading3)
const AnimatedBody = animated(Body1)
const items = [
  ({ style }) => (
    <AnimatedName
      mb={2}
      mt={2}
      color='ivory'
      lineHeight='70%'
      fontFamily='headingOutline'
      opacity='30%!important'
      style={{ ...style }}
    >
      Richard
    </AnimatedName>
  ),
  ({ style }) => (
    <AnimatedName
      mb={2}
      mt={2}
      color='ivory'
      lineHeight='70%'
      fontFamily='headingOutline'
      opacity='50%!important'
      style={{ ...style }}
    >
      Richard
    </AnimatedName>
  ),
  ({ style }) => (
    <AnimatedName
      mb={2}
      mt={2}
      color='ivory'
      lineHeight='70%'
      fontFamily='headingOutline'
      opacity='70%!important'
      style={{ ...style }}
    >
      Richard
    </AnimatedName>
  ),
  ({ style }) => (
    <AnimatedName
      mb={2}
      mt={2}
      color='ivory'
      lineHeight='70%'
      fontFamily='headingOutline'
      opacity='90%!important'
      style={{ ...style }}
    >
      Richard
    </AnimatedName>
  ),
  ({ style }) => (
    <AnimatedName
      mb={2}
      mt={2}
      color='ivory'
      lineHeight='70%'
      fontFamily='heading'
      style={{ ...style }}
    >
      Richard
    </AnimatedName>
  ),
  ({ style }) => (
    <AnimatedName
      mb={4}
      mt={2}
      color='ivory'
      lineHeight='70%'
      fontFamily='heading'
      style={{ ...style }}
    >
      Morales
    </AnimatedName>
  ),
  ({ style }) => (
    <AnimatedBody style={{ ...style }} color='white'>
      Creating meaningful moments with measurable outcomes.
    </AnimatedBody>
  )
]

const Hero = ({
  hero: {
    heading,
    backgroundImg: { alt, image }
  }
}) => {
  const [isLoaded, show] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      show(true)
    }, 300)
  }, [])

  return (
    <SectionWrapper
      bg='transparent'
      pl={[2, 0, 0, 6]}
      pr={[2, 0, 0, 6]}
      pt={[0, 0, 0, 6]}
      pb={[2, 0, 0, 6]}
    >
      <SectionMax
        height={['100%', '100%', '800px', '800px']}
        style={{ position: 'relative' }}
        m='auto!important'
        p={[0, 0, 4, 4]}
      >
        <TextContainer
          lg={4}
          md={6}
          xs={12}
          order={[2, 2, 1]}
          mt={['-200px', '-200px', 0]}
        >
          {isLoaded && (
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
          )}
        </TextContainer>
        <ImgContainer lg={5} md={6} xs={12} order={[1, 1, 2]}>
          <ProfileImg
            fluid={image.childImageSharp.fluid}
            height={['600px', '500px', '100%', '100%']}
            position={[
              'relative',
              'relative'
              // 'absolute !important',
              // 'absolute !important'
            ]}
            width={'100%'}
          />
        </ImgContainer>
        <InfoContainer
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
            justifyContent: 'flex-end'
          }}
        >
          <Body2 color='lightGrey' mb={[2, 4]}>
            <b>Open</b> to opportunities.
          </Body2>
          <Body2 color='lightGrey' mb={[2, 4]}>
            Located in <b>Irvine, CA</b>.
          </Body2>
          <Body2 color='lightGrey' mb={0}>
            <b>5+ years</b> of experience.
          </Body2>
        </InfoContainer>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Hero }

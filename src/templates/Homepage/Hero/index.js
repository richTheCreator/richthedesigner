import React, { useEffect, useState } from 'react'
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
import { useTheme } from '../../../../static/styles/theme-context'
// import { Trail } from 'react-spring/renderprops'
// import { useTransition, animated } from 'react-spring'

// const AnimatedName = animated(Heading3)
// const AnimatedBody = animated(Body1)
// const items = [
//   ({ style }) => (
//     <AnimatedName
//       mb={2}
//       mt={2}
//       color='ivory'
//       lineHeight='70%'
//       fontFamily='headingOutline'
//       opacity='30%!important'
//       style={{ ...style }}
//     >
//       Richard
//     </AnimatedName>
//   ),
//   ({ style }) => (
//     <AnimatedName
//       mb={2}
//       mt={2}
//       color='ivory'
//       lineHeight='70%'
//       fontFamily='headingOutline'
//       opacity='50%!important'
//       style={{ ...style }}
//     >
//       Richard
//     </AnimatedName>
//   ),
//   ({ style }) => (
//     <AnimatedName
//       mb={2}
//       mt={2}
//       color='ivory'
//       lineHeight='70%'
//       fontFamily='headingOutline'
//       opacity='70%!important'
//       style={{ ...style }}
//     >
//       Richard
//     </AnimatedName>
//   ),
//   ({ style }) => (
//     <AnimatedName
//       mb={2}
//       mt={2}
//       color='ivory'
//       lineHeight='70%'
//       fontFamily='headingOutline'
//       opacity='90%!important'
//       style={{ ...style }}
//     >
//       Richard
//     </AnimatedName>
//   ),
//   ({ style }) => (
//     <AnimatedName
//       mb={2}
//       mt={2}
//       ml={4}
//       color='ivory'
//       lineHeight='70%'
//       fontFamily='heading'
//       style={{ ...style }}
//     >
//       Richard
//     </AnimatedName>
//   ),
//   ({ style }) => (
//     <AnimatedName
//       mb={4}
//       mt={2}
//       ml={6}
//       color='ivory'
//       lineHeight='70%'
//       fontFamily='heading'
//       style={{ ...style }}
//     >
//       Morales
//     </AnimatedName>
//   )
// ]

const Hero = ({
  hero: {
    heading,
    backgroundImg: { alt, image }
  }
}) => {
  // const [isLoaded, show] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     show(true)
  //   }, 300)
  // }, [])

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
        style={{ position: 'relative', borderBottom: '1px solid white' }}
        m='auto!important'
        p={[0, 0, 4, 4]}
        maxWidth='1800px'
        between='xs'
      >
        <TextContainer md={6} xs={12} mt={5}>
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
        <ImgContainer xl={4} lg={5} md={6} xs={12} mb={4} order={[1, 2, 2]}>
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

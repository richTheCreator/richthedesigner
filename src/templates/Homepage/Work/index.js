import React, { useState, useRef } from 'react'
import { Flex } from 'reflexbox/styled-components'
import { useSpring, animated } from 'react-spring'
import { SectionWrapper, SectionMax } from '../../../components/Containers'
import { FeaturedWork } from '../../../components'
// import Marquee from 'react-simple-marquee'
import Marquee from 'react-marquee-slider'
import times from 'lodash/times'

import { MarqueeText, Subtitle1 } from '../../../components/Typography'

// const AnimWork = animated(FeaturedWork)

const Work = ({ companies }) => {
  const [state, setState] = useState({
    itemHovered: companies[0].node.frontmatter.company,
    isHovered: false
    //  categories: uniqueCategories
  })

  const ref = useRef()

  const [animatedProps, setAnimatedProps] = useSpring(() => {
    return {
      // Array containing [rotateX, rotateY, and scale] values.
      // We store under a single key (xys) instead of separate keys ...
      // ... so that we can use animatedProps.xys.interpolate() to ...
      // ... easily generate the css transform value below.
      xy: [0, 0],
      // Setup physics
      config: { mass: 5, tension: 400, friction: 100 }
    }
  })

  return (
    <SectionWrapper bg='transparent' pt={0}>
      <SectionMax
        style={{ margin: 'auto' }}
        py={['50px', '100px']}
        css={`
          border-bottom: 1px solid ${({ theme }) => theme.colors.text};
        `}
      >
        <Flex width='100%' height='100%' flexDirection='row'>
          <Marquee
            velocity={5} // Speed of the marquee (Optional)
          >
            {times(3, Number).map((id) => (
              <MarqueeText fontSize={['72px', '140px']}>
                {' '}
                WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK{' '}
              </MarqueeText>
            ))}
          </Marquee>
        </Flex>
        <Flex width={1 / 2} my={5} flexDirection='row'>
          <Subtitle1>
            I’ve had the pleasure of working with some really talented folks
            over the years. Here’s a few things we made together.
          </Subtitle1>
        </Flex>
        <animated.div
          css={`
            margin-bottom: ${({ theme }) => theme.space[5]};
          `}
          ref={ref}
          onMouseEnter={(e) => {
            e.stopPropagation()
            setState({ ...state, isHovered: true })
          }}
          onMouseMove={({ clientX, clientY }) => {
            // Get mouse x position within card

            if (ref.current) {
              const x =
                clientX -
                (ref.current.offsetLeft -
                  (window.scrollX ||
                    window.pageXOffset ||
                    document.body.scrollLeft))
              // Get mouse y position within card
              const y =
                clientY -
                (ref.current.offsetTop -
                  (window.scrollY ||
                    window.pageYOffset ||
                    document.body.scrollTop)) -
                800

              // Set animated values based on mouse position and card dimensions
              const xy = [
                y, // rotateX
                x // rotateY
              ]
              // Update values to animate to
              setAnimatedProps({ xy: xy })
            }
          }}
          onMouseLeave={() => {
            setState({ ...state, isHovered: false })
            // Set xys back to original
            setAnimatedProps({ x: 0, y: 0 })
          }}
        >
          {companies &&
            companies.map(({ node }, idx) => (
              <animated.div
                onMouseEnter={(e) => {
                  e.stopPropagation()
                  setState({
                    ...state,
                    itemHovered: node.frontmatter.company
                  })
                }}
                style={{
                  zIndex:
                    state.itemHovered === node.frontmatter.company ? 7 : 5,
                  position: 'relative'
                }}
              >
                <FeaturedWork idx={idx} node={node} />
              </animated.div>
            ))}
          <animated.div
            style={{
              transform: animatedProps.xy.interpolate(
                (x, y) => `matrix(1, 0, 0, 1, ${y}, ${x})`
              ),
              visibility: state.isHovered ? 'visible' : 'hidden',
              minWidth: '320px',
              width: '40vw',
              height: '50vh',
              position: 'absolute',
              pointerEvents: 'none',
              backgroundImage: `url(/media/${
                state.itemHovered === 'Berkshire'
                  ? 'bh'
                  : state.itemHovered === 'design studio'
                  ? 'ds'
                  : state.itemHovered === 'Gaugebox'
                  ? 'gb'
                  : 'wm'
              }_cover.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 5
            }}
          />
        </animated.div>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Work }

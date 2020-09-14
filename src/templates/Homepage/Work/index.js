import React, { useState, useRef } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { useSpring, animated } from 'react-spring'
import { SectionWrapper, SectionMax } from '../../../components/Containers'
import { FeaturedWork } from '../../../components'
import { Heading4 } from '../../../components/Typography'
import { backgroundSize } from 'styled-system'

const AnimWork = animated(FeaturedWork)

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

  console.log('state---------', state)
  return (
    <SectionWrapper bg='transparent'>
      <SectionMax maxWidth='1800px' style={{ margin: 'auto' }}>
        <Row style={{ width: '100%' }} center='xs'>
          <Heading4 color='white'>Case studies</Heading4>
        </Row>
        <animated.div
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
                700

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
            console.log('leftHover------')

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
              width: '30vw',
              height: '40vh',
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
              zIndex: 5
            }}
          />
        </animated.div>
      </SectionMax>
    </SectionWrapper>
  )
}

export { Work }

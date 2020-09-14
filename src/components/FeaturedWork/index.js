import React, { useState, useRef } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { useSpring, animated } from 'react-spring'

import { StyledFileIcon, Container, ProductImage } from './styles'
import { LinkButton } from '../Button'
import { Heading2 } from '../Typography'

const AnimImage = animated(ProductImage)

// HOC to forwardRef to components from Libs
function makeClassComponent(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

// const AnimWrapper = animated(makeClassComponent(Row))
// const AnimWrapper = animated(Row)

const FeaturedWork = ({
  node: {
    frontmatter: { company, cover_img }
  },
  idx
}) => {
  // We add this ref to card element and use in onMouseMove event ...
  // ... to get element's offset and dimensions.
  // const ref = useRef()

  // Keep track of whether card is hovered so we can increment ...
  // ... zIndex to ensure it shows up above other cards when animation causes overlap.
  // const [isHovered, setHovered] = useState(false)

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
    <animated.div
      // ref={ref}
      className='card'
      // onMouseEnter={() =>
      //   setState({
      //     itemHovered: company
      //   })
      // }
      // onMouseMove={({ clientX, clientY }) => {
      //   // Get mouse x position within card

      //   if (ref.current) {
      //     const x =
      //       clientX -
      //       (ref.current.offsetLeft -
      //         (window.scrollX ||
      //           window.pageXOffset ||
      //           document.body.scrollLeft)) -
      //       50
      //     // Get mouse y position within card
      //     const y =
      //       clientY -
      //       (ref.current.offsetTop -
      //         (window.scrollY ||
      //           window.pageYOffset ||
      //           document.body.scrollTop)) -
      //       100

      //     // Set animated values based on mouse position and card dimensions
      //     const xy = [
      //       y, // rotateX
      //       x // rotateY
      //     ]
      //     console.log('x------onMove-', ref.current)
      //     // Update values to animate to
      //     setAnimatedProps({ xy: xy })
      //   }
      // }}
      // onMouseLeave={() => {
      //   // setHovered(false)
      //   // Set xys back to original
      //   setAnimatedProps({ x: 0, y: 0 })
      // }}
    >
      <Heading2
        mb={4}
        mt={4}
        color='ivory'
        fontFamily='sans'
        fontSize={'96px'}
        fontWeight={500}
        lineHeight='96px'
        style={{
          textTransform: 'uppercase'
        }}
      >
        {`0${idx + 1}.${company}`}
      </Heading2>
    </animated.div>
  )
}

export { FeaturedWork }

// function Card({ children }) {
//   // We add this ref to card element and use in onMouseMove event ...
//   // ... to get element's offset and dimensions.
//   const ref = useRef()

//   // Keep track of whether card is hovered so we can increment ...
//   // ... zIndex to ensure it shows up above other cards when animation causes overlap.
//   const [isHovered, setHovered] = useState(false)

//   const [animatedProps, setAnimatedProps] = useSpring(() => {
//     return {
//       // Array containing [rotateX, rotateY, and scale] values.
//       // We store under a single key (xys) instead of separate keys ...
//       // ... so that we can use animatedProps.xys.interpolate() to ...
//       // ... easily generate the css transform value below.
//       xy: [0, 0],
//       // Setup physics
//       config: { mass: 5, tension: 400, friction: 100, precision: 0.00001 }
//     }
//   })

//   return (
//     <animated.div
//       ref={ref}
//       className='card'
//       onMouseEnter={() => setHovered(true)}
//       onMouseMove={({ clientX, clientY }) => {
//         // Get mouse x position within card
//         const x =
//           clientX -
//           (ref.current.offsetLeft -
//             (window.scrollX ||
//               window.pageXOffset ||
//               document.body.scrollLeft)) -
//           50

//         // Get mouse y position within card
//         const y =
//           clientY -
//           (ref.current.offsetTop -
//             (window.scrollY || window.pageYOffset || document.body.scrollTop)) -
//           100

//         // Set animated values based on mouse position and card dimensions
//         const dampen = 50 // Lower the number the less rotation
//         const xy = [
//           y, // rotateX
//           x // rotateY
//         ]

//         // Update values to animate to

//         setAnimatedProps({ xy: xy })
//       }}
//       onMouseLeave={() => {
//         setHovered(false)
//         // Set xys back to original
//         setAnimatedProps({ x: 0, y: 0 })
//       }}
//       style={{
//         // If hovered we want it to overlap other cards when it scales up
//         zIndex: 2
//         // Interpolate function to handle css changes
//       }}
//     >
//       {children}
//       <animated.div
//         style={{
//           width: '25px',
//           height: '100px',
//           background: 'red',
//           position: 'absolute',
//           // If hovered we want it to overlap other cards when it scales up
//           opacity: isHovered ? 1 : 0,
//           // Interpolate function to handle css changes
//           transform: animatedProps.xy.interpolate(
//             (x, y) => `matrix(1, 0, 0, 1, ${y}, ${x})`
//           )
//         }}
//       />
//     </animated.div>
//   )
// }

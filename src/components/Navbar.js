import React, { useState, useRef } from 'react'
import { Link, navigate } from 'gatsby'
import { Row, Col } from 'react-flexbox-grid'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { useSpring, useTransition, useChain, animated } from 'react-spring'
import {
  justifyContent,
  fontSize,
  fontWeight,
  space,
  lineHeight
} from 'styled-system'
import { Body2, Heading3 } from '../components/Typography'
import styled from 'styled-components'
import { RMLogo } from './SVG/RMLogo'
import { Menu } from './SVG/Menu'
import { SectionWrapper, SectionMax } from './Containers'
import { useTheme } from '../../static/styles/theme-context'

const StyledLogo = styled(RMLogo)`
  height: 45px;
`
const StyledMenu = styled(Menu)`
  height: 25px;
`
const NavWrapper = styled(SectionWrapper)`
  z-index: 104;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  webkit-transition: color 1s cubic-bezier(0.72, 0, 0.28, 1),
    background-color 0.65s cubic-bezier(0.72, 0, 0.28, 1);
  transition: color 1s cubic-bezier(0.72, 0, 0.28, 1),
    background-color 0.65s cubic-bezier(0.72, 0, 0.28, 1);
  will-change: background-color, color;
  background-color: ${(props) => props.theme.colors.background};
`
const NavSection = styled(SectionMax)``
const InfoBanner = styled.div`
  ${justifyContent}
  width: auto;
  display: flex;
  padding: 0px 32px;
  background: ${(props) => props.theme.colors.midnight};
  align-items: center;
  overflow-y: hidden;
  white-space: nowrap;
`
const LinkStyle = styled(AniLink)`
  ${fontSize}
  ${fontWeight}
  ${space}
  ${lineHeight}
  height:100%;
  border-bottom: 3px solid ${(props) => props.theme.colors.text};
  text-decoration: none !important;
  color: ${(props) => props.theme.colors.text};
`
const SmallButton = styled(Link)`
  text-decoration: none;
  border-radius: 15px;
  background: ${(props) => props.theme.colors.sage};
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.sans};
  font-size: 11px;
  text-align:center;
  vertical-align: middle;
  padding: 8px 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .5px;
  justify-self: flex-end;
  cursor: pointer;
}
`
const MenuList = styled(Col)`
  position: fixed;
  display: none;
  opacity: 0;
  width: 100%;
  left: 0px;
  right: 0px;
  top: 75px;
  height: 100%;
  z-index: 10;
  overflow-y: scroll;
  transform-origin: top;
  background: ${(props) => props.theme.colors.background};
`

function makeClassComponent(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

const AnimatedMenu = animated(makeClassComponent(MenuList))
const AnimatedLink = animated(makeClassComponent(LinkStyle))

// const NavbarLG = ({ menuLinks, theme }) => (
//   <Row
//     className='hidden-xs hidden-sm hidden-md'
//     middle='xs'
//     style={{
//       height: '100%',
//       width: '100%',
//       maxWidth: '1200px',
//       margin: 'auto'
//     }}
//   >
//     <Col xs={1} style={{ alignItems: 'center' }}>
//       <AniLink cover bg='#727A68' direction='up' to='/' title='Logo'>
//         <StyledLogo />
//       </AniLink>
//     </Col>
//     <Col xs={11} style={{ padding: '0px 16px' }}>
//       <Row middle='xs' center='xs'>
//         {menuLinks.map((navItems) =>
//           navItems.name !== 'Home' ? (
//             <Row style={{ display: 'table' }}>
//               <LinkStyle
//                 cover
//                 bg='#727A68'
//                 direction='up'
//                 fontSize={2}
//                 fontWeight={2}
//                 to={navItems.link}
//               >
//                 {navItems.name}
//               </LinkStyle>
//             </Row>
//           ) : null
//         )}
//         <SmallButton to={menuLinks[0].link}> CONTACT US </SmallButton>
//       </Row>
//     </Col>
//   </Row>
// )

const NavbarSM = ({ menuLinks, toggleMenu }) => (
  <Row style={{ height: '100%', width: '100%' }} middle='xs'>
    <Col
      style={{
        alignItems: 'center',
        justifyContent: 'flex-start',
        display: 'flex'
      }}
      xs={11}
    >
      <AniLink
        cover
        bg='#727A68'
        direction='up'
        to='/'
        title='Logo'
        style={{ textDecoration: 'none' }}
      >
        <StyledLogo />
      </AniLink>
    </Col>
    <Col xs={1} onClick={toggleMenu}>
      <StyledMenu />
    </Col>
  </Row>
)

const Navbar = ({ menuLinks }) => {
  const { theme } = useTheme()

  console.log('theme', theme)

  const [expanded, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu((expanded) => !expanded)
  }

  const menuClick = (e, to) => {
    e.preventDefault()
    setTimeout(() => {
      toggleMenu()
    }, 500)
  }
  // Animation helpers
  const menuRef = useRef()
  const springMenu = useSpring({
    opacity: expanded ? 1 : 0,
    display: expanded ? 'block' : 'none',
    transform: expanded ? 'scaleY(1)' : 'scaleY(0)',
    ref: menuRef
    // visibility: expanded ? 'visible' : 'hidden'
  })
  const trailRef = useRef()
  const transitions = useTransition(
    expanded ? menuLinks : [],
    (item) => item.name,
    {
      from: { opacity: 0, transform: 'translate3d(0,-100px,0)' },
      enter: { opacity: 1, transform: 'translate3d(0,0,0)' },
      leave: { opacity: 0, transform: 'translate3d(0,-100px,0)' },
      unique: true,
      trail: 300 / menuLinks.length,
      ref: trailRef
      // delay: 200,
    }
  )

  useChain(expanded ? [menuRef, trailRef] : [trailRef, menuRef], [0, 0])

  return (
    <NavWrapper
      sx={{
        borderBottomWidth: '3px',
        borderTopWidth: '0px',
        borderLeftWidth: '0px',
        borderRightWidth: '0px',
        borderStyle: 'solid',
        borderColor: 'text'
      }}
      pt={0}
      mb={0}
      mt={0}
      width={0}
      height={'75px'}
    >
      <NavSection
        height='75px'
        width={0}
        py={0}
        sx={{
          borderBottomWidth: '0px',
          borderTopWidth: '0px',
          borderLeftWidth: '0px',
          borderRightWidth: '0px'
        }}
      >
        {/* <NavbarLG menuLinks={menuLinks} /> */}
        <NavbarSM menuLinks={menuLinks} toggleMenu={toggleMenu} />
      </NavSection>
      <AnimatedMenu
        className='hidden-md hidden-lg hidden-xl'
        middle='xs'
        xs={12}
        native
        style={{ ...springMenu }}
      >
        <SectionMax flexDirection='column'>
          {transitions.map(({ item, key, props }) => (
            <AnimatedLink
              cover
              bg='#fff'
              direction='down'
              fontSize={['62px', '92px']}
              lineHeight={['52px', '80px']}
              fontWeight={'500'}
              my={4}
              key={key}
              style={props}
              to={item.link}
              onClick={(e) => menuClick(e, item.link)}
            >
              {item.name}
            </AnimatedLink>
          ))}
        </SectionMax>
      </AnimatedMenu>
    </NavWrapper>
  )
}

export default Navbar

import React, { useState, useRef } from 'react'
import { Link, navigate } from 'gatsby'
import { Row, Col } from 'react-flexbox-grid'
import { useSpring, useTransition, useChain, animated } from 'react-spring'
import { justifyContent, fontSize, fontWeight } from 'styled-system'
import { Body2 } from '../components/Typography'
import styled from 'styled-components'

const NavWrapper = styled.header`
  top: 0px;
  left: 0px;
  right: 0px;
  position: fixed;
  z-index: 104;
  background-color: ${props => props.theme.colors.white};
`
const NavSection = styled.div`
  width: auto;
  display: flex;
  padding: 0px 32px;
  box-shadow: ${props => props.theme.shadows.sm}
`
const InfoBanner = styled.div`
  ${justifyContent}
  width: auto;
  display: flex;
  padding: 0px 32px;
  background: ${props => props.theme.colors.black};
  align-items: center;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
`
const LinkStyle = styled(Link)`
  ${fontSize}
  ${fontWeight}
  vertical-align: middle;
  display: table-cell;
  height: 55px;
  padding: 0px 24px;
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  letter-spacing: ${props => props.theme.letterSpacings[8]};
`
const SmallButton = styled(Link)`
  text-decoration: none;
  border-radius: 15px;
  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.sans};
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
  top: 100px;
  height: 100%;
  z-index: 10;
  overflow-y: scroll;
  transform-origin: top;
  background: ${props => props.theme.colors.white};
`

function makeClassComponent (WrappedComponent) {
  return class extends React.Component {
    render () {
      return <WrappedComponent {...this.props} />
    }
  }
}

const AnimatedMenu = animated(makeClassComponent(MenuList))
const AnimatedLink = animated(makeClassComponent(LinkStyle))

const NavbarLG = ({ menuLinks, theme }) => (
  <Row className='hidden-xs hidden-sm hidden-md' middle='xs' style={{ height: '100%', width: '100%' }}>
    <Col xs={-1}>
      <Link to='/' className='navbar-item' title='Logo' />
    </Col>
    <Col xs={11} style={{ padding: '0px 16px' }}>
      <Row middle='xs' center='xs'>
        {menuLinks.map(navItems =>
          navItems.name !== 'Home' ? (
            <Row style={{ display: 'table' }}>
              <LinkStyle fontSize={2} fontWeight={2} to={navItems.link}>{navItems.name}</LinkStyle>
            </Row>
          ) : null
        )}
        <SmallButton to={menuLinks[0].link}> CONTACT US </SmallButton>
      </Row>
    </Col>
  </Row>
)
const NavbarSM = ({ menuLinks, toggleMenu }) => (
  <Row
    style={{ height: '100%', width: '100%' }}
    className='hidden-xl hidden-lg'
    middle='xs'
  >
    <Col>
      <Row around='xs'>
        <svg
          onClick={toggleMenu}
          width='28'
          viewBox='0 0 28 23'
          fill='#000'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M.5.5h17.03M.5 6.5h17.03M.5 12.5h17.03' fill='#000' fill-rule='evenodd' stroke='#000' stroke-linecap='square' />
        </svg>
      </Row>
    </Col>
    <Col style={{ width: '100%', textAlign: 'center' }} xs={10}>
      <Link to='/' className='navbar-item' title='Logo' />
    </Col>
  </Row>
)

const Navbar = ({ menuLinks }) => {
  const [expanded, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(expanded => !expanded)
  }

  const menuClick = (e, to) => {
    e.preventDefault()
    navigate(to)
    toggleMenu()
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
    item => item.name,
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
    <NavWrapper>
      <InfoBanner justifyContent='center'>
        <Body2 textAlign='center' color='white'> New hemp starter kit - now available </Body2>
      </InfoBanner>
      <NavSection style={{ height: '75px' }}>
        <NavbarLG menuLinks={menuLinks} />
        <NavbarSM menuLinks={menuLinks} toggleMenu={toggleMenu} />
      </NavSection>
      <AnimatedMenu
        className='hidden-md hidden-lg hidden-xl'
        middle='xs'
        xs={12}
        native
        style={{ ...springMenu }}
      >
        {transitions.map(({ item, key, props }) => (
          <Row style={{ display: 'table', margin: '24px 0' }}>
            <AnimatedLink fontSize={8} fontWeight={3} key={key} style={props} onClick={(e) => menuClick(e, item.link)}>
              {item.name}
            </AnimatedLink>
          </Row>
        ))}
      </AnimatedMenu>
    </NavWrapper>
  )
}

export default Navbar

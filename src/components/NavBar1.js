import React, { useState } from "react"
import { Link } from "gatsby"
import styled, { css } from '@xstyled/styled-components'
import { breakpoints, layout } from '@xstyled/system'
import logo from '../images/logo.png'
import { useSpring, animated } from 'react-spring'


const Wrapper = styled.header(
  breakpoints({
    xs: css`
      z-index: 2;
      color: neutral0;
      width: 100%;
      position: absolute;
      padding: 4 3;
      z-index: 600;
    
    `,
    sm: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `
  })
)

const MobileWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2 3;
    h1 {
      font-size: 4;
      font-weight: 600; 
      letter-spacing: 1;
    }
    img {
      height: 70px;
    }
`

const MobileButton = styled.button`
    color: neutral1;
    background-color: transparent;
    border: none;
    ${layout}

    &:focus {
      outline: 0;
      color: neutral0;
    }
    &:hover {
      color: primary3;
    }
`

const MobileSVG = styled.svg`
    width: 24rpx;
    height: 24rpx;
    fill: currentColor;
`

const NavBar = styled.nav(
  breakpoints({
    xs: css`
      letter-spacing: 1;
      display:${props => props.status ? 'flex' : 'none'};
      flex-direction: ${props => props.status ? 'column' : ''};
      padding: 1 1 1 2;
      z-index: 600;
    
      background-color: primary5;
    
    `,
    sm: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1 1 1 2;
      background-color: transparent;
    `
  })
)

const NavLink = styled(Link)`
  color: neutral0;
  border-radius: 2;
  padding: 2 3;


  &:hover {
    background-color: primary4;
    color: neutral1;
  }
`


const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  const fade = useSpring({
    opacity: isOpen ? 1 : 0
  })

  return (
    <Wrapper>
      <MobileWrapper>
        <Link to='/'>
          <img src={logo} />
        </Link>
        <MobileButton
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          display={{ sm: 'none' }}
        >
          <MobileSVG viewBox="0 0 24 24">
            {isOpen ? (
              <path
                fillRule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )

            }
          </MobileSVG>
        </MobileButton>
      </MobileWrapper>
      <NavBar status={isOpen} >
        <NavLink to="/about/church">ABOUT</NavLink>
        <NavLink to="/events">EVENTS</NavLink>
        <NavLink to="/sermons">SERMONS</NavLink>
        <NavLink to="/ministries">MINISTRIES</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </NavBar>
    </Wrapper>
  );
}

export default Header;
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

// const MobileButton = styled.button`
//     color: neutral1;
//     background-color: transparent;
//     border: none;
//     ${layout}

//     &:focus {
//       outline: 0;
//       color: neutral0;
//     }
//     &:hover {
//       color: primary3;
//     }
// `

// const MobileSVG = styled.svg`
//     width: 24rpx;
//     height: 24rpx;
//     fill: currentColor;
// `





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
      </MobileWrapper>
    </Wrapper>
  );
}

export default Header;
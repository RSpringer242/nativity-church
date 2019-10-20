import React from 'react';
import { Link } from 'gatsby'
import styled, { css } from '@xstyled/styled-components'
import { breakpoints, th, layout, flexboxes, overflow, padding, backgrounds } from '@xstyled/system'
import NavLinks from './NavLinks'


const StyledNavBar = styled.nav`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1 1 1 2;
   background-color: transparent;
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

const DesktopNavBar = () => {
  return (
    <StyledNavBar>
      <Link to='/'>
        <img src={logo} />
      </Link>
      <NavLinks />

      <MobileButton
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        display={{ sm: 'none' }}
      >
        <MobileSVG viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
          />
        </MobileSVG>
      </MobileButton>
    </StyledNavBar>
  );
}

export default DesktopNavBar;
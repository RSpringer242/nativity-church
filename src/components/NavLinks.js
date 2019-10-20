import React from 'react';
import { Link } from 'gatsby'
import styled, { css } from '@xstyled/styled-components'
import { breakpoints, th, layout, flexboxes, overflow, padding, backgrounds } from '@xstyled/system'


const StyledNavBar = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1 1 1 2;
   background-color: transparent;
`

const NavLink = styled(Link)`
  color: neutral0;
  border-radius: 2;
  padding: 2 3;


  &:hover {
    background-color: primary4;
    color: neutral1;
  }
`

const NavLinks = () => {
  return (
    <StyledNavBar>
      <NavLink to="/about/church">ABOUT</NavLink>
      <NavLink to="/events">EVENTS</NavLink>
      <NavLink to="/sermons">SERMONS</NavLink>
      <NavLink to="/ministries">MINISTRIES</NavLink>
      <NavLink to="/contact">CONTACT</NavLink>
    </StyledNavBar>
  );
}

export default NavLinks;
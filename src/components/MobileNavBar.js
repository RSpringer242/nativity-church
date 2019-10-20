import React from 'react';
import { Link } from 'gatsby'
import styled, { css } from '@xstyled/styled-components'
import { breakpoints, th, layout, flexboxes, overflow, padding, backgrounds } from '@xstyled/system'
import NavLinks from './NavLinks'

const StyledBar = styled.nav`
     letter-spacing: 1;
     display: flex;
     flex-direction: column;
     padding: 1 1 1 2;
     z-index: 600;
     background-color: primary5;
`


const MobileNavBar = () => {
  return (
    <StyledBar>
      <NavLinks />
    </StyledBar>
  );
}

export default MobileNavBar;
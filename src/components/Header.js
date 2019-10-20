import React from "react"
import Img from 'gatsby-image'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled, { css } from '@xstyled/styled-components'
import { breakpoints, th, layout, flexboxes, overflow, padding, backgrounds } from '@xstyled/system'


const Wrapper = styled.section(
  breakpoints({
    xs: css`
      position: relative;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;


       h1 {
        font-size: 6;
        color: neutral0;
        text-align: center;
        z-index: 100;
        letter-spacing: 0.5rem;
        line-height: 1;
        text-transform: uppercase;
      }
    `,
    sm: css`
       h1 {
       font-size: 40;

      }
    `

  })
)

const StyledImage = styled(Img)`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 1;
      background: rgba(31, 41, 51, 0.2)
    }
`

const Header = ({ data }) => {


  return (
    <Wrapper>
      <h1>{data.page}</h1>
      <StyledImage
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',

        }}
        fluid={data.image.asset.fluid}
      />
    </Wrapper>
  );
}

export default Header;
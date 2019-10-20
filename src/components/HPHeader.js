import React from "react"
import Img from 'gatsby-image'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled, { css } from '@xstyled/styled-components'
import { breakpoints, th, layout, flexboxes, overflow, padding, backgrounds } from '@xstyled/system'
import { useSpring, animated } from 'react-spring'

const Wrapper = styled.section(
  breakpoints({
    xs: css`
      position: relative;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    `,

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
      background: rgba(252, 229, 136, 0.1);
    }
`

const HeroContent = styled.div(
  breakpoints({
    xs: css`
      z-index: 100;
      padding-bottom: 5;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      max-width: 70rem;

      h1 {
        font-size: 6;
        color: neutral0;
        text-align: center;
    
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

const ButtonsWrapper = styled.div(
  breakpoints({
    xs: css`
      display: flex;
      margin-top: 5;

      a {
        color: neutral0;
        font-size: 3;
        background-color: transparent;
        border: 2px solid;
        border-radius: 2;
        border-color: primary4;
        letter-spacing: 0.2rem;
        z-index:100;
        padding: 2;
        text-align: center;
      }

      a:hover {
        cursor: pointer;
        background-color: primary4;
        /* color: neutral1; */
      }

      a:active {
        box-shadow: 0 5px 10px rgba(0,0,0,0.2);   
      }
    `,
  })
)

const StyledLink = styled(Link)`
        color: neutral0;
        font-size: 3;
        background-color: transparent;
        border: 2px solid yellow5;
        letter-spacing: 0.2rem;
        z-index:100;
        padding: 2;
        text-align: center;
        margin-left: 2;

        &:hover {
          cursor: pointer;
          background-color: yellow5;
          /* color: neutral9; */
        }

        &:active {
          box-shadow: 0 5px 10px rgba(0,0,0,0.2);
          
        }
`




const HPHeader = ({ data }) => {

  const fade = useSpring({
    from: {
      opacity: 0
    },
    opacity: 1
  })

  return (
    <Wrapper>
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
      <HeroContent>
        <animated.h1 style={fade}>The Church Of The Nativity</animated.h1>
        <ButtonsWrapper>
          <a href="#schedule" className="schedule">Weekly Schedule</a>
          <StyledLink to="/about" >See Our Beliefs</StyledLink>
        </ButtonsWrapper>
      </HeroContent>
    </Wrapper>
  );
}

export default HPHeader;
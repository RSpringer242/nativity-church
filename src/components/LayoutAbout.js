import React from "react"
import Img from 'gatsby-image'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled, { ThemeProvider, css } from '@xstyled/styled-components'
import { breakpoints, th, layout, flexboxes, overflow, padding, px, py, backgrounds, textAlign } from '@xstyled/system'
import image2 from '../images/logo.png'

import Header from '../components/Header'


const Container = styled.section(
  breakpoints({
    xs: css`
      display:flex;
      flex-direction: column;

    `,
    sm: css`
      flex-direction: row;
    `
  })
)

const Wrapper = styled.section`
  
      
      hr {
      border: 0.5px solid neutral2;
      margin-top: 5;
      margin-bottom: 5;
      width: 85%;

    }   
`


const NavList = styled.aside(
  breakpoints({
    xs: css`
      background-color: primary3;
      display:flex;
      flex-direction: column;
      list-style-type: none;
      font-size: 4;
      width: 100%;

       h1 {
  
        font-size: 6;
        color: neutral9;
        padding: 3;
        letter-spacing: 2px;
        font-weight: 300;
        display: none;
      }

      .nav {
          display: flex;
          justify-content: center;
          padding: 4;
         .navItem {
    
         text-transform: uppercase;
         
         letter-spacing: 2px;
         text-align: center;
         cursor: pointer;
         min-width: 20px;
        }
     }

     

    `,
    sm: css`
      width: 30%;
      flex-direction: column;
    

      .nav {
        flex-direction: column;
        align-items: flex-start;
        padding: 4;
        /* margin-left: 5;
        margin-top: 3; */

        .navItem {
         margin-bottom: 4;
        }
      }

      h1 {
        display: block;
        padding: 4;
      }
    `
  })
)


const StyledLink = styled(Link)`
    &:visited {
      color: neutral9;
    }

    &:hover {
      background-color: yellow4;
    }

    cursor: pointer;
`





const LayoutAbout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query AboutQuery { 
      sanityPageBanner(title: {eq: "AboutPageHeroImage"}) {
         page
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }     
      }
    }
  `)




  return (
    <>
      <Header data={data.sanityPageBanner} />
      <Wrapper>
        <Container>
          <NavList>
            <h1>About Us</h1>
            <div className="nav">
              <StyledLink className="navItem" to="about/church">Our Church</StyledLink>
              <StyledLink className="navItem" to="about/threestreams">Three Streams</StyledLink>
              <StyledLink className="navItem" to="about/leadership">Our Leadership</StyledLink>
            </div>
          </NavList>
          {children}
        </Container>
      </Wrapper>
    </>
  )
}


export default LayoutAbout

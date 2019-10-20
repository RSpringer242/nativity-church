import React from "react"
import Img from 'gatsby-image'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled, { css } from '@xstyled/styled-components'
import { breakpoints, th, layout, flexboxes, overflow, padding, backgrounds } from '@xstyled/system'
import { FaHeadphones } from "react-icons/fa"

const Wrapper = styled.section(
  breakpoints({
    xs: css`
      position: relative;
      width: 100%;
      height: 500px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

     

        h1 {
          font-size: 60;
          font-weight: 500;
          z-index:100;
          color: neutral0;
        }

        button {
          font-size: 20;
          margin-top: 3;
          color: neutral9;
          background-color: neutral0;
          z-index: 100;
          padding: 2;
        }
    `,

  })
)



const HPParallax = ({ data }) => {
  const images = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "churchInfo.jpg"}) {
      	  childImageSharp {
            fluid {
      	      ...GatsbyImageSharpFluid
            }
          }
      }

    } 
  `)

  return (
    <Wrapper>

      <Img
        fluid={images.image1.childImageSharp.fluid}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, yellow 50%)'
        }}
      />


      <h1>Come Visit Us</h1>
      <button>Contact Us</button>

    </Wrapper>
  );
}

export default HPParallax;
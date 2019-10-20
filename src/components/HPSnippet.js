import React from "react"
import Img from 'gatsby-image'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled, { css } from '@xstyled/styled-components'
import { breakpoints, th, layout, flexboxes, overflow, padding, backgrounds } from '@xstyled/system'
import { FaHeadphones } from "react-icons/fa"

const Wrapper = styled.section(
  breakpoints({
    xs: css`
      display:flex;
      flex-direction: column;

      div {
         
        height: 400px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* transition: all .2s ease-in-out; */

         /* &:hover {
        transform: scale(1.1);
        z-index: 100;
        cursor: pointer;
        
        } */

        .overlay {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: rgba(0, 0, 0, 0.45);
    
        }

        h1 {
          text-align: center;
          color: neutral1;
          z-index: 200;
          font-size: 5;
  
          line-height: 1.5;
        }

        
       

      }
    `,
    sm: css`
      flex-direction: row;
      justify-content: stretch;

      div {
        flex: 1 0 33%;
      }
    `

  })
)





const HPSnippet = ({ data }) => {
  const images = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "churchInfo.jpg"}) {
      	  childImageSharp {
            fluid {
      	      ...GatsbyImageSharpFluid
            }
          }
      }

      image2: file(relativePath: { eq: "main4.jpg"}) {
      	  childImageSharp {
            fluid {
      	      ...GatsbyImageSharpFluid
            }
          }
      }

      image3: file(relativePath: { eq: "main5.jpg"}) {
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

      <div>

        <Img
          fluid={images.image1.childImageSharp.fluid}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
          }}
        />
        <div className="overlay"></div>
        <h1>OUR<br />BELIEFS</h1>

      </div>

      <div>
        <Img
          fluid={images.image2.childImageSharp.fluid}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
          }}
        />
        <div className="overlay"></div>
        <h1>OUR<br />MINISTRIES</h1>
      </div>

      <div>
        <Img
          fluid={images.image3.childImageSharp.fluid}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
          }}
        />
        <div className="overlay"></div>
        <h1>OUR<br />LEADERS</h1>
      </div>
    </Wrapper>
  );
}

export default HPSnippet;
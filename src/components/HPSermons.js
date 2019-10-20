import React from "react"
import Img from 'gatsby-image'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled, { css } from '@xstyled/styled-components'
import { breakpoints, th, layout, flexboxes, overflow, padding, backgrounds, margin } from '@xstyled/system'
import { FaHeadphones } from "react-icons/fa"


const Wrapper = styled.section(
  breakpoints({
    xs: css`
      padding: 96px 32px;
      position: relative;
      z-index:0;
    
      height: auto;
      .container {
        position: relative;
        max-width: 1020px;
        margin: 0 auto;
        z-index: 100;

        h1 {
          font-size: 50;
          font-weight: 500;
          color: neutral8;
          text-align: center;
        }
      }

    `,
    sm: css`
      text-align: left; 
    `

  })
)


const SermonsWrapper = styled.div(
  breakpoints({
    xs: css`
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      padding: 6 2;
      
  
      

      .sermon {
        padding: 2;
        background-color: neutral0;
        border-radius: 3;
        position: relative;
        display: flex;
        flex-direction: column;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        margin-bottom: 3;
        width: 300px;
        height: auto;

   
         

        .date {
          position: absolute;
          top: 0;
          left: 0;
          background-color: primary3;
          padding: 1;
          font-size: 1;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
           
        }

    
         

          h2 {
            font-size: 3;
           
            text-align: left;
            color: neutral8;
            font-weight: 600;
            letter-spacing: 0.8;
            margin-top: 30px;
            margin-bottom: 2;
            text-decoration-line: underline;
            text-decoration-color: #8D2B0B;
            
          }

          p {
            margin-top: 1;
            color: neutral7;
            font-weight: 400;
            font-size: 2;
            letter-spacing: 0.5;
     
            
          }

          button {
            /* margin-top: auto; */
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: neutral1;

           

            span {
              color: neutral7;
              font-size: 1;
            }
            
          }

        
      } 
    `,
    sm: css`
     flex-direction: row;
     flex-wrap: wrap;
     align-items: center;
     padding: 5 2 2 2;

     .sermon {
       flex: 1 0 156px;
       height: 132px;
       margin-right: 6;
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
      background: linear-gradient(to right,#FCE588 50%, rgba(252, 229, 136, 0.1));
    }
`


const StyledLink = styled(Link)`
    display:block;
    width: 15%;
    color: neutral9;
    font-size: 3;
    background-color: primary5;
    border: 2px solid transparent;
    letter-spacing: 0.2rem;
    z-index:100;
    padding: 2;
    text-align: center;
    margin-top: 5;
    margin-left: 2;
    border-radius: 3;
    z-index: 200;
    ${layout}
    ${margin}

    &:hover {
      cursor: pointer;
      background-color: primary6;
          /* color: neutral9; */
    }

    &:active {
      box-shadow: 0 5px 10px rgba(0,0,0,0.2);
          
    }
`

const HPSermons = ({ data }) => {
  console.log(data)
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
        fluid={data.sermonBGImage.childImageSharp.fluid}
      />
      <div className="container">
        <h1>Latest Sermons</h1>
        <SermonsWrapper>
          {data.sermons.edges.map(({ node: sermon }) => (
            <div className="sermon">
              <div className="date">{sermon.date}</div>

              <h2>{sermon.title}</h2>
              <p>{sermon.speaker}</p>
              <button href="#" target="_blank">
                <span>Listen</span>
                <FaHeadphones size="1.0rem" style={{ margin: '0.5rem', color: '#8D2B0B' }} />
              </button>

            </div>
          ))}
        </SermonsWrapper>
        <StyledLink width={{ xs: .5, sm: .15 }} margin={{ xs: 'auto' }}>All Sermons</StyledLink>
      </div>
    </Wrapper>
  );
}

export default HPSermons;
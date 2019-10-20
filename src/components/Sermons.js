import React from "react"
import Img from 'gatsby-image'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled, { css } from '@xstyled/styled-components'
import { breakpoints, th, layout, flexboxes, overflow, padding, backgrounds } from '@xstyled/system'


const Wrapper = styled.section(
  breakpoints({
    xs: css`
      padding: 96px 32px;
      background-color: neutral0;
      height: auto;
      .container {
        max-width: 1020px;
        margin: 0 auto;

         hr {
          border: 0.5px solid neutral2;
          margin-top: 5;

      } 

      }
    `,

  })
)

const SermonsWrapper = styled.div(
  breakpoints({
    xs: css`
       display: flex;
       align-items: flex-start;
       flex-direction: column;
       margin-top: 5;
       
      .imageWrapper {
        height: 16rem;
        margin-right: 3;
        width: 100%;
        margin-bottom: 3;
  
      }

      .content {
        display: flex;
        flex-direction: column;
    
       

        h1 {
         font-size: 5;
         color: neutral7;

         a {
           color: yellow9;
         }
        }

       .meta {
         display: flex;
         align-items: center;
         margin-top: 3;

       .date {
            border: 1px solid primary6;
            background-color: primary6;
            height: auto;
            max-width: 8rem;
            text-align: center;
            padding: 0.5rem;
          
            

            p {
              font-size: 2;
              color: neutral0;
            }

         }

         .venue {
            font-size: 4;
            margin-left: 3;
            color: neutral7;
         }
       }

       .description {
          margin-top: 3;
          /* width: 34rem; */
          font-size: 3;
          line-height: 1.5;
          color: neutral5;
       }
      }
    `,
    sm: css`
      flex-direction: row;

      .imageWrapper {
        flex: 1 0 8rem;
        margin-bottom: 0;
      }

      .content {
         flex: 1 0 8rem;

         .date {
           padding: 3rem;
         }
      }
    
    `


  })
)

const StyledImg = styled(Img)`
      height: 100%;
      width: 100%;
      border-radius: 6;
`

const StyledButton = styled.a`
  background-color: primary4;
  border: 1px solid;
  border-color: primary4;
  color: neutral0;
  font-size: 2;
  margin-top: 3;
  padding: 1rem  1.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 400;
  width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0,0,0,.2);
  border-radius: 3;
`



const Sermons = ({ data }) => {

  return (
    <Wrapper>
      <div className="container">
        {data.edges.map(({ node: sermon }) => (
          <>
            <SermonsWrapper key={sermon.title}>
              <div className="imageWrapper">
                <StyledImg fluid={sermon.image.asset.fluid} alt={sermon.title} />
              </div>

              <div className="content">
                <h1><a href="#">{sermon.title}</a></h1>
                <div className="meta">
                  <div className="date"><p>{sermon.date}</p></div>
                  <div className="venue">{sermon.speaker}</div>
                </div>
                <div className="description">
                  <p>{sermon.description}</p>
                </div>
                <StyledButton className="button" href="#">
                  <p>Listen Here</p>
                </StyledButton>
              </div>
            </SermonsWrapper>
            <hr />
          </>
        ))}

      </div>

    </Wrapper>
  );
}

export default Sermons;
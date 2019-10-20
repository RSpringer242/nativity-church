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

        h1 {
          text-align: center;
          font-size: 50;
          font-weight: 500;
          color: neutral9;
        }
      }

      hr {
        border-left: 0;
        border-right: 0;
        border-bottom: 0;
        border-top: 4px solid;
        border-color: primary5;
        margin: 5 auto 0 auto;
        width: 75%;
      }


    `,

  })
)


const EventsWrapper = styled.div(
  breakpoints({
    xs: css`
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      padding: 6 2;
      

      .event {
        padding: 2;

        h2 {
          font-size: 4;
          margin-top: 3;
          margin-bottom: 2;
          text-align: left;
          color: yellow9;
          font-weight: 400;
          letter-spacing: 0.5;
        }

        p {
          margin-top: 1;
          color: neutral7;
          font-weight: 400;
          font-size: 3;
          letter-spacing: 0.5;

           span {
             font-weight: bold;
             margin-right: 1;
           }
        }
      } 
    `,
    sm: css`
     flex-direction: row;
     flex-wrap: wrap;
     align-items: flex-start;
     padding: 6 2 2 2;

     .event {
       flex: 1 0 240px;
       height: 350px;
     }
    `

  })
)

const StyledImg = styled(Img)`
    max-width: 315px;
    max-height: 175px;
    border-radius: 6;
`

const StyledLink = styled(Link)`
    display:block;
    color: neutral9;
    font-size: 3;
    background-color: primary5;
    border: 2px solid transparent;
    letter-spacing: 0.2rem;
    z-index:100;
    padding: 2;
    text-align: center;
    margin: 0 auto;
    border-radius: 3;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    ${layout}

    &:hover {
      cursor: pointer;
      background-color: primary6;
          /* color: neutral9; */
    }

    &:active {
      box-shadow: 0 5px 10px rgba(0,0,0,0.2);
          
    }
`

const HPEvents = ({ data }) => {

  return (
    <Wrapper>
      <div className="container">
        <h1>Upcoming Events</h1>
        <hr />
        <EventsWrapper>
          {data.edges.map(({ node: event }) => (
            <div className="event">
              <StyledImg fluid={event.image.asset.fluid} />
              <h2>{event.title}</h2>
              <p><span>Date: </span>{event.date}</p>
              <p><span>Venue:</span>{event.venue}</p>
            </div>
          ))}

        </EventsWrapper>
        <StyledLink width={{ xs: 0.5, sm: 0.25 }}>See All Events</StyledLink>
      </div>

    </Wrapper>
  );
}

export default HPEvents;
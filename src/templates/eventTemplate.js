import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
import styled, { css } from '@xstyled/styled-components'
import {
  breakpoints, th, layout, flexboxes, overflow,
  padding, backgrounds
} from '@xstyled/system'
import Layout from "../components/Layout"
import Header from '../components/Header'
import Img from "gatsby-image"


const Wrapper = styled.section(
  breakpoints({
    xs: css`
      padding: 66px 32px 86px 32px;
      background-color: neutral0;

      .container {
        max-width: 1020px;
        margin: 0 auto;

      .heading {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-top: 2rem;

      .eventName {
        flex: 1 0 50%;
        margin-left: 5;
        h1 {
          font-size: 7;
          margin-bottom: 4;
          color: yellow9;
          font-weight: 500;
        }

        p {
          font-size: 4;
          margin-bottom: 2;
          color: neutral8;

          span {
            font-weight: bold;
            color: neutral8;
          }
        }
      }

    .imageWrapper {
      flex: 1 0 50%;
      max-width: 30rem;
    }

  }

  .content {
    font-size: 1rem;
    margin: 0 auto;
    margin-top: 5;
    line-height: 2;
    letter-spacing: 0.1em;
    font-weight: 200;
    max-width: 85rem;

  }


      }
    `

  })
)


const StyledImg = styled(Img)`
    width: 100%;
    height: 100%;
    border-radius: 4px;
`

const StyledButton = styled(Link)`
      background-color: yellow6;
      border: 1px solid;
      border-color: yellow6;
      color: neutral0;
      font-size: 3;
      margin-top: 6;
      padding: 1rem  1.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      font-weight: 400;
      width: 24rem;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 1px 3px rgba(0,0,0,.2);
     
     
`


export const query = graphql`
  query ($slug: String!) {
    sanityEvent(slug: {current: {eq: $slug}}) {
      title
      date(formatString:"dddd Do MMMM h:mm a")
      venue
      slug {
        current
      }
      image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }

    }
  }
`


//COMPONENT
export default ({ data }) => (
  <Layout>
    <Header data={data.sanityEvent} />
    <Wrapper>
      <div className="container">
        <div className="heading">
          <div className="imageWrapper">
            <StyledImg fluid={data.sanityEvent.image.asset.fluid} alt={data.sanityEvent.title} />
          </div>
          <div className="eventName">
            <h1>{data.sanityEvent.title}</h1>
            <p><span>Date: </span>{data.sanityEvent.date}</p>
            <p><span>Venue: </span>{data.sanityEvent.venue}</p>
          </div>
        </div>


        <div className="content">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero fugiat ratione consequuntur, eos illo deleniti aliquam aspernatur, tempore nostrum incidunt eius, saepe asperiores velit alias voluptatem magnam minima obcaecati exercitationem!</p>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, dolore sit asperiores mollitia delectus commodi, temporibus quis sint voluptatum excepturi eligendi unde laboriosam voluptatibus voluptas quas, dolorum laborum nesciunt dignissimos.</p>
        </div>

        <StyledButton to="/events">
          BACK TO EVENTS
        </StyledButton>
      </div>
    </Wrapper>
  </Layout>

)


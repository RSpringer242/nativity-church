import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
import styled, { css } from '@xstyled/styled-components'
import {
  breakpoints, th, layout, flexboxes, overflow,
  padding, backgrounds
} from '@xstyled/system'
import Layout from "../components/layout"
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
      
      }

      }
    `

  })
)




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
    sanityMinistry(slug: {current: {eq: $slug}}) {
      title
      _rawBody(resolveReferences: {maxDepth: 5})
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
    <Header data={data.sanityMinistry} />
    <Wrapper>
      <div className="container">
        <h1>{data.sanityMinistry.title}</h1>
        <div className="content">

        </div>

        <StyledButton to="/events">
          BACK TO MINISTRIES
        </StyledButton>
      </div>




    </Wrapper>
  </Layout>

)


import React from "react"
import Img from 'gatsby-image'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled, { css } from '@xstyled/styled-components'
import { breakpoints, th, layout, flexboxes, overflow, padding, backgrounds } from '@xstyled/system'


const MinistryWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 30rem;

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.45);
     
    }  

    .ministryImage {
      flex: 1 0 50%;
      position: relative;
      max-width: 50rem;
      height: 100%;
    }
    .info {
      flex: 1 0 50%;
      max-width: 50rem;
      height: 100%;
      background-color: yellow0;

      h2 {
        text-align: center;
        font-size: 6;
        color: neutral8;
        letter-spacing: 2;
        font-weight: 500;
        margin-bottom: 4;
        margin-top: 4;
      }

      .textContent {
    

        p {
          text-align: left;
          width: 80%;
          margin: 0 auto 3 auto;
          letter-spacing: 1;
          line-height: 1.5em;
          color: neutral6;
        }
      }
    }
`

const BackGroundImage = styled(Img)`
      height: 100%;
      width: 100%;
      position: absolute;

`

const StyledLink = styled(Link)`
    display:block;
    width: 30%;
    color: neutral9;
    font-size: 3;
    background-color: primary5;
    border: 2px solid transparent;
    letter-spacing: 0.2rem;
    z-index:100;
    padding: 2;
    text-align: center;
    margin: 2 auto 0 auto;
    border-radius: 3;
    z-index: 200;

    &:hover {
      cursor: pointer;
      background-color: primary6;
          /* color: neutral9; */
    }

    &:active {
      box-shadow: 0 5px 10px rgba(0,0,0,0.2);
          
    }
`


const MinistryEven = ({ data }) => (

  <MinistryWrapper>
    <div className="ministryImage">
      <BackGroundImage fluid={data.node.image.asset.fluid} style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',

      }} />
      <div className="overlay"></div>
    </div>
    <div className="info">
      <h2>{data.node.title}</h2>
      <div className="textContent">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis sequi voluptate ipsum magni quaerat. Eligendi debitis veritatis voluptate est architecto dolor earum repellendus dignissimos eos. Commodi magni omnis libero molestiae.</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis sequi voluptate ipsum magni quaerat. Eligendi debitis veritatis voluptate est architecto dolor earum repellendus dignissimos eos. Commodi magni omnis libero molestiae.</p>
        <StyledLink to={`ministries/administration#${data.node.title}`}>Learn More</StyledLink>

      </div>
    </div>
  </MinistryWrapper>
)







export default MinistryEven;
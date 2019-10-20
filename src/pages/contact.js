import React from "react"
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import { useStaticQuery, graphql, Link } from "gatsby"
import styled, { css } from '@xstyled/styled-components'
import { breakpoints, th, layout, flexboxes, overflow, padding, px, py, backgrounds, textAlign } from '@xstyled/system'
import { FaHeadphones } from "react-icons/fa"
import { FaFacebook, FaMapMarkerAlt, FaRegClock, FaEnvelopeSquare } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import Header from '../components/Header'


const Wrapper = styled.section(
  breakpoints({
    xs: css`
      padding: 96px 32px;
      position: relative;
      z-index:0;
      background-color: neutral8;
    
      height: auto;
      .container {
        position: relative;
        max-width: 1020px;
        margin: 0 auto;
        z-index: 100;

        h1 {
          font-size: 40;
          font-weight: 500;
          color: neutral0;
        }

        .content {
          display:flex;
          flex-direction: column;
          justify-content: space-evenly;
          margin-top: 5;

          .contentInfo {
              flex: 1 0 17.5rem;  
              max-width: 45rem; 
            p {
              /* width: 43rem; */
              font-size: 3;
              color: neutral0;
            }

            .message {
              margin-bottom: 5;
              line-height: 1.5;
            }

            .social {
              margin-bottom: 2;

              span {
                font-size: 3;
                margin-left: 2;
              }
            }
          }     
        }
      }
    `,
    sm: css`

    .container {
      .content {
        flex-direction: row;
      }
    }

   
    `

  })
)


const StyledForm = styled.form`
      padding: 4;
      padding-top: 0;
      flex: 1 0 17.5rem;  
      max-width: 45rem;
      ${px}
      ${py} 
      

    .formField {
        display: flex;
        margin-bottom: 2;
        font-size: 2;
        width: 100%;
  
        
        

        label {
       
          min-width: 3rem;
        }

        input {
          background-color: #FFFFFF;
          border-radius: 4;
          line-height: 1.7;
          width: 100%;
          height: 2.4rem;
          padding-left: 1rem;
          font-size: 4;
          
        }

        textarea {
          width: 100%;
          height: 20rem;
          line-height: 1.7;
          padding-left: 1rem;
          padding-top: 0.8rem;
          font-size: 4;
          border: 1px #ddd solid;
          border-radius: 4;
        }
    }


      button {
        /* margin-top: 2;
        margin-left: auto;
        margin-right: auto; */
        background-color: teal6;
        border: 1px solid;
        border-color: teal6;
        color: neutral0;
        font-size: 2;
        padding: 1rem  1.75rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        font-weight: 400;
        width: 14rem;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0,0,0,.4);
        text-align: center;
        margin: 4 auto 0 auto;
        display: block;
        ${textAlign}
    
     
    }

`

const Contact = ({ data }) => {
  const { banner, info } = data
  console.log(banner)
  return (
    <Layout>
      <Header data={banner} />
      <Wrapper>
        <div className="container">
          <h1>Reach Out To Us</h1>
          <div className="content">
            <div className="contentInfo">
              <p className="message">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quod est earum sed voluptas praesentium eius numquam voluptate, libero placeat, suscipit aliquid eveniet quisquam repudiandae minima necessitatibus eligendi. Error, quis.</p>
              <p className="social">
                <FaMapMarkerAlt size="1.75rem" style={{ color: "#4055A8", cursor: 'pointer' }} />
                <span>{info.address},  {info.city}, {info.country}</span>
              </p>
              <p className="social">
                <MdPhone size="1.75rem" style={{ color: "#4055A8", cursor: 'pointer' }} />
                <span>{info.phoneNumber}</span>
              </p>
              <p className="social">
                <FaEnvelopeSquare size="1.75rem" style={{ color: "#4055A8", cursor: 'pointer' }} />
                <span>{info.email}</span>
              </p>
              <p className="social">
                <FaFacebook size="1.75rem" style={{ color: "#4055A8", cursor: 'pointer' }} />
                <span>Message us on Facebook</span>
              </p>
            </div>

            <StyledForm px={{ xs: 0, sm: 4 }} py={{ xs: 3, sm: 0 }}>
              <div className="formField">
                <input id="target" placeholder="Name" />
              </div>

              <div className="formField">
                <input placeholder="E-mail" />
              </div>

              <div className="formField">
                <textarea placeholder="Write us a message..."></textarea>
              </div>

              <button type="submit" textAlign={{ xs: 'center', sm: 'left' }}>Submit</button>
            </StyledForm>
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

export default Contact



export const query = graphql`
    query ContactPageQuery {  

    banner: sanityPageBanner(title: {eq: "ContactPageHeroImage"}) {
      page
      image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }

    info: sanityChurchInfo {
        address
        city
        country
        email
        phoneNumber
    }
               
}
`

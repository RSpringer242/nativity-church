import React, { Component } from 'react';
import { Link } from "gatsby";
import styled, { css } from '@xstyled/styled-components'
import { FaMapMarkerAlt, FaRegClock, FaEnvelopeSquare } from "react-icons/fa"
import { MdPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { breakpoints, th, layout, flexboxes, overflow, padding, backgrounds } from '@xstyled/system'



//ANIMATIONS



//STYLING

const Wrapper = styled.section(
  breakpoints({
    xs: css`
      height:600px;
      background-color: neutral0;
      display: flex;
      flex-direction: column;
    
      .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 4;
        height: 50%;
  
        p {
          margin-bottom: 3;
          display:flex;
          align-items: center;
          color: neutral8;
        }

        span {
          font-size: 4;
          margin-left: 2;
        }

     

      div {
        margin-top: 4;

         a {
        background-color: primary6;
        border: 2px solid;
        border-color: primary6;
        color: neutral0;
        margin-right: 2;
        padding: 2;
        font-size: 2;
        cursor: pointer;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        }

        a:hover {
          background: primary6;
          color: neutral1;

        }

      }

    }
    `,
    sm: css`
      flex-direction: row;
      height: 400px;

      .info {
        width: 50%;
        height: auto;
      }
    `
  })

)





const StyledLink = styled(Link)`
        background: primary6;
        border: 2px solid;
        border-color: primary6;
        color: transparent;
        margin-right: 2;
        padding: 2;
        font-size: 2;
        cursor: pointer;

        &:hover {
          background: primary6;
          color: neutral1;

        }
`

const Iframe = styled.iframe`
    border: none;
    border-radius: 3;
    /* box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); */
    /* height: 100%; */
    height: 50%;
    /* width: 50%; */
    width: 100%;
    ${layout}
`

const HPChurchInfo = ({ data }) => {


  return (
    <Wrapper>
      <Iframe width={{ xs: 1, sm: .5 }} height={{ xs: .5, sm: 1 }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7231.153322896018!2d-77.394202!3d25.014497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f64bb6c7d428d%3A0xaea90a9c2309b08f!2s284+Carmichael+Rd%2C+Nassau!5e0!3m2!1sen!2sbs!4v1553362868000" frameborder="0" allowfullscreen></Iframe>




      <div className="info">
        <p>
          <FaMapMarkerAlt size="1.75rem" style={{ color: `#4055A8`, }} />
          <span style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{data.address}, {data.city},{data.country}</span>
        </p>
        <p>
          <FaRegClock size="1.75rem" style={{ color: `#4055A8` }} />
          <span>Sundays at 9:00am</span>
        </p>
        <p>
          <MdPhone size="1.75rem" style={{ color: `#4055A8` }} />
          <span>{data.phoneNumber}</span>
        </p>
        <p>
          <FaEnvelopeSquare size="1.75rem" style={{ color: `#4055A8` }} />
          <span>{data.email}</span>
        </p>
        <div>
          <StyledLink>MORE INFO</StyledLink>
          <a href="https://www.google.com/maps/dir//284+Carmichael+Rd,+Nassau/@25.0145023,-77.3963902,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x892f64bb6c7d428d:0xaea90a9c2309b08f!2m2!1d-77.3942015!2d25.0144975?hl=en-US" target="_blank">DIRECTIONS</a>
        </div>

      </div>
    </Wrapper>

  )
}


export default HPChurchInfo;




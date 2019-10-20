import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
import styled, { css } from '@xstyled/styled-components'
import {
  breakpoints, th, layout, flexboxes, overflow,
  padding, backgrounds
} from '@xstyled/system'
import { FaFacebookSquare, FaEnvelope } from "react-icons/fa"


const Wrapper = styled.footer`
    background-color: primary7;
    padding: 3;

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }

    p {
      color: neutral0;
      margin-top: 1;
      font-size: 3;
      text-align: center;
    }

    .copyright {
      margin-top: 1;
      font-size: 2;
    }


    .social {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    
    a {
      cursor: pointer;
    }

`


const Footer = () => {

  const data = useStaticQuery(graphql`
    query {
      info: sanityChurchInfo {
      	 city
        country
        email
        address
        phoneNumber
      }

    } 
  `)
  const { address, city, country, phoneNumber } = data.info
  const currentYear = new Date().getFullYear();



  return (
    <Wrapper>
      <div className="content">
        <p>The International Communion of The Charismatic Episcopal Church</p>
        <p>{address}, {city}, {country}</p>
        <p>{phoneNumber}</p>
        <p className="copyright">© {currentYear} The Church of the Nativity. All rights reserved</p>
        <div className="social">

          <a href="https://www.facebook.com/TheNativity242/" target="_blank"><FaFacebookSquare size="1.75rem" style={{ color: "#F5F7FA", margin: '1rem' }} /></a>
          <Link to="/contact#target"><FaEnvelope size="1.75rem" style={{ color: "#F5F7FA", margin: '1rem' }} /></Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default Footer;
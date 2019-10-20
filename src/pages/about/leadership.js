import React from "react"
import { Link } from "gatsby"
import styled, { css } from '@xstyled/styled-components'
import LayoutAbout from '../../components/LayoutAbout'
import Layout from '../../components/Layout'
import image2 from '../../images/leader1.jpg'









const Wrapper = styled.div`
   width: 70%;
   padding-bottom: 6;

  .container {
     margin-left: 5;
     margin-top: 5;

    .heading {
      display: flex;
      justify-content: flex-start;

      img {
        margin-right: 5;
      }

      .info {

        h1 {
          font-size: 5;
          margin-top: 2;
          letter-spacing: 2px;
          font-weight: 400;
          text-transform: uppercase;
           color: neutral9;
        }

        h2 {
          font-size: 4;
          margin-top: 2;
          letter-spacing: 2px;
          font-weight: 400;
          text-transform: uppercase;
          color: neutral8;
        }

        .title {
          font-size: 4;
          font-weight: 300;
          margin-top: 3;
          
          .email {
             color: primary6;
             font-size: 3;
          }
        }

      }

    }

    .section {
      margin-top: 5;
      max-width: 50rem;

        h3 {
          font-size: 5;
          font-weight: 700;
        }


        ul {
          list-style-position: inside;
          margin-bottom: 4;
          li {
            margin-top: 3;
            font-size: 1.1rem;
            line-height: 1.75;
          }
        }

        h6 {
          font-size: 1.1rem;
          margin-top: 5;
          margin-bottom: 2;
        }

        p {
          font-size: 1.1rem;
          line-height: 1.75;
        }

        .post {
          margin-top: 2;
        }


      }
    
  }

/* 
    .body {
      max-width: 50%;
      margin-top: 4;
      .personalInfo {
        font-size: 3;
        display: flex;
        

        
      }
    } */

`







const OurChurchPage = () => {


  return (
    <Layout>
      <LayoutAbout>
        <Wrapper>
          <div className="container">
            <div className="heading">
              <img src={image2} style={{ height: '16rem', width: '16rem' }} />
              <div className="info">
                <h1>Reverend Dr. E. Etienne E. Bowleg</h1>
                <h2>Ph.D., O.B.E, J.P.</h2>
                <p className="title">Rector | <span className="email">revbowleg@gmail.com</span></p>
              </div>
            </div>

            {/* <div className="body">
              <div className="personalInfo">
                <p>Nationality:</p>
                <p>Bahamian</p>
              </div>
              <div className="personalInfo">
                <p>Religion:</p><p>Charismatic Episcopal (ICECC)</p>
              </div>
              <div className="personalInfo">
                <p>Domicile:</p><p>Nassau, N.P. Bahamas</p>
              </div>
              <div className="personalInfo">
                <p>Marital Status:</p><p>Married</p>
              </div>
              <div className="personalInfo">
                <p>Children:</p>
                <div>
                  <p>Cherise C. Bowleg-Adgar</p>
                  <p>CEtienne E. Bowleg</p>
                </div>
              </div>
              <div className="personalInfo">
                <p>Grandchildren:</p>
                <div>
                  <p>Caniel Adgar</p>
                  <p>Johnathon Adgar</p>
                </div>
              </div>
            </div> */}

            <div className="section">
              <h3>EDUCATION</h3>

              <ul>
                <li>Huron College - University of Western Ontario, London, Ontario Baccalaureate (Hons)1969</li>
                <li>McGill University - Montreal, Quebec Master of Arts in Historical Theology - 1972</li>
                <li>McGill University - Montreal, Quebec Doctor of Philosophy in Historical Theology - 1987</li>
              </ul>
            </div>

            <div className="section">
              <h3>ACADEMIC POSITIONS</h3>

              <ul>
                <li>The College of The Bahamas 1979 - 2011 Associate Professor and Head of Department. History, Philosophy  and Regilious Studies</li>
                <li>Chairperson, School of Social Sciences - 1990 to 1996 (Previous) The College of The Bahamas</li>
                <li>Senior Lecturer – School of Social Sciences - 1996 to 2000 The College of The Bahamas</li>
              </ul>
            </div>

            <div className="section">
              <h3>POST DOCTORAL STUDIES</h3>
              <p className="post">Various Seminars, Conferences, Research, Written short handouts, published articles, Commentaries reviews, Presently preparing two (2) manuscripts.</p>
            </div>

            <div className="section">
              <h3>MINISTRY</h3>

              <h6>Ordained Deacon</h6>
              <p>Trinity Sunday, June 1, 1969 by the Rt. Rev’d Bernard Markham Late Bishop of Nassau and The Bahamas St. Agnes Church, New Providence, Bahamas</p>

              <h6>Ordained Priest</h6>
              <p>Trinity Sunday, May 24, 1970 by the Rt. Rev’d Bernard MarkhamLate Bishop of Nassau and The Bahamas The Cathedral Church of Christ, Nassau, The Bahamas</p>

              <h6>Deacon, the Parish of:</h6>
              <p>St. Margaret and St. Georges, Nassau – 1969 – 1970</p>

              <h6>Priest-In-Charge</h6>
              <p>The Parish of St. Stephen, Fresh Creek, Andros, Bahamas 1970 – 1971</p>

              <h6>Diocesan Administrative Officer – 1972 -1977</h6>

              <h6>Curate</h6>
              <p>St Agnes Parish, Nassau, The Bahamas – 1972 – 1977</p>

              <h6>Priest –in – Charge</h6>
              <p>Holy Trinity Parish – 1972 – 1976</p>

              <h6>Rector</h6>
              <p>Holy Trinity Parish – 1976 – 2010</p>

              <h6>Rector</h6>
              <p>The Church of the Nativity- 2010 to present</p>
            </div>
          </div>
        </Wrapper>
      </LayoutAbout>
    </Layout>
  )

}

export default OurChurchPage



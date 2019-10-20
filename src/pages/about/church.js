import React from "react"
import { Link } from "gatsby"
import styled, { css } from '@xstyled/styled-components'
import { breakpoints, th, layout, flexboxes, overflow, padding, px, py, backgrounds, textAlign } from '@xstyled/system'
import LayoutAbout from '../../components/LayoutAbout'
import Layout from '../../components/layout'




const Wrapper = styled.section(
  breakpoints({
    xs: css`
      width: 100%;

      padding-bottom: 6;
      padding-top: 3;
      hr {
      border: 0.5px solid neutral2;
      margin-top: 5;
      margin-bottom: 5;
      width: 85%;
      }

      .textContainer {
          /* margin-left: 5;
          margin-top: 5; */
          margin: 0 auto;
          padding: 3;
      }

      h1 {
        font-size: 7;
        letter-spacing: 2px;
        font-weight: 300;
        color: primary4;
        text-align: center;
      }

      p {
        font-size: 3;
        color: neutral6;
        margin-top: 4;
        line-height: 2;
        max-width: 50rem;
      
        text-align: center;
      }


      .mission {
        font-weight: 600;
        list-style-position: inside;
        margin-top: 4;
        margin-left: 4;
        max-width: 50rem;


        li {
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
      }

      .wwa {
        list-style-position: inside;
        margin-top: 4;
        max-width: 50rem;

        li {
          line-height: 1.75;
          max-width: 50rem;  
        }
      }

      li {
        font-size: 3;
        color: neutral7;
        margin-bottom: 3;

      }

    `,
    sm: css`
      width: 70%;
      padding-bottom: 5;

      .textContainer {
          padding-left: 5;
          padding-top: 5;
          padding-bottom: 5;
          padding-right: 5; 

            h1 {
        text-align: left;
      }

      p {
        text-align: left;
        margin-left: 24px;
          margin-top: 3;
      } 

      .wwa {
         margin-top: 4;
        margin-left: 4;
      } 
    }

    
    `
  })
)





// const Wrapper = styled.div`


//       width: 70%;
//       padding-bottom: 6;
//       hr {
//       border: 0.5px solid neutral2;
//       margin-top: 5;
//       margin-bottom: 5;
//       width: 85%;
//       }

//       .textContainer {
//           margin-left: 5;
//           margin-top: 5;
//       }

//       h1 {
//         font-size: 7;
//         letter-spacing: 2px;
//         font-weight: 300;
//         color: primary4;
//       }

//       p {
//         font-size: 3;
//         color: neutral6;
//         margin-top: 3;
//         line-height: 2;
//         max-width: 50rem;
//         margin-left: 24px;
//       }


//       .mission {
//         font-weight: 600;
//         list-style-position: inside;
//         margin-top: 4;
//         margin-left: 4;
//         max-width: 50rem;


//         li {
//           text-transform: uppercase;
//           letter-spacing: 1.5px;
//         }
//       }

//       .wwa {
//         list-style-position: inside;
//         margin-top: 4;
//         margin-left: 4;
//         max-width: 50rem;

//         li {
//           line-height: 1.75;
//           max-width: 50rem;  
//         }
//       }

//       li {
//         font-size: 3;
//         color: neutral7;
//         margin-bottom: 3;

//       }
// `







const OurChurchPage = () => {


  return (
    <Layout>
      <LayoutAbout>
        <Wrapper>
          <div className="textContainer">
            <h1>Our Mission</h1>
            <p>To promote spiritual growth under the authority of:</p>
            <ul className="mission">
              <li>Apostolic Teaching/Tradition</li>
              <li>Biblical Preaching / Teaching</li>
              <li>Historic Worship</li>
              <li>Charismatic Experience</li>
            </ul>

            <hr />

            <h1>Our Vision</h1>
            <p>To foster a strong duplicate of The New Testament Church in accordance with Scripture, that functions in every area according to the Divine Pattern set out in Holy Scriptures.
          </p>

            <hr />

            <h1>Who We Are</h1>
            <ul className="wwa">
              <li>A Community of Faith, seeking an expression of the New Testament Church that encompasses three streams of  worship:  sacramental/Liturgical, Evangelical and Charismatic;</li>
              <li>A Church submitted to the authority of Scripture, as interpreted by the continuing witness of the ancient church;</li>
              <li>A Church governed by consensus as led by the Holy Spirit;</li>
              <li>A Church where worship is Biblical, liturgical, sacramental, spirit-filled, ancient and contemporary, holy and joyful.</li>
              <li>A fellowship of the International  Communion of The Charismatic Episcopal Church (ICCEC) [not affiliated with, and has never been, a part of the Episcopal Church of the USA or the World-wide Anglican Community).</li>
            </ul>

            <hr />

            <h1>We Believe</h1>
            <p>
              That the Holy Scriptures are the final authority on ALL matters of Faith, Doctrine and Practice.  That where Scripture does not clearly guide, we defer to Apostolic Tradition that the historic creeds of the undivided church provide a clear and indisputable summary of The Christian Faith that we are saved by grace, through faith in the atoning work of Jesus Christ; that the Holy Sacraments impart the grace of God; and that the Holy Spirit is at work today through spiritual gifts and signs given to the Church – to help distinguish and define the charisms they are categorized as:  (1) Speaking Gifts; (2) Sign or Power Gifts; (3) Service Gifts; and (4) Leadership.

          </p>

            <hr />

            <h1>Consensus Government</h1>
            <p>
              We are a Church administered by the Orders of Bishops, Priests and Deacons in the Apostolic Succession, we are humbly submitted to the Holy Spirit and in fellowship with each other.  At all levels of government, we are a house of prayer, desiring to hear and listen to the voice of God, before arriving at a consensus.
          </p>
          </div>
        </Wrapper>
      </LayoutAbout>
    </Layout>
  )

}

export default OurChurchPage



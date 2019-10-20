// import React from "react"
// import { Link } from "gatsby"
// import Layout from "./layout"
// import styled, { css } from '@xstyled/styled-components'
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import image2 from '../images/logo.png'
// import Header from './Header'

// const Wrapper = styled.section`
//       display: flex;

//       /* padding-top: 5;
//       padding-left: 5;
//       padding-right: 5;
//       padding-bottom: 8; */

//       hr {
//       border: 0.5px solid neutral2;
//       margin-top: 5;
//       margin-bottom: 5;
//       width: 85%;

//     }   
// `
// const StyledTabs = styled(Tabs)`
//       display:flex;
// `


// const StyledTabList = styled(TabList)`
//       background-color: primary3;
//       display:flex;
//       flex-direction: column;
//       list-style-type: none;
//       font-size: 4;

//       width: 30%;

//       h1 {
//         font-size: 6;
//         color: neutral9;
//         margin-bottom: 2;
//         letter-spacing: 2px;
//         font-weight: 300;
//         margin-left: 5;
//         margin-top: 5;
//       }


//       .tab {
//          text-transform: uppercase;
//          margin-left: 5;
//          margin-top: 3;
//          letter-spacing: 2px;
//          cursor: pointer;
//       }

// `

// const StyledTabPanel = styled(TabPanel)`

//       width: 70%;
//       padding-bottom: 6;

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

// const LeadersGrid = styled.div`
//     display:flex;

//     align-items: center;
//     margin-top: 6;
//     max-width: 95rem;
//     margin-left: 8rem;
//     margin-right: auto;

// `

// const LeaderWrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     margin-right: 6rem;


//     .imageWrapper {
//       height: 20rem;
//       width: 20rem;
//       box-shadow: 0 2px 4px rgba(0,0,0,.2);
//     }

//     .title {
//       margin-top: 6;

//       h2 {
//         font-size: 5;
//         color: neutral7;
//         text-align: center;
//       }

//       h3 {
//         font-size: 3;
//         color: neutral5;
//         text-align: center;
//         text-transform: uppercase;
//         margin-top: 5;
//         letter-spacing: 0.1rem;
//       }

//     }

//     .contact {
//         margin-top: 7;
//         font-size: 3};
//         color: yellow6;
//         text-align: center;
//     }

//     .bio {
//         margin-top: 7;
//         background: transparent;
//         border: 2px solid; 
//         border-color: primary6;
//         color: primary6;
//         font-size: 2;
//         padding: 1rem  1.75rem;
//         text-transform: uppercase;
//         letter-spacing: 0.1rem;
//         font-weight: 400;
//     }
// `

// const StyledImg = styled.img`
//     height: 100%;
//     width: 100%;
//     border-radius: 4px;
// `





// const AboutPage = ({ data }) => {
//   const { banner } = data

//   return <Layout>
//     <Header data={banner} />
//     <Wrapper>
//       <StyledTabs>

//         <StyledTabList>
//           <h1>About Us</h1>
//           <Tab className="tab">Our Church</Tab>
//           <Tab className="tab">Three Streams</Tab>
//           <Tab className="tab">Our Leadership</Tab>
//           <img src={image2} style={{ height: "250px", width: "200px", marginTop: "50px", marginLeft: "48px" }} />
//         </StyledTabList>

//         <StyledTabPanel>
//           <div className="textContainer">
//             <h1>Our Mission</h1>
//             <p>To promote spiritual growth under the authority of:</p>
//             <ul className="mission">
//               <li>Apostolic Teaching/Tradition</li>
//               <li>Biblical Preaching / Teaching</li>
//               <li>Historic Worship</li>
//               <li>Charismatic Experience</li>
//             </ul>

//             <hr />

//             <h1>Our Vision</h1>
//             <p>To foster a strong duplicate of The New Testament Church in accordance with Scripture, that functions in every area according to the Divine Pattern set out in Holy Scriptures.
//           </p>

//             <hr />

//             <h1>Who We Are</h1>
//             <ul className="wwa">
//               <li>A Community of Faith, seeking an expression of the New Testament Church that encompasses three streams of  worship:  sacramental/Liturgical, Evangelical and Charismatic;</li>
//               <li>A Church submitted to the authority of Scripture, as interpreted by the continuing witness of the ancient church;</li>
//               <li>A Church governed by consensus as led by the Holy Spirit;</li>
//               <li>A Church where worship is Biblical, liturgical, sacramental, spirit-filled, ancient and contemporary, holy and joyful.</li>
//               <li>A fellowship of the International  Communion of The Charismatic Episcopal Church (ICCEC) [not affiliated with, and has never been, a part of the Episcopal Church of the USA or the World-wide Anglican Community).</li>
//             </ul>

//             <hr />

//             <h1>We Believe</h1>
//             <p>
//               That the Holy Scriptures are the final authority on ALL matters of Faith, Doctrine and Practice.  That where Scripture does not clearly guide, we defer to Apostolic Tradition that the historic creeds of the undivided church provide a clear and indisputable summary of The Christian Faith that we are saved by grace, through faith in the atoning work of Jesus Christ; that the Holy Sacraments impart the grace of God; and that the Holy Spirit is at work today through spiritual gifts and signs given to the Church – to help distinguish and define the charisms they are categorized as:  (1) Speaking Gifts; (2) Sign or Power Gifts; (3) Service Gifts; and (4) Leadership.

//           </p>

//             <hr />

//             <h1>Consensus Government</h1>
//             <p>
//               We are a Church administered by the Orders of Bishops, Priests and Deacons in the Apostolic Succession, we are humbly submitted to the Holy Spirit and in fellowship with each other.  At all levels of government, we are a house of prayer, desiring to hear and listen to the voice of God, before arriving at a consensus.
//           </p>
//           </div>

//         </StyledTabPanel>

//         <StyledTabPanel>
//           <p>
//             We are a Church administered by the Orders of Bishops, Priests and Deacons in the Apostolic Succession, we are humbly submitted to the Holy Spirit and in fellowship with each other.  At all levels of government, we are a house of prayer, desiring to hear and listen to the voice of God, before arriving at a consensus.
//           </p>
//         </StyledTabPanel>





//       </StyledTabs>

//     </Wrapper>
//   </Layout>
// }

// export default AboutPage


// export const query = graphql`
//     query AboutPageQuery {  

//       banner: sanityPageBanner(title: {eq: "MinistriesPageHeroImage"}) {
//          page
//           image {
//             asset {
//               fluid {
//                 ...GatsbySanityImageFluid
//               }
//             }
//           }
//         }


// }
// `
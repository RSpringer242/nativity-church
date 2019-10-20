// import React from "react"
// import Layout from "./layout"
// import { useStaticQuery, graphql, Link } from "gatsby"
// import styled, { css } from '@xstyled/styled-components'
// import { breakpoints, th, layout, flexboxes, overflow, padding, backgrounds } from '@xstyled/system'
// import Header from './Header'
// import Img from "gatsby-image"





// const Wrapper = styled.section(
//   breakpoints({
//     xs: css`
//       padding: 96px 32px;
//       background-color: neutral0;

//       .container {
//         max-width: 1020px;
//         margin: 0 auto;

//         h1 {
//           font-size: 40;
//           font-weight: 500;
//           color: neutral9;
//         }
//       }
//     `,

//   })
// )

// const MinistriesGrid = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-evenly;
//     align-items: center;

// `

// const MinistryWrapper = styled.div`
//     flex: 1 0 25rem;
//     max-width: 27rem;
//     height: 24rem;
//     position: relative;
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     margin-top: 4;
//     box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
//     border-radius: 3;



//     .overlay {
//       position: absolute;
//       top: 0;
//       left: 0;
//       bottom: 0;
//       right: 0;
//       background-color: rgba(0, 0, 0, 0.45);
//       border-radius: 8px;
//     }

//     .overlay:hover {
//       position: absolute;
//       top: 0;
//       left: 0;
//       bottom: 0;
//       right: 0;
//       background-color: rgba(100, 122, 203, .45);
//     }

//     h1 {
//       text-align: center;
//       color: neutral1;
//       z-index: 200;
//       font-size: 6;
//       font-weight: 500;
//       margin-top: 6;
//       line-height: 1.5;
//       letter-spacing: 1.5;

//     }

//     a {
//         margin-top: 3;
//         margin-left: auto;
//         margin-right: auto;
//         background-color: yellow6;
//         border: 1px solid;
//         border-color: yellow6;
//         color: neutral0;
//         font-size: 2;
//         padding: 1rem  1.50rem;
//         text-transform: uppercase;
//         letter-spacing: 0.1rem;
//         font-weight: 400;
//         text-align: center;
//         width: 50%;
//         z-index: 200;
//         border-radius: 3;
//     }
// `

// const BackGroundImage = styled(Img)`
//       height: 100%;
//       width: 100%;
//       position: absolute;

// `





// const Ministries = ({ data }) => {

//   const { banner, allMinistries } = data
//   return (
//     <Layout>
//       <Header data={banner} />
//       <Wrapper>
//         <MinistriesGrid>
//           {
//             allMinistries.edges.map(({ node: ministry }) => (
//               <>
//                 <MinistryWrapper>
//                   <BackGroundImage fluid={ministry.image.asset.fluid} style={{
//                     position: 'absolute',
//                     left: 0,
//                     top: 0,
//                     width: '100%',
//                     height: '100%',
//                     borderRadius: '8px'
//                   }} />
//                   <div className="overlay"></div>
//                   <h1>{ministry.title}</h1>
//                   <a>Learn More</a>
//                 </MinistryWrapper>
//               </>
//             ))}

//         </MinistriesGrid>
//       </Wrapper>
//     </Layout>
//   )

// }

// export default Ministries

// export const query = graphql`
//     query MinistriesPageQuery {

//       banner: sanityPageBanner(title: {eq: "MinistriesPageHeroImage"}) {
//       page
//       image {
//         asset {
//           fluid {
//             ...GatsbySanityImageFluid
//           }
//         }
//       }
//     }

//      allMinistries : allSanityMinistry {
//         edges {
//           node {
//             title
//             slug {
//               current
//             }
//             image {
//               asset{
//                 fluid {
//                   ...GatsbySanityImageFluid
//                 }
//               } 
//             }

//           }
//         }
//       }


// }
// `
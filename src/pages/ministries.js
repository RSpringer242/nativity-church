import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled, { css } from '@xstyled/styled-components'
import { breakpoints, th, layout, flexboxes, overflow, padding, backgrounds } from '@xstyled/system'
import Header from '../components/Header'
import MinistryOdd from '../components/MinistryOdd'
import MinistryEven from '../components/MinistryEven'
import Img from "gatsby-image"





const Wrapper = styled.section(
  breakpoints({
    xs: css`
      padding: 66px 32px;
      background-color: neutral0;

      .container {
        max-width: 1020px;
        margin: 0 auto;

        h1 {
          font-size: 40;
          font-weight: 500;
          color: yellow9;
          text-align: left;
        }
      }
    `,

  })
)

const MinistriesGrid = styled.div`
  height: auto;
  margin-top: 5;
`



const BackGroundImage = styled(Img)`
      height: 100%;
      width: 100%;
      position: absolute;

`





const Ministries = ({ data }) => {

  const { banner, allMinistries } = data

  return (
    <Layout>
      <Header data={banner} />
      <Wrapper>
        <div className="container">
          <h1>Get Connected To Our Ministries</h1>

          <MinistriesGrid>
            {
              allMinistries.edges.map((ministry, index) => {
                return index % 2 == 0 ? <MinistryEven data={ministry} />
                  : <MinistryOdd data={ministry} />
              })
            }
          </MinistriesGrid>
        </div>
      </Wrapper>
    </Layout>
  )

}

export default Ministries

export const query = graphql`
    query MinistriesPageQuery {

      banner: sanityPageBanner(title: {eq: "MinistriesPageHeroImage"}) {
      page
      image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }

     allMinistries : allSanityMinistry {
        edges {
          node {
            title
            slug {
              current
            }
            image {
              asset{
                fluid {
                  ...GatsbySanityImageFluid
                }
              } 
            }
           
          }
        }
      }

     
}
`
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import Header from '../components/Header'
import Sermons from '../components/Sermons'


const SermonsPage = ({ data }) => {
  const { banner, allSermons } = data


  return (
    <Layout>
      <Header data={banner} />
      <Sermons data={allSermons} />



    </Layout>
  )

}

export const query = graphql`
  query SermonsPageQuery {
  banner: sanityPageBanner(page: {eq: "Sermons"}) {
    page
    image {
      asset {
        fluid {
          ...GatsbySanityImageFluid
        }
      }
    }
  }

   allSermons: allSanitySermon (sort: { order: ASC, fields:[date]}) {
    edges {
      node {
        title
        date(formatString:"ddd Do MMM h:mm a")
        speaker
        description
        image {
          asset {
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


export default SermonsPage



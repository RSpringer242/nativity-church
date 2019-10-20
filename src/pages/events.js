import React from "react"
import { Link } from "gatsby"
import Layout from '../components/Layout'
import Header from '../components/Header'
import Events from '../components/Events'


const EventsPage = ({ data }) => {
  const { banner, allEvents } = data


  return (
    <Layout>
      <Header data={banner} />
      <Events data={allEvents} />



    </Layout>
  )

}

export const query = graphql`
  query EventsPageQuery {
  banner: sanityPageBanner(page: {eq: "Events"}) {
    page
    image {
      asset {
        fluid {
          ...GatsbySanityImageFluid
        }
      }
    }
  }

   allEvents: allSanityEvent (sort: { order: ASC, fields:[date]}) {
    edges {
      node {
        title
        date(formatString:"ddd Do MMM h:mm a")
        venue
        description
        excerpt
        slug {
          current
        }
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


export default EventsPage



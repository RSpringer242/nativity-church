import React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'
import HPHeader from '../components/HPHeader'
import HPEvents from '../components/HPEvents'
import HPSermons from '../components/HPSermons'
import HPSnippet from '../components/HPSnippet'
import HPParallax from '../components/HPParallax'
import HPChurchInfo from '../components/HPChurchInfo'

const IndexPage = ({ data }) => {
  const { hero, events, info } = data

  return (
    <Layout>
      <HPHeader data={hero} />
      <HPEvents data={events} />
      <HPSnippet />
      <HPSermons data={data} />
      <HPChurchInfo data={info} />
      <HPParallax />
    </Layout>
  )

}

export const query = graphql`
  query HomePageQuery {
  hero: sanityPageBanner(page: {eq: "home"}) {
    image {
      asset {
        fluid {
          ...GatsbySanityImageFluid
        }
      }
    }
  }

   events: allSanityEvent (limit: 3, sort: { order: ASC, fields:[date]}) {
    edges {
      node {
        title
        date(formatString:"dddd Do MMMM h:mm a")
        venue
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

  sermons: allSanitySermon(limit: 3, sort: { order: DESC, fields:[date]}) {
    edges {
      node {
        title
        date(formatString:"MMM Do YYYY")
        speaker
      } 
    }
  }

  sermonBGImage: file(relativePath: { eq: "churchInfo.jpg"}) {
      	  childImageSharp {
            fluid {
      	      ...GatsbyImageSharpFluid
            }
          }
      }

  info: sanityChurchInfo {
    city
    country
    email
    address
    phoneNumber
  }

}

  

`


export default IndexPage



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
          /* margin: 0 auto; */
          padding: 3;

           h1 {
            font-size: 7;
            letter-spacing: 2px;
            font-weight: 300;
            color: primary4;
            text-align: center;
            width: auto;
          }

         p {
          font-size: 3;
          color: neutral6;
          margin-top: 4;
          line-height: 2;
          max-width: 50rem;
        
          text-align: center;
        }
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

      }

    `


  })
)











const OurChurchPage = () => {


  return (
    <Layout>
      <LayoutAbout>
        <Wrapper>
          <div className="textContainer">
            <h1>Historical Sacramental</h1>
            <p>From the beginning of the Church, after the Resurrection of Jesus, many men and women have faithfully served the One, Holy, Catholic and Apostolic Church (catholic meaning in accordance with the universal church from the beginning).  From the richness of our historic heritage, we are currently seeing a recovery of the beauty and authenticity of the ancient liturgies, symbols of worship, and regular celebration of the Holy Communion; which the early Christians observed weekly.  While some have looked at these early liturgies and called them “dead form”, we have found that the forms are neither dead nor alive, but only true or false; it is the people who are either dead or spiritually alive. What we are discovering are true forms that can be used by people who are spiritually alive!</p>
            <hr />

            <h1>Evangelical</h1>
            <p>As a precious possession of Christian faith, we hold to the Holy Scriptures as the inspired, infallible Word of God and that they contain all things necessary for salvation and Godly living.   We are committed to the faithful reading, studying teaching, and preaching from the Bible; as a wellspring for spiritual maturity.  We also embrace the Evangelical distinctive that underlines the importance of a personal relationship with Jesus Christ, a holy life, evangelism, and missions.</p>
            <hr />

            <h1>Charasmatic</h1>
            <p>A distinguishing mark of the Charismatic Episcopal Church is our openness to the work of the Holy Spirit.  God’s people have always been a spiritually gifted people.  From the apostles all the way through modern Pentecostal and Charismatic movements.  Christians have been endowed with power beyond themselves … from the Holy Spirit Himself.  This means we not only allow, but anticipate, His presence: and we work through His spiritual gifts, both in our worship and daily acts of service.</p>
            <hr />
          </div>

        </Wrapper>
      </LayoutAbout>
    </Layout>
  )

}

export default OurChurchPage



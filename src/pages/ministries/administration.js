import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
import styled, { css } from '@xstyled/styled-components'
import {
  breakpoints, th, layout, flexboxes, overflow,
  padding, backgrounds
} from '@xstyled/system'
import Layout from '../../components/Layout'
import Header from '../../components/Header'
import Img from "gatsby-image"


const Wrapper = styled.section(
  breakpoints({
    xs: css`
      padding: 66px 32px 86px 32px;
      background-color: neutral0;

      .container {
        max-width: 1020px;
        margin: 0 auto;

      hr {
      border: 0.5px solid neutral2;
      margin-top: 5;
      margin-bottom: 5;
      width: 85%;
      }

      h1 {
        font-size: 7;
        letter-spacing: 2px;
        font-weight: 300;
        color: primary4;
        text-align: center;
      }

      .content {
        margin-top: 4;

        p {
          font-size: 3;
          color: neutral6;
          margin-top: 3;
          line-height: 2;
          max-width: 50rem;
        }

        h2 {
          margin-top: 3;
          margin-bottom: 3;
          color: neutral7;
        }

        ul {
        font-weight: 600;
        color: yellow8;
        list-style-position: inside;
        margin-top: 4;
        margin-left: 4;
        max-width: 50rem;
        margin-bottom: 5;
        }
      }

      }
    `

  })
)




const StyledButton = styled(Link)`
      background-color: yellow6;
      border: 1px solid;
      border-color: yellow6;
      color: neutral0;
      font-size: 3;
      margin-top: 6;
      padding: 1rem  1.75rem;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      font-weight: 400;
      width: 24rem;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 1px 3px rgba(0,0,0,.2);
     
     
`


export const query = graphql`
  query AdministrationPageQuery {
  banner: sanityPageBanner(page: {eq: "Administration"}) {
    page
    image {
      asset {
        fluid {
          ...GatsbySanityImageFluid
        }
      }
    }
  }

}
`


//COMPONENT
export default ({ data }) => (
  <Layout>
    <Header data={data.banner} />
    <Wrapper>
      <div className="container">
        <h1>{data.banner.page}</h1>
        <div className="content">
          <p>Administration is the God-given ability through planning and organization to assist others bringing the order needed to complete a task or project (Romans 12:8).</p>

          <p>This ministry is classified as a Leadership Gift, identified by St. Paul in Ephesians 4:8 – foundational gifts for the building up of The Body.</p>

          <h2>GOALS AND OBJECTIVES</h2>

          <p>To lay out specific plans for the Parish of The Nativity in all areas of life.  (See listing above).</p>

          <p>To facilitate ALL ministries programs:  to support the implementation of programs with necessary / need resources, man power and financing; interacting with all ministries heads as may be necessary for smooth and effective operation.</p>

          <p>To engage in the constant evaluation and monitoring of the parish programs to undergird entire ministries with prayer and support.</p>

          <p>The Commitment of Nativity to Christ as head of our parish family is threefold:</p>
          <ul>
            <li>To Christ – To know Him, love Him and serve Him in worship, study, prayer and praise:  to obey Him in all things.</li>
            <li>To The Body of Christ – To love, care and pray for one another in this parish and to pray for and support the ICCEC.</li>
            <li>To the Work of Christ – through evangelism, service and missions to be Christ’s Ambassadors at home and abroad.</li>
          </ul>

          <p>The goal of Administration must be the facilitation of programs and ministries in ways which we, as Christ’s disciples, minister to each other and to those of our community, the nation and the world.  The living God is alive and working through us in these ministries:  They are our way of giving glory to God.</p>

        </div>

        <hr />

        <h1>Christian Formation</h1>
        <div className="content">
          <p>Somewhere between Christ’s gracious invitation to “Come to Me”, and the Great Commission to “Go into all the World,” is a process of <span style={{ fontWeight: 'bold' }}>Christian Formation</span> characterized by three major conversions:</p>

          <ul>
            <li>The first is a conversion to Jesus Christ as Lord</li>
            <li>The second is this Ministry empowered by the Holy Spirit</li>
            <li>The third is to his Body, the Community of Faith</li>
          </ul>

          <p>These major ministry experiences in the Christian Formation process are brought to the parish through teaching, fellowship, prayer, Bible Study, Worship and response.  These involvements are designed to equip the people of God of all ages – from the cradle to the grace – and release them for ministry, place leadership into a visible and vulnerable role, and to carry on the ministry, mission and message of Jesus the Christ.</p>

          <p><span style={{ fontWeight: 'bold' }}>Goal – </span>To train on articulate, committed, contagious, honest, relevant, vibrant involved, alive kind of laity.</p>

          <p>Hence the Christian Formation we experience:</p>

          <ul>
            <li>An encounter with Christ nurturing a personal relationship with Christ;  basic Christian tenets.</li>
            <li>An experience Named Spirit. Experiencing the reality of the presence of God, focusing on the third person of the Trinity</li>
            <li>Covenant Life with the Father.  Living out the Christian Life in our relationship with one another and with our Lord.</li>
          </ul>

          <p>Christian Formation Ministries encompass a variety of opportunities to enrich, educate and enhance.  The lives of all parishioners at various stages on their faith journey.</p>

          <p>The Christian Formation Ministry provide parishioners of all ages with opportunities to utilize the Seven Gifts of the Holy Spirit – <span style={{ fontWeight: 'bold' }}>Wisdom, Understanding, Counsel, Fortitude, Knowledge, Piety and Fear of the Lord.</span></p>

          <p>The aim of Christian Formation is to move from knowledge to informed practice, through the transforming work of the Spirit, so that the bible comes alive among us, as we seek to integrate our knowledge with our being and doing.</p>

        </div>

        <hr />

        <h1>Evangelism & Outreach</h1>
        <div className="content">
          <p>Sin obedience to our Lord’s commandment to <span style={{ fontWeight: 'bold' }}>“go and make disciples (Matt. 28:19).”</span>  It is the goal of The Church of The Nativity to keep before our parishioners our main purpose and mission:  to represent Christ and His Church;  to bear witness to Him wherever we may be; and according to the gifts given to us, to carry on Christ’s work of reconciliation in the world;  and to take our place in the life, worship, and governance of His Church.</p>

          <p>Hence, Evangelism/Outreach must be along with <span style={{ fontWeight: 'bold' }}>prayer, the key stone of the Life of the parish.</span></p>

          <h2>AIM OF MINISTRY</h2>
          <ul>
            <li>To reach souls with the message of the Gospel</li>
            <li>To establish permanent active social events and foster involvement of all parishioners on a quarterly basis in each activity.</li>
            <li>To provide adequate training in all phases of Evangelism and Outreach</li>
            <li>To provide ministerial services to help for the healing of the whole man.</li>
            <li>To always be prepared to make a defense to anyone who calls you to account for the hope within you.</li>
            <li>To promote Evangelism/Outreach as the primary task of the Church.</li>
            <li>The promotion of active evangelism of our Jerusalem – New Providence and Family Islands.</li>
            <li>The production of follow-up materials for counseling New Converts and organizing discipleship training seminars.</li>
          </ul>

          <h2>GOALS AND OBJECTIVES</h2>

          <p>The goal of Evangelism is to share the Good News and help with converts.</p>
          <ul>
            <li>Share the Gospel through witnessing both within the congregation and the wider community.</li>
            <li>Through a series of workshops and seminars, train others how to do personal witnessing.</li>
            <li>Establish an ongoing evangelism ministry.</li>
            <li>Involve all ministries and members of Nativity in evangelism.</li>
            <li>Promote one-on-one mentoring and discipling</li>
            <li>Develop an active evangelism link to the Church’s web site – Ministry Activities, Programs and Projects</li>
            <li>Conduct monthly planning and sharing sessions.</li>
          </ul>

          <p>These objectives and goals have been established to provide the foundation for building a successful evangelism ministry.  These objectives and goals are in perspective.</p>

          <h4>Objective No. 1</h4>

          <p>To promote the unity of the Spirit among dedicated members of The Body of Christ for the effective work of evangelism in the Bahamas.</p>

          <h4>Goal No. 1</h4>

          <p>To promote the unity of the Spirit among dedicated members of The Body of Christ for the effective work of evangelism in the Bahamas.</p>

          <h4>Objective No. 2</h4>

          <p>To launch Power-packed Evangelism Crusades, Missions, Seminars with all seriousness and a view to of taking our congregation neighborhoods, suburbs,and our nation for Christ.</p>

          <h4>Goal No. 2</h4>

          <p>Spread evangelism via the Four Spiritual Laws in our congregation, communities and city.</p>

          <h4>Objective No. 3</h4>

          <p>To embark upon active Power Evangelism which will Challenge Members to invite close non-Christian friends, relatives, family members, etc. to establish relationship with Jesus.</p>

          <h4>Goal No. 3</h4>

          <p>Achieve 100% participation of members in Evangelistic outreach and all social events.</p>

          <h4>Objective No. 4</h4>

          <p>To clarify why Evangelism must be the priority of the entire congregation.</p>

          <h4>Goal No. 4</h4>

          <p>To provide annual retreats as ways to understand  the evangelical task clearly.To promote and foster active participation and involvement  of all parishioners in the social events of the parish.</p>

          <h4>Objective No. 5</h4>

          <p>To conduct discussions among the members of the Parish and Rector’s Councils in order to make evangelism most effective in the congregation.</p>

          <h4>Goal No. 5</h4>

          <p>To identify natural opportunities for effective evangelism in the congregation.</p>

        </div>

        <hr />

        <h1>Finance</h1>
        <div className="content">
          <h2>GOALS AND OBJECTIVES</h2>
          <p>Promote responsible tithing through Stewardship.</p>
        </div>

        <hr />

        <h1>Pastorial</h1>
        <div className="content">

          <p>The Pastoral Ministry is one of the supernatural ministries to provide for the spiritual welfare of the community of faith; providing care, guidance, spiritual nourishment and protection for all the people of God.</p>
          <h2>PURPOSE AND FUNCTIONS</h2>

          <p>The Nativity Pastoral Ministry is composed of committed members who are interested in serving our parish by ministering cooperatively and collaboratively with the Pastor.</p>

          <p>The Purpose of the Pastoral Ministry is to examine and consider all that relates to pastoral work and to offer practical conclusions on these matters, so that the life and activity of the People of God may be brought into greater conformity with the Gospel.</p>

          <p>The main functions of The pastoral Ministry include:</p>

          <ul>
            <li>Discuss, discern, decide, articulate and communicate where we see our parish going and express this direction in long/short term goals.</li>
            <li>Consulting with and advising the Pastor</li>
            <li>Examining and prioritizing parish needs, including identification of parish resources to implement those strategies.</li>
          </ul>

          <h2>THE MISSION</h2>
          <p>The Mission is to glorify God and to serve Him forever (Eph. 3:21; Rom. 11:36; 1 Peter 4:11).</p>

          <h2>GOALS AND OBJECTIVES</h2>

          <p>Goals are directly related to one or more of the essential elements of a parish:  Worship, Community, Leadership, Word, Evangelization, Prayer and Stewardship.  Once goals and objectives have been fully discerned, then implementation follows.</p>

          <p><span style={{ fontWeight: 'bold' }}>Principal Goal:</span>To strengthen the parish ministries leadership infrastructure through prayer and foster an environment where pastoral planning is collaborative and integrated amongst the parish ministries.</p>

          <p><span style={{ fontWeight: 'bold' }}>Principal Objectives:</span></p>
          <ul>
            <li>Organize annual parish pastoral planning goals and objectives.</li>
            <li>Continue the pastoral leadership ministries meeting on the same evening of every month.</li>
          </ul>

          <p><span style={{ fontWeight: 'bold' }}>Goal 2:</span>To establish on-going opportunities for dialogue with parishioners, assessing their ideas and visions and providing appropriate responses.</p>

          <p><span style={{ fontWeight: 'bold' }}>Objectives</span></p>
          <ul>
            <li>Plan and conduct seminars / meetings that offer our parishioners and opportunity to learn more about the pastoral ministries and express opinions on how we can strengthen our community of faith.</li>
          </ul>

          <p><span style={{ fontWeight: 'bold' }}>Goal 3:</span>Provide authentic teaching to our parishioners in order to promote a sense of reverence for all the sacraments, especially the Eucharist and to promote a vibrant prayer ministry.</p>

          <p><span style={{ fontWeight: 'bold' }}>Objectives</span></p>
          <ul>
            <li>Create a Faith Formation Advisory Team to begin development of a parish pastoral plan for all members.</li>
            <li>Prepare a schedule of teaching sessions on Marriage, Family and Intimacy.</li>
          </ul>

          <p><span style={{ fontWeight: 'bold' }}>Goal 4:</span>Establish ongoing parish experiences of Faith that encourage the development of a personal relationship with Jesus – i.e. renewal opportunities.</p>

          <p><span style={{ fontWeight: 'bold' }}>Objectives</span></p>
          <ul>
            <li>Organize a standing Parish Mission Planning Team to plan regular parish missions to occur on at least an annual basis.  This may be coordinated with Evangelism Ministry.</li>
            <li>Quarterly host Prayer Explosion Nights that will incorporate pre-fasting, praying, climaxing with music, testimonies with a view to developing and strengthening a personal relationship with God.</li>
          </ul>

        </div>



        <StyledButton to="/events">
          BACK TO MINISTRIES
        </StyledButton>
      </div>




    </Wrapper>
  </Layout>

)


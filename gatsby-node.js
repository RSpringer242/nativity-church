const path = require(`path`)


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const response = await graphql(`
        {
          event: allSanityEvent {
            edges {
              node {
                slug {
                  current
                }
              }
            }
          }
          ministry: allSanityMinistry {
            edges {
              node {
                slug {
                  current
                }
              }
            }
          }
        }
      `)


  response.data.event.edges.forEach((edge) => {
    createPage({
      path: `/events/${edge.node.slug.current}`,
      component: path.resolve('./src/templates/eventTemplate.js'),
      context: {
        slug: edge.node.slug.current
      }
    })
  })

  response.data.ministry.edges.forEach((edge) => {
    createPage({
      path: `/ministries/${edge.node.slug.current}`,
      component: path.resolve('./src/templates/ministryTemplate.js'),
      context: {
        slug: edge.node.slug.current
      }
    })
  })

}
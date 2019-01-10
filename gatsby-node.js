/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    // You can delete this file if you're not using it
    const createWpPosts = new Promise((resolve, reject) => {
      const query = graphql(`
        {
          allWordpressPost {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
    `)
      .then(result => {
        
        if (result.errors) {
            console.error(result.errors)
            reject(result.error)
        }

        const postEdges = result.data.allWordpressPost.edges

        postEdges.forEach(edge => {
          createPage({
            path: `/post/${edge.node.slug}`,
            component: path.resolve(`./src/templates/post.js`),
            context: {
              id: edge.node.id,
            },
          })
        })

        resolve()
      }) // query.then
    }) // createWpPosts

    return Promise.all([createWpPosts])
}
const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions
    // const downloadPageTemplate = path.resolve(`src/templates/download-page.js`)
    // const referencePageTemplate = path.resolve(`src/templates/reference-page.js`)

    return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            frontmatter {
              slug
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: path.resolve(
            `src/templates/${String(node.frontmatter.templateKey)}.js`
          ),
        context: {
            slug: node.frontmatter.slug
        },
      })
    })
  })
}
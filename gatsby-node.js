const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  //dynamically create pages here
  //get path to template
  const productTemplate = path.resolve("./src/templates/product.js")
  //get slugs
  const response = await graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)
  //create new pages with unique slug
  response.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      component: productTemplate,
      path: `/product/${node.frontmatter.slug}`,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })
}

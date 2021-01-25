import { graphql, useStaticQuery } from "gatsby"

const useProducts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 4) {
        nodes {
          frontmatter {
            name
            image
            excerpt
            slug
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.nodes.map((product) => ({
    name: product.frontmatter.name,
    image: product.frontmatter.image,
    excerpt: product.frontmatter.excerpt,
    slug: product.frontmatter.slug,
  }))
}

export default useProducts

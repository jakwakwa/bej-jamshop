import { graphql, useStaticQuery } from "gatsby"

const useProducts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 4) {
        # allMarkdownRemark(filter: {frontmatter: {tag: {eq: "popular"}}}) {
        nodes {
          frontmatter {
            name
            excerpt
            slug
            price
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
    price: product.frontmatter.price,
  }))
}

export default useProducts

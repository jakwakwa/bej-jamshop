/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import { Container, Row, Col } from "../components/Grid"

import HeroBackground from "../../content/images/elements/hero_background.svg"
import HeroImage from "../../content/images/elements/monitor.svg"
import HeroDecor from "../../content/images/elements/hero_decor.svg"
import HeroDummy from "../../content/images/products/dumy.svg"

// import useProductData from "../static_queries/useProductData"
//this component handles the blur img & fade-ins
// import Img from "gatsby-image"

export default function Product({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout>
      <SEO title="Product" />
      <section sx={{ paddingTop: [60, 60, 105] }}>
        <Row styles={{ justifyContent: ["center"] }}>
          <Col styles={styles.imgWrapper}>
            <img src={HeroDummy} alt="HeroDummy" xs={styles.prodImg} />
          </Col>
          <Col styles={styles.leadWrapper}>
            <div>
              <span sx={{ variant: "text.tag" }}>{frontmatter.tag}</span>
              <Styled.h1 sx={{ variant: "text.product" }}>
                {frontmatter.name}
              </Styled.h1>
              <Styled.p sx={styles.body}>{frontmatter.description}</Styled.p>
              <p sx={{ variant: "text.digit" }}>${frontmatter.price}</p>
            </div>
            <button sx={{ variant: "button.primary", mx: ["auto", null, 0] }}>
              Purchase
            </button>
          </Col>
        </Row>
        <img src={HeroBackground} sx={styles.backgroundImg} />
      </section>

      <Container></Container>
    </Layout>
  )
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getProductData = graphql`
  query {
    markdownRemark {
      frontmatter {
        slug
        name
        description
        price
        tag
      }
    }
  }
`
// const nextSlug = getNextSlug(data.fields.slug)

// function getNextSlug(slug) {
//   const allSlugs = allBlogData.map(blog => {
//     return blog.node.fields.slug
//   })
//   const nextSlug = allSlugs[allSlugs.indexOf(slug) + 1]
//   if (nextSlug !== undefined && nextSlug !== "") {
//     return nextSlug
//   } else {
//     return allSlugs[0]
//   }
// }
const styles = {
  heading: {
    variant: "text.body",
    position: "relative",
    ml: [null, null, null, "30px"],
    textAlign: ["center", null, "left"],
    textShadow: "1px 2px rgba(0, 0, 0, .2)",
    "::after": {
      position: "absolute",
      content: `url("${HeroDecor}")`,
      width: "97px",
      height: "43px",
      top: -15,
      right: -55,
      display: ["none", null, null, "block"],
      zIndex: -1,
    },
  },

  imgWrapper: {
    width: ["1", "1", "2/5", null, 450],
    textAlign: ["center", "center", "left"],
    order: [2, 2, 1],
    img: {
      width: "100%",
    },
  },

  leadWrapper: {
    width: ["1", "1", "3/5", null, 650],
    ml: ["auto", 0, 0, 0, 0, 100],
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    order: [1, 1, 2],
    mb: ["65px", "65px", 0],
  },

  backgroundImg: {
    position: "absolute",
    top: 0,
    right: 0,
    display: ["none", null, "block"],
    zIndex: -1,
  },
}

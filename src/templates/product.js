/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { graphql } from "gatsby"
import { Container, Row, Col } from "../components/Grid"

import HeroBackground from "../../content/images/elements/hero_background.svg"
import HeroDecor from "../../content/images/elements/hero_decor.svg"
import HeroDummy from "../../content/images/products/dumy.svg"

export default function Product({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  return (
    <Layout>
      <SEO title="Product" />
      <section sx={{ paddingTop: [60, 60, 105] }}>
        <Row
          styles={{
            justifyContent: ["center"],
            textAlign: ["center", null, "left"],
          }}
        >
          <Col styles={styles.imgWrapper}>
            <img src={frontmatter.image.publicURL} alt="HeroDummy" />
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
    </Layout>
  )
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        name
        description
        slug
        tag
        price
        image {
          publicURL
        }
      }
      html
    }
  }
`
const styles = {
  imgWrapper: {
    width: ["2", "2", "2/5", null, 450],
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

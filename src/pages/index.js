/** @jsx jsx */
import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/HomePage/Hero"
import { Container, Row, Col } from "../components/Grid"
import { jsx } from "theme-ui"
import useProductData from "../static_queries/useProductData"
import ProductList from "../components/HomePage/ProductList"
import ProductCard from "../components/HomePage/ProductCard"

export default function IndexPage() {
  const products = useProductData()
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Hero />
        <ProductList />
        <Container styles={styles.prodListMargin}>
          <Row styles={styles.cardCols}>
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </Row>
        </Container>
      </Container>
    </Layout>
  )
}

const styles = {
  cardCols: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    "> section": {
      margin: "20px 0 0 20px",
      flexGrow: 1,
      width: "calc(100% * (1/4) - 20px - 1px)",
    },
  },
  prodListMargin: {
    marginTop: "50px",
    marginBottom: "200px",
  },
}

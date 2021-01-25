/** @jsx jsx */
import React from "react"
import useProductData from "../static_queries/useProductData.js"
import { Container, Row, Col } from "../components/Grid"
import Layout from "../components/Layout/index"
import { jsx, Styled } from "theme-ui"
import SEO from "../components/SEO"
import Hero from "../components/HomePage/Hero/index"
import ProductList from "../components/HomePage/ProductList/index"
import Cart from "../components/Cart/index"

function IndexPage() {
  const products = useProductData()
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Container>
        <Row>
          <ProductList />
        </Row>
        <Row>
          <section sx={styles.cart}>
            <Cart products={products} />
          </section>
        </Row>
      </Container>
    </Layout>
  )
}

export default IndexPage

const styles = {
  cart: {
    marginTop: "50px",
    marginBottom: "200px",
  },
}

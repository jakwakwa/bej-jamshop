/** @jsx jsx */
import React from "react"
import useProductData from "../static_queries/useProductData.js"
import { Container, Row } from "../components/Grid"
import Layout from "../components/Layout/index"
import { jsx } from "theme-ui"
import SEO from "../components/SEO"
import Hero from "../components/HomePage/Hero/index"
import ProductList from "../components/HomePage/ProductList/index"
import Products from "../components/Products/Products"

function IndexPage() {
  const products = useProductData()
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Container sx={{ paddingBottom: "200px" }}>
        <Row>
          <ProductList
            sx={{
              paddingTop: [60, 60, 0],
            }}
          />
        </Row>
        <Products products={products} />
      </Container>
    </Layout>
  )
}

export default IndexPage

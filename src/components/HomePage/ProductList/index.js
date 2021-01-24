/** @jsx jsx */
import React from "react"
import { jsx, Styled } from "theme-ui"
import { Row, Col } from "../../Grid"

const ProductList = () => {
  return (
    <section sx={{ paddingTop: [0, 160] }}>
      <h2>Explore community choices</h2>
      <p>Updated daily based on most popular choices among dev community</p>
    </section>
  )
}

export default ProductList

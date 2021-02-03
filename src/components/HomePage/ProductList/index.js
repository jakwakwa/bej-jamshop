/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

function ProductList() {
  return (
    <section sx={{ paddingTop: [0, 160] }}>
      <h2 sx={{ textAlign: ["center", null, "left"] }}>
        Explore community choices
      </h2>
      <p sx={{ textAlign: ["center", null, "left"] }}>
        Updated daily based on most popular choices among dev community
      </p>
    </section>
  )
}

export default ProductList

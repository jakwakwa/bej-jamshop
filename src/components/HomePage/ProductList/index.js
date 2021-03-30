/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

function ProductList() {
  return (
    <section sx={{ paddingTop: [0, 160] }}>
      <h2 sx={{ textAlign: ["center", null, "left"] }}>
        Explore my most popular illustrations
      </h2>
      <p sx={{ textAlign: ["center", null, "left"] }}>
        Updated daily based on most popular choices among my community of fans
      </p>
    </section>
  )
}

export default ProductList

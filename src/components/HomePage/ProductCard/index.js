/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import HeroDummy from "../../../../content/images/elements/hero_background.svg"

const ProductCard = () => {
  return (
    <section>
      <div sx={styles.productWrapper}>
        <img src={HeroDummy} sx={styles.prodImg} />
        <h3>Great Dummy</h3>
        <p>Something that you trully need, but haven’t know about it yet</p>
        <div sx={styles.buttonWrapper}>
          <button sx={styles.addToCartBtn}>+</button>
        </div>
      </div>
    </section>
  )
}

export default ProductCard

const styles = {
  prodImg: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height: "92px",
  },

  productWrapper: {
    border: "3px solid #969393",
    padding: "20px",
    borderRadius: "2px",
  },

  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
  },

  addToCartBtn: {
    background: "#AB528D",
    border: 0,
    color: "#fff",
    fontSize: "32px",
    fontWeight: 700,
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    align: "right",
  },
}

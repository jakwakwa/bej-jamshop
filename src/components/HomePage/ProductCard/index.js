/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import HeroDummy from "../../../../content/images/products/dumy.svg"
import { Link } from "gatsby"

const ProductCard = ({ product }) => {
  const { name, excerpt, slug } = product

  return (
    <section>
      <div sx={styles.productWrapper}>
        <img src={HeroDummy} sx={styles.prodImg} />
        <h3>{name}</h3>
        <p>{excerpt}</p>
        <div sx={styles.buttonWrapper}>
          <Link sx={styles.addToCartBtn} to={`product/${slug}`}>
            +
          </Link>
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
    position: "relative",
    border: "3px solid #969393",
    padding: "20px",
    borderRadius: "2px",
  },

  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    position: "absolute",
    right: "8px",
    bottom: "8px",
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

/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import HeroDummy from "../../../../content/images/products/dumy.svg"
import { Link } from "gatsby"

const ProductCard = ({ product, onSubmit }) => {
  const { name, excerpt, slug } = product

  return (
    <section>
      <div sx={styles.productWrapper}>
        <img src={HeroDummy} sx={styles.prodImg} />
        <Link sx={{ variant: "text.link" }} to={`product/${slug}`}>
          <h3>{name}</h3>
        </Link>

        <p>{excerpt}</p>
        <div sx={styles.buttonWrapper}>
          <input
            sx={styles.addToCartBtn}
            type="submit"
            value="+"
            onClick={onSubmit}
          />
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
    height: "300px",
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

/** @jsx jsx */
import { jsx } from "theme-ui"
import HeroDummy from "../../../../content/images/products/dumy.svg"
import { Link } from "gatsby"

const ProductCard = ({ product, onSubmit }) => {
  const { name, excerpt, slug, image } = product

  return (
    <div sx={{ position: "relative" }}>
      <Link sx={{ variant: "text.link" }} to={`product/${slug}`}>
        <div sx={styles.productWrapper}>
          <img src={image} alt="HeroDummy" sx={styles.prodImg} />
          <h3>{name}</h3>
          <p>{excerpt}</p>
        </div>
      </Link>
      <div sx={styles.buttonWrapper}>
        <input
          sx={styles.addToCartBtn}
          type="submit"
          value="+"
          onClick={onSubmit}
        />
      </div>
    </div>
  )
}

export default ProductCard

const styles = {
  prodImg: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height: "92px",
    maxWidth: "200px",
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
    backgroundColor: "#AB528D",
    border: 0,
    color: "#fff",
    fontSize: "32px",
    fontWeight: 700,
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    align: "right",
    transition: "0.5s",
    "&:hover": {
      backgroundColor: "text.accent",
    },
  },
}

/** @jsx jsx */
import React, { useState, useEffect } from "react"
import { Row } from "../../components/Grid/"
import { Container, jsx, Styled } from "theme-ui"
import ProductCard from "../HomePage/ProductCard/index"
import CartImg from "../../../content/images/elements/cart.svg"

const Cart = ({ products }) => {
  const items = products

  const [cart, setCart] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  const total = () => {
    let totalVal = 0
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price
    }
    setCartTotal(totalVal)
  }
  useEffect(() => {
    total()
  }, [cart])

  const removeFromCart = (el) => {
    let hardCopy = [...cart]
    hardCopy = hardCopy.filter((cartItem) => cartItem.slug !== el.slug)
    setCart(hardCopy)
  }
  const addToCart = (el) => {
    setCart([...cart, el])
  }
  // const listItems = items.map((el) => <div>{`${el.key}`}</div>)

  const cartItems = cart.map((el) => (
    <>
      <div sx={styles.cartContainer}>
        <span sx={{ width: "170px", display: "inline-block" }}>{`${el}`}</span>

        <input
          sx={styles.removeBtn}
          type="submit"
          value="-"
          onClick={() => removeFromCart(el)}
        />
      </div>
    </>
  ))

  return (
    <>
      <img sx={styles.cartIcon} src={CartImg}></img>
      {console.log(cartItems)}
      {cartItems.length <= 0 ? null : (
        <div sx={styles.cartWrapper}>{cartItems}</div>
      )}

      <Row styles={styles.cardCols}>
        {items.map((product) => (
          <ProductCard
            onSubmit={() => addToCart(product.slug)}
            key={product.slug}
            product={product}
          />
        ))}
      </Row>
    </>
  )
}

export default Cart

const styles = {
  cartContainer: {
    fontSize: "12px",
    padding: "10px 20px",
    marginBottom: "5px",
    width: "100%",
  },

  cartIcon: {
    position: "absolute",
    top: "20px",
    right: "20px",
  },
  cartWrapper: {
    position: "fixed",
    top: "60px",
    right: "20px",
    border: "3px solid #969393",
    background: "#220538",
    borderRadius: "2px",
    width: "281px",
  },
  // cartCols: {
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "flex-start",
  // },
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
  removeBtn: {
    background: "#AB528D",
    border: 0,
    color: "#fff",
    fontSize: "8px",
    fontWeight: 700,
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    align: "right",
  },
}

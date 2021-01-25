/** @jsx jsx */
import React, { useState, useEffect } from "react"
import { Row } from "../../components/Grid/"
import { jsx, Styled } from "theme-ui"
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
    <div key={el}>
      {`${el}`}
      <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
    </div>
  ))

  return (
    <>
      <section sx={styles.cartContainer}>
        <div>
          <img src={CartImg} />
          <div>{cartItems}</div>
        </div>
      </section>
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
    position: "fixed",
    top: "20px",
    right: "50px",
    color: "#000",
  },
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
}

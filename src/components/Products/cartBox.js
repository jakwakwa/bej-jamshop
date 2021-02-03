/** @jsx jsx */
import React, { useState } from "react"
import { jsx } from "theme-ui"
import { keyframes } from "@emotion/react"
import CartImg from "../../../content/images/elements/cart.svg"

const moveDown = keyframes({ from: { top: "-100px" }, to: { top: "60px" } })
const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 0.5 } })

const CartBox = ({ cart, showText, setShowText, onDivClick, products }) => {
  const [showCart, setShowCart] = useState(false)

  const getProductImageSrc = (element) => {
    const result = products.filter((product) => {
      if (product.slug === element) {
        const img = product.image

        return img
      }
    })
    return result[0].image
  }

  const getProductPrice = (element) => {
    const result = products.filter((product) => {
      if (product.slug === element) {
        const price = product.price
        return price
      }
    })
    return result[0].price
  }

  return (
    <>
      <div sx={styles.cartTotal}>{cart.length}</div>
      <img
        onClick={
          cart.length > 0
            ? () => {
                setShowCart(true)
                setShowText(true)
              }
            : null
        }
        sx={styles.cartIcon}
        src={CartImg}
      ></img>
      {showCart && showText ? (
        <>
          <div
            onClick={onDivClick}
            sx={{
              backgroundColor: "#000",
              width: "100vw",
              height: "100vh",
              position: "fixed",
              top: 0,
              left: 0,
              animationName: fadeIn,
              animationDuration: "0.5s",
              animationFillMode: "backwards",
              opacity: 0.5,
              zIndex: "2",
            }}
          ></div>

          <div sx={styles.cartWrapper}>
            {cart.map((el) => (
              <>
                <div key={el} sx={styles.cartContainer}>
                  <img
                    sx={{
                      display: "inline",
                      paddingTop: "10px",
                      position: "absolute",
                      top: "-2px",
                      left: "18px",
                      width: "24px",
                    }}
                    src={getProductImageSrc(el)}
                    alt={el}
                  />
                  <span
                    sx={{
                      width: "180px",
                      display: "inline-block",
                      paddingLeft: "25px",
                    }}
                  >{`${el}`}</span>
                  <span>${getProductPrice(el)}</span>
                </div>
              </>
            ))}
            <input sx={styles.submitBtn} type="submit" value="Submit" />
          </div>
        </>
      ) : null}
    </>
  )
}

export default CartBox

const styles = {
  cartContainer: {
    fontSize: "12px",
    padding: "10px 20px",
    marginBottom: "5px",
    width: "100%",
    position: "relative",
  },

  cartIcon: {
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: 3,
  },

  cartTotal: {
    zIndex: 4,
    position: "fixed",
    right: "8px",
    fontSize: "12px",
    background: "#AB528D",
    width: "20px",
    height: "20px",
    textAlign: "center",
    paddingTop: "3px",
    borderRadius: "50%",
    fontWeight: 900,
    top: "10px",
  },

  cartWrapper: {
    position: "fixed",
    zIndex: "2",
    right: "20px",
    border: "3px solid #969393",
    background: "#220538",
    borderRadius: "2px",
    width: "281px",
    padding: "40px 0",
    top: "60px",
    animationName: moveDown,
    animationDuration: "0.5s",
    animationFillMode: "backwards",
  },

  submitBtn: {
    background: "#AB528D",
    border: 0,
    color: "#fff",
    width: "89px",
    padding: "7px",
    fontWeight: 700,
    textTransform: "uppercase",
    textTransform: "uppercase",
    textAlign: "center",
    float: "right",
    marginTop: "20px",
    marginRight: "20px",
  },
}

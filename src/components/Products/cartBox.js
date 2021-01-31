/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import CartImg from "../../../content/images/elements/cart.svg"

const CartBox = ({ cart, showText, onDivClick, removeFromCart }) => {
  return (
    <>
      <div sx={styles.cartTotal}>{cart.length}</div>
      <img sx={styles.cartIcon} src={CartImg}></img>
      {cart.length <= 0 || !showText ? null : (
        <>
          {showText ? (
            <div
              onClick={onDivClick}
              sx={{
                backgroundColor: "#000",
                width: "100vw",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: 0,
                opacity: "70%",
                zIndex: "1",
              }}
            ></div>
          ) : null}
          <div sx={styles.cartWrapper}>
            {cart.map((el) => (
              <>
                <div sx={styles.cartContainer}>
                  <span
                    sx={{ width: "170px", display: "inline-block" }}
                  >{`${el}`}</span>

                  <input
                    sx={styles.removeBtn}
                    type="submit"
                    value="-"
                    onClick={() => removeFromCart(el)}
                  />
                </div>
              </>
            ))}
          </div>
        </>
      )}
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
    top: "11px",
    right: "8px",
    fontSize: "12px",
    background: "black",
    width: "20px",
    height: "20px",
    textAlign: "center",
    paddingTop: "3px",
    borderRadius: "50%",
    fontWeight: 900,
  },

  cartWrapper: {
    position: "fixed",
    zIndex: "2",
    top: "60px",
    right: "20px",
    border: "3px solid #969393",
    background: "#220538",
    borderRadius: "2px",
    width: "281px",
  },

  cardCols: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    "> div": {
      margin: "20px",
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

  ".swiper-button-next": {
    color: "#fff",
  },
}

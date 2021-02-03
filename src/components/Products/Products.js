/** @jsx jsx */
import React, { useState, useEffect } from "react"
import { Row } from "../Grid"
import { jsx } from "theme-ui"
import CartBox from "./cartBox"
import ProductCard from "../HomePage/ProductCard/index"

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "../../styles/swiper-overrides.scss"

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Products = ({ products }) => {
  const items = products
  const [cart, setCart] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const [showText, setShowText] = useState(true)
  const onDivClick = () => setShowText(false)

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

  const addToCart = (el, img) => {
    setCart([...cart, el])
  }

  return (
    <>
      <CartBox
        onDivClick={onDivClick}
        cart={cart}
        cartTotal={cartTotal}
        showText={showText}
        setShowText={setShowText}
        removeFromCart={removeFromCart}
        products={items}
      />

      <Row>
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          navigation
          sx={{ marginTop: "64px", paddingLeft: "50px", paddingRight: "50px" }}
        >
          {items.map((product) => (
            <SwiperSlide key={product.slug}>
              <ProductCard
                onSubmit={() => addToCart(product.slug, product.image)}
                key={product.slug}
                product={product}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Row>
    </>
  )
}

export default Products
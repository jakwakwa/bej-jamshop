/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import PropTypes from "prop-types"

import Header from "../Header"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main sx={{ paddingTop: 50 }}>{children}</main>
      <footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

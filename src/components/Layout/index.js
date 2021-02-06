/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
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

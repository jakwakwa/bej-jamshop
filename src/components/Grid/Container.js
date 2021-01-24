/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"

const Container = React.forwardRef(({ children, styles, sx, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      sx={{ variant: "grid.container", ...styles, ...sx }}
      {...rest}
    >
      {children}
    </div>
  )
})

export default Container

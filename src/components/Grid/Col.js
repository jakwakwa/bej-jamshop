/** @jsx jsx */
import { jsx } from "theme-ui"

export default function Column({ children, styles, sx }) {
  return <div sx={{ variant: "grid.column", ...styles, ...sx }}>{children}</div>
}

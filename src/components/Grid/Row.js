/** @jsx jsx */
import { jsx } from "theme-ui"

export default function Row({ children, styles, sx }) {
  return <div sx={{ variant: "grid.row", ...styles, ...sx }}>{children}</div>
}

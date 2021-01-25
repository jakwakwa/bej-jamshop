import React from "react"
// import PropTypes from "prop-types"
import Helmet from "react-helmet"
import useSiteMetadata from "../static_queries/useSiteMetadata"

export default function SEO() {
  const { title, description, lang } = useSiteMetadata()
  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

// SEO.defaultProps = {
//   lang: "en",
//   meta: [],
//   description: "",
// }

// SEO.propTypes = {
//   description: PropTypes.string,
//   lang: PropTypes.string,
//   meta: PropTypes.arrayOf(PropTypes.object),
//   title: PropTypes.string.isRequired,
// }

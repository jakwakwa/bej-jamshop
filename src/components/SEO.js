import React from "react"
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

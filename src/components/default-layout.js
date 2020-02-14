import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import "katex/dist/katex.min.css"
import "prismjs/themes/prism-solarizedlight.css"

import Layout from "./layout"
import SEO from "./seo"
import Header from "./header"

const PostLayout = props => {
  return (
    <Layout>
      <SEO />
      <Header />
      {props.children}
    </Layout>
  )
}

export default PostLayout

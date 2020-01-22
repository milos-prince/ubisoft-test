import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  <div className="setMaxWidth">
    <div className="siteWrapper">
    
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    </div>
  </div>
  </Layout>
)

export default IndexPage

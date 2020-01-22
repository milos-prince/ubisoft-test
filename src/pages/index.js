import React from "react"
import { Link } from "gatsby"
import Hero from '../components/heroSlider'
import Feed from '../components/feed'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  <div className="setMaxWidth">
    <div className="bodyWrapper">
    <Hero />
    <Feed />
    </div>
  </div>
  </Layout>
)

export default IndexPage

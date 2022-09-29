import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/Footer"
import {
  aboutContent
} from "../components/layout.module.css"

export default function AboutTemplate({ data, }) { // this prop will be injected by the GraphQL query below.
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div className={aboutContent}
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <Footer/>
    </Layout>
  )
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                slug
            }
        }
  }
`
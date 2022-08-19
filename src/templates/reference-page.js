import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import sideBar from "../components/sideBar"


export default function referenceTemplate({ data, }) { // this prop will be injected by the GraphQL query below.
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <sideBar/>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
      />
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
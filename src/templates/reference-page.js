import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SideBar from "../components/SideBar"
import {
  referenceContainer,
  referenceContent
} from '../components/layout.module.css'


export default function referenceTemplate({ data, }) { // this prop will be injected by the GraphQL query below.
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div className={referenceContainer}>
        <SideBar/>
        <div className={referenceContent}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
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
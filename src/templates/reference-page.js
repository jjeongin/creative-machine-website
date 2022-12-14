import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import Layout from "../components/layout"
import SideBar from "../components/SideBar"
import {
  referenceContainer,
  referenceSideBarContainer,
  referenceSideBarButton,
  referenceSideBarIcon,
  referenceSideBarIconBackground,
  referenceContent,
  showSideBar,
  hideSideBar,
} from '../components/layout.module.css'

export default function ReferenceTemplate({ data, }) { // this prop will be injected by the GraphQL query below.
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  // function to show and hide side bar on tablet & mobile screens
  const [sideBarState, setState] = React.useState(hideSideBar); // hide nav bar initially
  const showOrHideSideBar = () => {
    if (sideBarState === showSideBar) // hide nav bar
      setState(hideSideBar);
    else // show nav bar
      setState(showSideBar);
  }

  return (
    <Layout>
      <div className={referenceContainer}>
        <button className={referenceSideBarButton} onClick={showOrHideSideBar}>
          <div className={referenceSideBarIconBackground}></div>
          <svg className={referenceSideBarIcon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M170.666667 298.666667m-42.666667 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z"  /><path d="M170.666667 512m-42.666667 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z"  /><path d="M170.666667 725.333333m-42.666667 0a42.666667 42.666667 0 1 0 85.333333 0 42.666667 42.666667 0 1 0-85.333333 0Z"  /><path d="M298.666667 469.333333m40.106666 0l517.12 0q40.106667 0 40.106667 40.106667l0 5.12q0 40.106667-40.106667 40.106667l-517.12 0q-40.106667 0-40.106666-40.106667l0-5.12q0-40.106667 40.106666-40.106667Z"  /><path d="M298.666667 682.666667m40.106666 0l517.12 0q40.106667 0 40.106667 40.106666l0 5.12q0 40.106667-40.106667 40.106667l-517.12 0q-40.106667 0-40.106666-40.106667l0-5.12q0-40.106667 40.106666-40.106666Z"  /><path d="M298.666667 256m40.106666 0l517.12 0q40.106667 0 40.106667 40.106667l0 5.12q0 40.106667-40.106667 40.106666l-517.12 0q-40.106667 0-40.106666-40.106666l0-5.12q0-40.106667 40.106666-40.106667Z"  /></svg>
        </button>
        <div className={sideBarState}>
          <SideBar/>
        </div>
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
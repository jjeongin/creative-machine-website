import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  homeContainer,
  homeIntro,
  homeIntroLogo,
  homeIntroLeft,
  homeIntroRight,
  homeExamples,
  homeExamplesContainer,
  homeExamplesHeading,
  homeExamplesItemContainer,
  homeExamplesItem,
  homeExamplesItemImage,
  homeExamplesItemDescription,
  homeDownload,
  homeDownloadButton,
  homeCodeExamples,
  homeAcknowledgements
} from "../components/layout.module.css"


export default function homeTemplate({ data, }) { // this prop will be injected by the GraphQL query below.
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  // const gsocLogo = getImage(frontmatter.acknowledgements.gsocLogo.childImageSharp.gatsbyImageData)

  return (
    <Layout>
      <div className={homeContainer}>
        {/* Section: Introduction & Welcome Message */}
        <section className={homeIntro}>
          <div className={homeIntroLeft}>
            {/* <h1>{frontmatter.intro.mainText}</h1> */}
            <h2>{frontmatter.intro.subText}</h2>
          </div>
          <div className={homeIntroRight}>
            <StaticImage
                className={homeIntroLogo}
                src='../images/creative-machine-logo-white-thick.svg'
                alt='Creative Machine Logo'
              />
          </div>
        </section>
        {/* Section: Examples */}
        <section className={homeExamples}>
          <h1 className={homeExamplesHeading}>Examples</h1>
          <div className={homeExamplesItemContainer}>
            {frontmatter.examples.map(e => (
              <div className={homeExamplesItem}>
                <GatsbyImage
                  className={homeExamplesItemImage}
                  image={e.image.childImageSharp.gatsbyImageData}
                  alt={e.altText}
                />
                <p className={homeExamplesItemDescription}>{e.description}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Section: Download Button */}
        <section className={homeDownload}>
            <h1>{frontmatter.download.mainText}</h1>
            <a href="https://github.com/jjeongin/ml4processing">
              <button className={homeDownloadButton}>{frontmatter.download.subText}</button>
            </a>
        </section>
        {/* Section: Example Code Snippet */}
        <section
          className={homeCodeExamples}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <section className={homeAcknowledgements}>
            {/* <GatsbyImage
              image={frontmatter.acknowledgements.gsocLogo.childImageSharp.gatsbyImageData}
            /> */}
        </section>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
    query homeTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
            html
            frontmatter {
                slug
                intro {
                    mainText
                    subText
                }
                examples {
                  image {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                  altText
                  description
                }
                download {
                    mainText
                    subText
                }
                acknowledgements {
                  gsocLogo {
                    childImageSharp {
                      gatsbyImageData
                    }
                  }
                }
            }
        }
  }
`
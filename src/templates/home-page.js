import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Footer from "../components/Footer"
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  homeContainer,
  homeIntro,
  homeIntroText,
  typewriter,
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
  homeDownloadSubtext,
  homeCodeExamples,
  homeAcknowledgements,
  homeAcknowledgementsHeading,
  homeAcknowledgementsLogoContainer,
  homeGsocLogo,
  homeProcessingLogo
} from "../components/layout.module.css"


export default function homeTemplate({ data, }) { // this prop will be injected by the GraphQL query below.
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div className={homeContainer}>
        {/* Section: Introduction & Welcome Message */}
        <section className={homeIntro}>
          <p className={homeIntroText}>Get <p className={typewriter}>Creative</p> with <br/> Machine Learning <br/> in Processing.</p>
          <StaticImage
            className={homeIntroLogo}
            width="170px"
            src='../images/processing-logo.svg'
            alt='Processing Logo'
          />
        </section>
        {/* Section: Examples */}
        <section className={homeExamples}>
          <h1 className={homeExamplesHeading}>Experiment with Machine Learning in Processing.</h1>
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
        {/* Section: Example Code Snippet */}
        <section
          className={homeCodeExamples}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {/* Section: Download Instruction */}
        <section className={homeDownload}>
            <h1>{frontmatter.download.mainText}</h1>
            <Link to="/download"><p className={homeDownloadSubtext}>{frontmatter.download.subText}</p></Link>
        </section>
        {/* Section: Acknowledgements */}
        <section className={homeAcknowledgements}>
          <h1 className={homeAcknowledgementsHeading}>This project has been supported by</h1>
            <div className={homeAcknowledgementsLogoContainer}>
              <StaticImage
                className={homeGsocLogo}
                src='../images/gsoc-logo-big.png'
              />
              <StaticImage
                className={homeProcessingLogo}
                src='../images/processing-logo.svg'
              />
            </div>
        </section>
      </div>
      <Footer/>
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
            }
        }
  }
`
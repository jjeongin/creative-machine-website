import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
    container,
    navLogo,
    navGithubLogo,
    navContainer,
    navLinks,
    navLinkItem,
    navLinkText,
    footerContact,
    footerContactHeading,
    footerContactText,
    footerProjectDescription
} from './layout.module.css'

const Layout = ({ children }) => {
    // get website title from gatsby-config.js
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
  
    return (
      <div className={container}>
        <title>{data.site.siteMetadata.title}</title>
        {/* header */}
        <header>
          <Link to="/">
            <StaticImage
              className={navLogo}
              src='../images/cm-kunika-logo.svg'
              alt='Creative Machine Logo'
            />
          </Link>
            <nav className={navContainer}>
              <ul className={navLinks}>
                <li className={navLinkItem}>
                  <Link to="/download" className={navLinkText}>Download</Link>
                </li>
                <li className={navLinkItem}>
                  <Link to="/reference/tutorial" className={navLinkText}>Reference</Link>
                </li>
                <li className={navLinkItem}>
                  <Link to="/about" className={navLinkText}>About</Link>
                </li>
              </ul>
              <a href="https://github.com/jjeongin/creative-machine">
              <StaticImage
                className={navGithubLogo}
                src='../images/GitHub-Mark-64px.png'
                alt='GitHub Logo'
              />
            </a>
            </nav>
        </header>
        {/* main body */}
        <main>
          {children}
        </main>
        
      </div>
    )
  }
  
export default Layout
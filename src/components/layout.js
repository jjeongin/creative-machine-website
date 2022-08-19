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
} from './layout.module.css'
// import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
// deckDeckGoHighlightElement();

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
        <header>
          <Link to="/">
            <StaticImage
              className={navLogo}
              src='../images/creative-machine-logo.svg'
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

              <a href="https://github.com/jjeongin/ml4processing">
              <StaticImage
                className={navGithubLogo}
                src='../images/GitHub-Mark-64px.png'
                alt='GitHub Logo'
              />
            </a>
            </nav>
        
        </header>
        

        {/* <nav className={navBar}>
          <div className={navBarItem}>
            <Link to="/">
                <img className={navCmLogo} src="../images/icon.png" alt="Creative Machine Logo"></img>
            </Link>
          </div>
          <div className={navBarItem}>
            <Link to="/docs/reference" className={navLinkText}>Reference</Link>
          </div>
          <div className={navBarItem}>
            <Link to="/about" className={navLinkText}>About</Link>
          </div>
          <div className={navBarItem}>
            <Link to="https://github.com/jjeongin/ml4processing">
                <img className={navGithubLogo} src="../images/github.png" alt="GitHub Logo"></img>
            </Link>
          </div>
        </nav> */}
        
        <main>
          {children}
        </main>

        <footer>
          <p>Contact</p>
          <a href="https://github.com/jjeongin/ml4processing">GitHub</a>
          <a href="">Email</a>
          <p>Creative Machine is developed by Jeongin Lee as a Google Summer of Code 2022 project under the guidance of Andres Colubri and Daniel Shiffman.</p>
        </footer>
      </div>
    )
  }
  
export default Layout
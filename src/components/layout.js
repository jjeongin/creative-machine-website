import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {mainLogo} from "../images/icon.png"
import {GitHubLogo} from "../images/github.png"
import {
    container,
    navMainLogo,
    navGithubLogo,
    navLinks,
    navLinkItem,
    navLinkText,
} from './layout.module.css'
import { StaticImage } from 'gatsby-plugin-image'

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
            <img className={navMainLogo} src={'../images/icon.png'} alt="Creative Machine Logo"></img>
          </Link>

          <nav>
            <ul className={navLinks}>
              <li className={navLinkItem}>
                <Link to="/reference" className={navLinkText}>Reference</Link>
              </li>
              <li className={navLinkItem}>
                <Link to="/about" className={navLinkText}>About</Link>
              </li>
            </ul>
          </nav>

          <a href="https://github.com/jjeongin/ml4processing">
            <img className={navGithubLogo} src={'/github.png'} alt="GitHub Logo"></img>
          </a>
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
      </div>
    )
  }
  
  export default Layout
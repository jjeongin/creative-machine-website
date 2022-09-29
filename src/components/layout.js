import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import {
    container,
    headerMobile,
    navLogo,
    navGithubLogo,
    showNavContainer,
    hideNavContainer,
    navLinks,
    navLinkItem,
    navLinkText,
    navExpandButton,
    navExpandIcon,
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
    // function to show and hide nav bar on tablet & mobile screens
    const [navContainerState, setState] = React.useState(hideNavContainer); // hide nav bar initially
    const showOrHideHeader = () => {
      if (navContainerState == showNavContainer) // hide nav bar
        setState(hideNavContainer);
      else // show nav bar
        setState(showNavContainer);
    }
    return (
      <div className={container}>
        <title>{data.site.siteMetadata.title}</title>
        {/* header */}
        <header>
          <div className={headerMobile}>
            {/* creative machine logo */}
            <Link to="/">
              <StaticImage
                className={navLogo}
                src='../images/cm-kunika-logo.svg'
                alt='Creative Machine Logo'
              />
            </Link>
            {/* button to expand the navigation bar when clicked */}
            <button className={navExpandButton} onClick={showOrHideHeader}>
              <StaticImage
                  className={navExpandIcon}
                  src='../images/nav-expand-icon.svg'
                  alt='Navigation Bar Expand Icon'
                />
            </button>
          </div>
          {/* navigation bar */}
          <nav className={navContainerState}>
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
            {/* github logo */}
            <a href="https://github.com/jjeongin/creative-machine">
              <StaticImage
                className={navGithubLogo}
                src='../images/GitHub-Mark-64px.png'
                alt='GitHub Logo'
              />
            </a>
          </nav>
        </header>
        {/* main body container */}
        <main>
          {children}
        </main>
      </div>
    )
  }
  
export default Layout
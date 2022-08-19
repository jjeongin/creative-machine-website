import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    referenceSideBar,
    sideBarHeading,
    sideBarSubHeading,
    sideBarIndex,
    sideBarIndexLink,
} from './layout.module.css'

const SideBar = () => {
    return (
        <ul className={referenceSideBar}>
            <h1 className={sideBarHeading}>Reference</h1>
            <h3 className={sideBarSubHeading}>Computer Vision</h3>
            <li className={sideBarIndex}><a className={sideBarIndexLink} href="object-detector">- Object Detector</a></li>
            <li className={sideBarIndex}><a className={sideBarIndexLink} href="image-classifier">- Image Classifier</a></li>
            <li className={sideBarIndex}><a className={sideBarIndexLink} href="pose-net">- Pose Net</a></li>
            <li className={sideBarIndex}><a className={sideBarIndexLink} href="face-detector">- Face Detector</a></li>
            <h3 className={sideBarSubHeading}>Natural Language Processing</h3>
            <li className={sideBarIndex}><a className={sideBarIndexLink} href="sentiment">- Sentiment</a></li>
        </ul>
    )
}
  
export default SideBar
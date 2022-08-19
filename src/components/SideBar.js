import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    referenceContainer,
    referenceSideBar,
    referenceContent
} from './layout.module.css'

const SideBar = () => {
    return (
        <div className={referenceSideBar}>
            <h1>Reference</h1>
            <p>Computer Vision</p>
            <a href="reference/object-detector"><p>Object Detector</p></a>
            <a href="reference/image-classifier"><p>Image Classifier</p></a>
            <a href="reference/pose-net"><p>Pose Net</p></a>
            <a href="reference/face-detector"><p>Face Detector</p></a>
            <p>Natural Language Processing</p>
            <a href="reference/sentiment"><p>Sentiment</p></a>
        </div>
    )
}
  
export default SideBar
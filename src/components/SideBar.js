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
            <li className={sideBarIndex}>
                <Link to="/reference/tutorial" className={sideBarIndexLink}>- Tutorial</Link>
            </li>

            <h2 className={sideBarSubHeading}>Models</h2>
            <h3 className={sideBarIndex}>Computer Vision</h3>
            <li className={sideBarIndex}>
                <Link to="/reference/object-detector" className={sideBarIndexLink}>- Object Detector</Link>
            </li>
            <li className={sideBarIndex}>
                <Link to="/reference/image-classifier" className={sideBarIndexLink}>- Image Classifier</Link>
            </li>
            <li className={sideBarIndex}>
                <Link to="/reference/pose-net" className={sideBarIndexLink}>- Pose Net</Link>
            </li>
            <li className={sideBarIndex}>
                <Link to="/reference/face-detector" className={sideBarIndexLink}>- Face Detector</Link>
            </li>
            <h3 className={sideBarSubHeading}>Natural Language Processing</h3>
            <li className={sideBarIndex}>
                <Link to="/reference/sentiment" className={sideBarIndexLink}>- Sentiment</Link>
            </li>

            <h2 className={sideBarSubHeading}>Objects</h2>
            <li className={sideBarIndex}>
                <Link to="/reference/mlobject" className={sideBarIndexLink}>- MLObject</Link>
            </li>
            <li className={sideBarIndex}>
                <Link to="/reference/mlkeypoint" className={sideBarIndexLink}>- MLKeyPoint</Link>
            </li>
            <li className={sideBarIndex}>
                <Link to="/reference/mlpose" className={sideBarIndexLink}>- MLPose</Link>
            </li>
            <li className={sideBarIndex}>
                <Link to="/reference/mlface" className={sideBarIndexLink}>- MLFace</Link>
            </li>
        </ul>
    )
}
  
export default SideBar
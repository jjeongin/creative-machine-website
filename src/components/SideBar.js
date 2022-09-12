import * as React from 'react'
import { Link } from 'gatsby'
import {
    referenceSideBar,
    sideBarHeading,
    sideBarItems,
    sideBarSubHeading,
    sideBarModelHeading,
    sideBarIndex,
    sideBarIndexLink,
} from './layout.module.css'

const SideBar = () => {
    return (
        <ul className={referenceSideBar}>
            <h1 className={sideBarHeading}>Reference</h1>
            <div className={sideBarItems}>
                <li className={sideBarIndex}>
                    <Link to="/reference/tutorial" className={sideBarIndexLink}>🤖 Tutorial</Link>
                </li>
                {/* Models */}
                <h2 className={sideBarSubHeading}>📁 Models</h2>
                <h3 className={sideBarModelHeading}>▫️ Computer Vision</h3>
                <li className={sideBarIndex}>
                    <Link to="/reference/models/object-detector" className={sideBarIndexLink}>Object Detector</Link>
                </li>
                <li className={sideBarIndex}>
                    <Link to="/reference/models/image-classifier" className={sideBarIndexLink}>Image Classifier</Link>
                </li>
                <li className={sideBarIndex}>
                    <Link to="/reference/models/pose-detector" className={sideBarIndexLink}>Pose Detector</Link>
                </li>
                <li className={sideBarIndex}>
                    <Link to="/reference/models/face-detector" className={sideBarIndexLink}>Face Detector</Link>
                </li>
                <h3 className={sideBarModelHeading}>▫️ Natural Language Processing</h3>
                <li className={sideBarIndex}>
                    <Link to="/reference/models/sentiment-analyzer" className={sideBarIndexLink}>Sentiment Analyzer</Link>
                </li>
                {/* Objects */}
                <h2 className={sideBarSubHeading}>📁 Objects</h2>
                <li className={sideBarIndex}>
                    <Link to="/reference/objects/ml-object" className={sideBarIndexLink}>MLObject</Link>
                </li>
                <li className={sideBarIndex}>
                    <Link to="/reference/objects/ml-label" className={sideBarIndexLink}>MLLabel</Link>
                </li>
                <li className={sideBarIndex}>
                    <Link to="/reference/objects/ml-keypoint" className={sideBarIndexLink}>MLKeyPoint</Link>
                </li>
                <li className={sideBarIndex}>
                    <Link to="/reference/objects/ml-pose" className={sideBarIndexLink}>MLPose</Link>
                </li>
                <li className={sideBarIndex}>
                    <Link to="/reference/objects/ml-face" className={sideBarIndexLink}>MLFace</Link>
                </li>
            </div>
        </ul>
    )
}
  
export default SideBar
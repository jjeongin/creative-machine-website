import * as React from 'react'
import {
    footerContainer,
    footerContact,
    footerContactHeading,
    footerContactText,
    footerProjectDescription,
    footerProjectDescriptionText,
} from './layout.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={footerContainer}>
                {/* contact */}
                <div className={footerContact}>
                    <p className={footerContactHeading}>Contact Us</p>
                    <a href="mailto: jl11640@nyu.edu">
                        <p className={footerContactText}>
                        ✉️ Email
                        </p>
                    </a>
                </div>
                {/* brief project description */}
                <p className={footerProjectDescriptionText}>Creative Machine is developed by Jeongin Lee as a Google Summer of Code 2022 project under the guidance of Andres Colubri and Daniel Shiffman.</p>
            </div>
        </footer>
    )
}

export default Footer
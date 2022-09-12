import * as React from 'react'
import {
    footerContact,
    footerContactHeading,
    footerContactText,
    footerProjectDescription
} from './layout.module.css'

const Footer = () => {
    return (
        <footer>
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
            <div>
                <p className={footerProjectDescription}>Creative Machine is developed by Jeongin Lee as a Google Summer of Code 2022 project under the guidance of Andres Colubri and Daniel Shiffman.</p>
            </div>
        </footer>
    )
}

export default Footer
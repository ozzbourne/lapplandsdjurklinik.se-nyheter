import React from 'react'
import siteLogo from '../images/Lapplands_djurklinik_250px.png'
import { LogoWrapper, Logo } from './StyledComponents/MenuStyles'

const LogoSection = () => (
    <LogoWrapper >
        <a href="http://www.lapplandsdjurklinik.se/"><Logo src={siteLogo} alt="Logo"/></a>
    </LogoWrapper>
)

export default LogoSection;
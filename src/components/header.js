import React from "react"
import MainMenu from './MainMenu'
import LogoSection from './LogoSection'
import MobileMenu from './MobileMenu'
import { HeaderWrapper } from './StyledComponents/MenuStyles'

const Header = () => (
  <>
    <HeaderWrapper >
        <LogoSection />
        <MainMenu />
        <MobileMenu />
    </HeaderWrapper>
   
  </>
)



export default Header

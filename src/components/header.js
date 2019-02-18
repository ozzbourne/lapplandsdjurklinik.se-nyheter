import React from "react"
import MainMenu from './MainMenu'
import styled from 'styled-components'
import LogoSection from './LogoSection'
import MobileMenu from './MobileMenu'

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(0,0,0,.05);
  padding-left: 54px;
  padding-right: 54px;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 1;
  @media only screen and (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
    height: 64px;
  }    
`;

const Header = (props) => (
  <>
    <HeaderWrapper >
        <LogoSection />
        <MainMenu />
        <MobileMenu />
    </HeaderWrapper>
   
  </>
)



export default Header

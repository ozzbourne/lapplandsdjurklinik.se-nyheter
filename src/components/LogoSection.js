import React from 'react'
import siteLogo from '../images/Lapplands_djurklinik_250px.png'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding-top: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        line-height: 72px;
        display:flex;
        @media only screen and (max-width: 500px) {
            width: 150px;
        } 
    }   
`;
const Logo = styled.img`
    margin-bottom: 0;
    align-items: center;
    justify-content: center;
`;

const LogoSection = () => (
    <Wrapper >
        <a href="http://www.lapplandsdjurklinik.se/"><Logo src={siteLogo} alt="Logo"/></a>
    </Wrapper>
)

export default LogoSection;
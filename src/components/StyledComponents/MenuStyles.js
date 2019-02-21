//Skapar upp alla styled components för menyn för export

import styled from 'styled-components'
import varaVannerLogo from '../../images/varavanner-menu-icon.png'

/* ********** */

//Menu styles
export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid rgba(0,0,0,.05);
  padding-left: 54px;
  padding-right: 54px;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 1;
  .varavanner-menu-icon {
    background-image: url(${varaVannerLogo});
    background-repeat: no-repeat;
    background-position: center;
    padding: 10px;
    padding-right: 40px;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -ms-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    span {
        visibility: hidden;
    }
    :hover {
        -moz-transform: scale(1.02);
        -webkit-transform: scale(1.02);
        -o-transform: scale(1.02);
        -ms-transform: scale(1.02);
        transform: scale(1.02);
        filter: drop-shadow(2px 2px 2px gray);
    }
    }
    .red-menu {
        color: #E63F25 !important;
}
  @media only screen and (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
    height: 64px;
  }    
`;
export const MainMenuWrapper = styled.ul`
width: 100%;
margin-bottom: 0;
margin-left: 0;
display: flex;
justify-content: flex-end;
box-sizing: border-box;
list-style: none;
li {
    margin-bottom: 0;
    height: 72px;
    a {
        line-height: 72px;
        text-decoration: none;
        color: #0f0f0f;
        font-size: 19px;
        letter-spacing: 1px;
        padding-left: 10px;
        padding-right: 10px;
        transition: color .3s linear;
        padding-top: 20px;
        padding-bottom: 20px;
        span {
            padding-top: 20px;
            padding-bottom: 20px;
            transition: .25s ease-out;
            border-top: 1px solid rgba(39,105,130, 0);
            border-bottom: 1px solid rgba(39,105,130, 0);
        }
        :visited {
            color: #0f0f0f;
        }
        :hover {
            color: #276982;
        }
    }
    :last-child{
        a {
            padding-right: 0;
        }
    }
    :hover {
        a {
            span {
                padding-top: 3px;
                padding-bottom: 3px;
                border-color: rgba(39,105,130, 1);
            }
        }
    }
}
`;
export const StyledMobileMenu = styled.div`
.bm-item {
    text-align:center;  
    display: inline-block;
    text-decoration: none;
    margin-bottom: 5vh;
    color: black;
    transition: color 0.2s;
    outline: 0;
    margin: 0;
    padding: 4px 0px;
    line-height: 1.5em;
    :not(.varavanner-menu-icon){
        text-align: left;
        font-family: PTSans, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 15px;
    }
}
.bm-item:hover {
    color: blue;
}
.bm-burger-button {
    position: fixed;
    width: 28px;
    height: 22px;
    right: 36px;
    top: 25px;
    transition: .2s;
    :hover {
        .bm-burger-bars{
            background: #276982;
            opacity: 1 !important;
        }
    }
    ::before {
        content: "MENU";
        position: absolute;
        font-family: PTSans, 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 800;
        right: 38px;
        font-size: 18px;
        // @media only screen and (max-width: 500px) {
        //     font-size: 12px;
        // }
    }
    @media only screen and (max-width: 500px) {
        right: 15px;
    }
}
.bm-burger-bars {
    background: #373a47;
    transition: .2s;
    height: 18% !important;
}
.bm-cross-button {
    height: 41px !important;
    width: 30px !important;
}
.bm-cross {
    height: 30px !important;
    width: 6px !important;
    background: black;
}
.bm-menu-wrap{
    width: 280px !important;
}
.bm-menu {
    background: white;
    padding: 40px 18px 10px 36px;
    font-size: 2em;
}
.bm-morph-shape {
    fill: #373a47;
}
.bm-item-list {
    color: #b8b7ad;
}

.bm-overlay {
    background: rgba(0, 0, 0, 0.5) !important;
    left: 0;
    cursor: pointer;
}
`;
export const LogoWrapper = styled.div`
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
export const Logo = styled.img`
margin-bottom: 0;
align-items: center;
justify-content: center;
`;
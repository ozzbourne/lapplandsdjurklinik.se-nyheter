import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import varaVannerImg from '../images/varavanner-menu-icon.png'
import { push as BurgerMenu } from 'react-burger-menu'
import { Link } from 'gatsby'

const StyledBurgerMenu = styled.div`
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
        color: white;
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
`

const Logo = styled.img`
    width: 30vw;
    display: block;
    margin: auto;
`
export default () => (
    <StaticQuery 
        query={
            graphql`
                query {
                    allWordpressWpApiMenusMenusItems(filter:{name:{eq:"Main Menu"}}) {
                        edges {
                          node {
                            items{
                              title
                              classes
                              url
                              object_id
                            }
                          }
                        }
                      }
                }
            `
        }
        render={data => (
            <StyledBurgerMenu >
                <BurgerMenu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
                {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => 
                <a href={item.url} className={item.classes}><span>{item.title}</span></a>
                
                // <MobileMenu key={item.object_id} menuItem={item}/>
                
                )}
                </BurgerMenu>
            </StyledBurgerMenu>
        )}
    />
)

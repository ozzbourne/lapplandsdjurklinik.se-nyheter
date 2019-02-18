import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'
import varaVannerImg from '../images/varavanner-menu-icon.png'

const MenuWrapper = styled.ul`
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

class MainMenu extends React.Component {
    render(){
        return(
            <li>
                <a href={this.props.menuItem.url} className={this.props.menuItem.classes}><span>{this.props.menuItem.title}</span></a>
            </li>
        )
    }
}
    


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
            <MenuWrapper className="desktop-menu">
                {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => <MainMenu key={item.object_id} menuItem={item}/>)}
            </MenuWrapper>
        )}
    />
)


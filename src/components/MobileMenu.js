import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { push as MobileMenu } from 'react-burger-menu'
import { StyledMobileMenu } from './StyledComponents/MenuStyles'

// Hämtar in hela menyn som heter "Main Menu" från wordpress. Använder react-burger-menu för att skapa en snygg och funktionell mobil-menu.
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
            <StyledMobileMenu >
                <MobileMenu right pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
                {/* Loopar genom alla items i meny, objektet och hämtar in relevant data som används för att skapa de olika länkarna. */}
                {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => 
                    <a href={item.url} className={item.classes}><span>{item.title}</span></a>
                
                // <MobileMenu key={item.object_id} menuItem={item}/>
                
                )}
                </MobileMenu>
            </StyledMobileMenu>
        )}
    />
)

import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { MainMenuWrapper } from './StyledComponents/MenuStyles'

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
            <MainMenuWrapper className="desktop-menu">
                {data.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => <MainMenu key={item.object_id} menuItem={item}/>)}
            </MainMenuWrapper>
        )}
    />
)


import React from "react"
import PropTypes from "prop-types"
import BlogPost from '../components/BlogPost'
import Layout from "../components/layout"
import styled from 'styled-components'

const H1Text = styled.h1`
    text-align: center;
    position: relative;
    padding-bottom: 10px;
    ::after {
        display: block;
          content: '';
         width: 10%;
         height: 1px;
         background: #4DC5D8;
         position: absolute;
         bottom: 0;
         left: 45%;
       }
`;

class IndexPage extends React.Component {
  
  render() {
      const data = this.props.data
      return(
          <Layout>
              <H1Text className="news-h1">Nyheter</H1Text>

              {data.allWordpressPost.edges.map(({node}) => (
                  <BlogPost 
                    key={node.slug}
                    slug={node.slug}
                    title={node.title}
                    excerpt={node.excerpt}
                    date={node.date}
                    //Kollar om det finns featured media, annars skicka bara tom sträng.
                    imgURL={node.featured_media != null ? node.featured_media.source_url : ""}
                    altText={node.featured_media != null ? node.featured_media.alt_text : ""}
                    color={node.acf.featured_color}
                  />
              ))}

          </Layout>
      )
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default IndexPage

export const pageQuery = graphql`
  query postsQuery{
      allWordpressPost{
          edges{
              node{
                  id
                  title
                  excerpt
                  slug
                  date(formatString: "MMMM DD, YYYY")
                  featured_media {
                    source_url
                    alt_text
                  }
                  acf {
                      featured_color
                  }
              }
          }
      }
  }
`

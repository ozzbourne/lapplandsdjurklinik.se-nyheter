import React from "react"
import PropTypes from "prop-types"
import BlogPost from '../components/BlogPost'
import Layout from "../components/layout"
import { StyledH1WithUnderline } from '../components/StyledComponents/IndexStyles'

class IndexPage extends React.Component {
  render() {
      
      return(
          <Layout>
              <StyledH1WithUnderline className="news-h1">Nyheter</StyledH1WithUnderline>

              {this.props.data.allWordpressPost.edges.map(({node}) => (
                  <BlogPost 
                //   All data nedan hämtas med graphQL längst ner i filen.
                    key={node.slug}
                    slug={node.slug}
                    title={node.title}
                    excerpt={node.excerpt}
                    date={node.date}
                    //Kollar om det finns featured_media från WordPress, annars skicka bara tom sträng.
                    imgURL={node.featured_media != null ? node.featured_media.source_url : ""}
                    altText={node.featured_media != null ? node.featured_media.alt_text : ""}
                //   Tar hjälp av Wordpress plugin ACF för att skicka med mer data till wp-json som kan hämtas med graphQL
                    color={node.acf.featured_color}
                //   Alla bilder kommer att använda Gatsby Image. Detta för att underlätta för framtiden där man inte behöver optimera bilder innan de laddas upp på WordPress
                //   För statiska bilder kan man hämta enligt "image.js" och importera, men då varje inlägg måste hämta unik bild så görs det i denna fil.     
                    gatsbyImage={node.featured_media !== null ? node.featured_media.localFile.childImageSharp.fluid : ""}
                  />
              ))}

          </Layout>
      )
  }
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired
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
                    localFile {
                        childImageSharp {
                            fluid(maxWidth: 400) {
                                ...GatsbyImageSharpFluid
                              }
                        }
                    }
                  }
                  acf {
                      featured_color
                  }
              }
          }
      }
  }
`

import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Img from "gatsby-image"

// Detta fungerar som mall till alla "posts", dvs inlägg. 

class PostTemplate extends Component {
    
  render() {
    const post = this.props.data.wordpressPost;
    const media = post.featured_media;

    return (
        <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        {/* Om det finns featured image kommer den visas, annars returneras null. */}
        {media != null ? 
            <div>
                <Img fluid={media.localFile.childImageSharp.fluid} />
                {/* {Utan Gatsby Image:  <img style={{width: "100%"}} src={media.source_url} alt={media.alt_text}/> */}
            </div> 
            : null}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query ($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      featured_media {
        source_url
        alt_text
        localFile {
          childImageSharp {
            fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
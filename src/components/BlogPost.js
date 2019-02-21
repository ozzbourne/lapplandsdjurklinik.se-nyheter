import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from "gatsby-image"

import linkImg from '../images/link.png'
import { BlogPostWrapper, SectionLeft, SectionRight, PostDate, CustomLink, ImageContainer, OverlayImg } from './StyledComponents/BlogPostStyles'

class BlogPost extends React.Component {
    render(){
        return(
            <BlogPostWrapper key={this.props.slug} className={"post"} style={{ marginBottom: 50 }}>
                <SectionLeft>
                    <CustomLink to={'/posts/' + this.props.slug}>
                        <h2 className="link-animation">{this.props.title}</h2>
                    </CustomLink>
                    <PostDate>
                        Postad: {this.props.date}
                    </PostDate>
                    <div className={"post-content"} dangerouslySetInnerHTML={{__html: this.props.excerpt}} />
                    <CustomLink to={'/posts/' + this.props.slug}>
                        <p>Läs mer &#x2192;</p>
                    </CustomLink>
                </SectionLeft>
                <SectionRight>
                    <Link to={'/posts/' + this.props.slug}>
                        <ImageContainer color={this.props.color}>

                            {/* Ser till att det finns en bild att visa upp, annars gör ingenting. */}
                            {this.props.gatsbyImage !== "" ? 
                                <Img style={{marginTop: "50px"}} fluid={this.props.gatsbyImage} />
                                // Om inte Gatsby Image används:  <Image src={this.props.imgURL} alt={this.props.altText}/>
                            : null}
                            <div className="overlay">
                                {this.props.color !== "" || null ? 
                                    <OverlayImg  src={linkImg} alt="OverlayImg"/>
                                : null}
                            </div>
                        </ImageContainer>
                    </Link>
                </SectionRight>
            </BlogPostWrapper>
        )
    }
}

BlogPost.propTypes = {
    altText: PropTypes.string,
    date: PropTypes.string,
    excerpt: PropTypes.string,
    imgURL: PropTypes.string,
    slug: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.string,
}


export default BlogPost;
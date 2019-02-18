import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import linkImg from '../images/link.png'

// Styled components
const Wrapper = styled.div`
    display: flex;
    margin-top: 50px;
    margin-bottom: 25px;
    padding-bottom: 50px;
    border-bottom: 1px solid black;


    @media (max-width: 900px) {
        flex-direction: column;
    }
`;
const SectionLeft = styled.div`
    flex: 2;
`;
const SectionRight = styled.div`
    flex: 1;
 `;
const PostDate = styled.p`
    font-size: 14px;
    font-weight: bold;
`;
const CustomLink = styled(Link)`
    text-decoration: none;
    color: black;

    :visited {
        color: black;
    }
    :hover {
        color: #276982;
        text-decoration: underline;
    }
    @media (pointer: fine) {
        .link-animation {
            margin-bottom: 5px;
            display: inline-block;
            text-decoration: none;
            ::after {
                content: '';
                display: block;
                width: 0;
                height: 1px;
                background: #276982;
                transition: width .3s;
            }
            :hover::after {
                width: 100%;
            }
        }
    }
`;
const Container = styled.div`
    position: relative;
    width: 100%;
    .overlay {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: .5s ease;
        background-color: ${props => props.color};
    }
    :hover .overlay {
        opacity: .65;
    }
`;
const Image = styled.img`
    display: block;
    width: 100%;
    height: auto;
    margin-top: 50px;
`;
const OverlayImg = styled.img`
    // color: white;
    // font-size: 20px;
    width: 20%;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
`;

class BlogPost extends React.Component {
    render(){
        return(
            <Wrapper key={this.props.slug} className={"post"} style={{ marginBottom: 50 }}>
                <SectionLeft>
                        {/* Se till att nedanstående länk ändras till mappens namn som ligger på FTP 
                        MÅSTE ändras till 'skosegnose/posts/' innan build, se till att ändra på allt! Även bilden och "Läs mer"*/}
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
                        <Container color={this.props.color}>
                            {this.props.imgURL !== "" ? 
                                <Image src={this.props.imgURL} alt={this.props.altText}/>
                            : null}
                            <div className="overlay">
                                {this.props.color !== "" || null ? 
                                    <OverlayImg  src={linkImg} alt="OverlayImg"/>
                                : null}
                            </div>
                        </Container>
                    </Link>
                </SectionRight>
            </Wrapper>
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
    color: PropTypes.string
}


export default BlogPost;
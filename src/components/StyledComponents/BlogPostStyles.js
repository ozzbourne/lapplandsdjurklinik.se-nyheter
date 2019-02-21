//Skapar upp alla styled components för BlogPost-komponenterna för export

import styled from 'styled-components'
import { Link } from 'gatsby'



/* ********** */

//BlogPost-links
export const BlogPostWrapper = styled.div`
    display: flex;
    margin-top: 50px;
    margin-bottom: 25px;
    padding-bottom: 50px;
    border-bottom: 1px solid black;


    @media (max-width: 900px) {
        flex-direction: column;
    }
`;
export const SectionLeft = styled.div`
    flex: 2;
    padding-right: 50px;
`;
export const SectionRight = styled.div`
    flex: 1;
 `;
export const PostDate = styled.p`
    font-size: 14px;
    font-weight: bold;
`;
export const CustomLink = styled(Link)`
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
export const ImageContainer = styled.div`
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
export const OverlayImg = styled.img`
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
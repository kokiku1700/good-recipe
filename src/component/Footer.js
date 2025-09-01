import styled from "styled-components";
import { Link } from "react-router-dom";
const Footer = () => {

    return (
        <StyledFooter>
            <StyledLink to="/street">찾아오는 길</StyledLink>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    width: 100%;
    color: white;
    background: #1f3b2c;
`;

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
`;


export default Footer;
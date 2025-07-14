import styled from "styled-components";
import '../assets/fonts/fonts.css';
import { Link } from "react-router-dom";
const Logo = () => {

    return (
        <StyledLink to="/">선한레시피</StyledLink>
    );
};

const StyledLink = styled(Link)`
    font-family: 'Shilla_CultureB-Bold';
    font-size: 40px;
    color: brown;
    text-decoration: none;
    padding: 0 1%;
`;

export default Logo;
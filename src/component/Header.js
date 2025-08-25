import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./components/Logo";
import { breakPoints } from "../constants/breakPoints";
import mobileMenu from "../assets/img/mobileMenu.png";
import mobileClose from "../assets/img/mobileClose.png";

import { useState } from "react";

const Header = () => {
    const [bool, setBool] = useState(false);

    const toggleMenu = () => {
        setBool(!bool);
    };

    return (
        <Div>
            <Logo />
            <Ul>
                <StyledLink to="/menu"><Li>메뉴</Li></StyledLink>
                <StyledLink to="/reserve"><Li>예약</Li></StyledLink>
                <StyledLink to="/reserveCheck"><Li>예약 확인</Li></StyledLink>
                <StyledLink to="/faq"><Li>FAQ</Li></StyledLink>
            </Ul>
            <Img onClick={toggleMenu} src={bool ? mobileClose : mobileMenu} alt="mobileMenu" />
        </Div>
    );
};

const Div = styled.div`
    z-index: 999;
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    user-select: none;

    ${breakPoints.small} {
        justify-content: space-between;
        padding: 1% 0;
    };
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    color: black;
    width: 16%;
    margin: 0 4.5%;
    padding: 2.5% 0;
    
    &:hover{
        color: #bbb;
    };

    ${breakPoints.small} {
        font-size: 15px;
        font-weight: bold;
    };
`;

const Ul = styled.ul`
    position: relative;
    width: 75%;
    display: flex;
    justify-content: space-around;

    ${breakPoints.small} {
        display: none;
    };
`

const Li = styled.li`
    list-style: none;
    text-align: center;
`;

const Img = styled.img`
    display: none;
    width: 30px;
    
    ${breakPoints.small} {
        display: block;
        margin-right: 5%;
    };

`;


export default Header;
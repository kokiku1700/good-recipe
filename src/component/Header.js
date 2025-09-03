import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./components/Logo";
import { breakPoints } from "../constants/breakPoints";
import mobileMenu from "../assets/img/mobileMenu.png";
import mobileClose from "../assets/img/mobileClose.png";
import { useEffect, useState } from "react";

const Header = () => {
    const [bool, setBool] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(0);
    const [headerColor, setHeaderColor] = useState("#FFFDF6");
    const [headShadow, setHeadShadow] = useState("none");
    
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };

    useEffect(() => {
        window.addEventListener("scroll", updateScroll);
        return() => window.removeEventListener("scroll", updateScroll);
    }, []);

    useEffect(() => {
        if ( scrollPosition > 100 ) {
            setHeaderColor("#FAF6E9");
            setHeadShadow("0px 2px 4px #cac9c8ff");
        } else {
            setHeaderColor("#FFFDF6");
            setHeadShadow("none");
        } 
    }, [scrollPosition]);

    const toggleMenu = () => {
        setBool(!bool);
    };

    return (
        <Div $background={headerColor} $boxShadow={headShadow}>
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
    padding: .5% 0;
    user-select: none;
    background: ${props => props.$background};
    box-shadow: ${props => props.$boxShadow};
    transition: background-color 0.5s ease-in-out, box-shadow 0.5s ease-in-out;

    ${breakPoints.small} {
        justify-content: space-between;
        padding: 1% 0;
    };
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 18px;
    color: black;
    width: 20%;
    margin: 0 4.5%;
    padding: 2.5% 0;
    
    &:hover{
        color: rgb(160, 200, 120);
    };

    ${breakPoints.small} {
        font-size: 15px;
        font-weight: bold;
    };
`;

const Ul = styled.ul`
    position: relative;
    width: 40%;
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
    cursor: pointer;

    ${breakPoints.small} {
        display: block;
        margin-right: 5%;
    };

`;


export default Header;
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {

    return (
        <Div>
            <Logo />
            <Ul>
                <StyledLink to="/menu"><Li>메뉴</Li></StyledLink>
                <StyledLink to="/reserve"><Li>예약</Li></StyledLink>
                <StyledLink to="/reserveCheck"><Li>예약 확인</Li></StyledLink>
                <StyledLink to="/faq"><Li>FAQ</Li></StyledLink>
            </Ul>
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
    border-bottom: 1px solid #000; 
    background: #fff;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    color: black;
    width: 25%;
    padding: 2.5% 0;

    &:hover{
        color: #bbb;
    }
`;

const Ul = styled.ul`
    width: 75%;
    display: flex;
    justify-content: space-around;
`

const Li = styled.li`
    list-style: none;
    text-align: center;
`;

export default Header;
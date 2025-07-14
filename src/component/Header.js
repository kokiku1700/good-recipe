import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {

    return (
        <Div>
            <Logo />
            <Ul>
                <Li><StyledLink to="/menu">메뉴</StyledLink></Li>
                <Li><StyledLink to="/reserve">예약</StyledLink></Li>
                <Li><StyledLink to="/reserveCheck">예약 확인</StyledLink></Li>
                <Li><StyledLink to="/faq">FAQ</StyledLink></Li>
            </Ul>
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1.3% 0;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 20px;
    color: black;
`;

const Ul = styled.ul`
    width: 75%;
    display: flex;
    justify-content: space-around;
`

const Li = styled.li`
    list-style: none;
`;

export default Header;
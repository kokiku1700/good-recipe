import styled from "styled-components";
import { Link } from "react-router-dom";


const MobileHeader = ({ bool, toggleMenu }) => {

    const onClickToggle = () => {
        toggleMenu();
    };

    return (
        <Div $display={bool}>
            <Ul>
                <StyledLink to="/menu" onClick={onClickToggle}><Li>메뉴</Li></StyledLink>
                <StyledLink to="/reserve" onClick={onClickToggle}><Li>예약</Li></StyledLink>
                <StyledLink to="/reserveCheck" onClick={onClickToggle}><Li>예약 확인</Li></StyledLink>
                <StyledLink to="/faq" onClick={onClickToggle}><Li>FAQ</Li></StyledLink>
            </Ul>
        </Div>
    )
};

const Div = styled.div`
    display: ${props => props.$display ? "block" : "none"};

`;

const StyledLink = styled(Link)`

`;

const Ul = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Li = styled.li`
    list-style: none;
`;

export default MobileHeader;
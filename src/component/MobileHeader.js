import styled from "styled-components";
import { Link } from "react-router-dom";


const MobileHeader = ({ bool, toggleMenu }) => {

    const onClickToggle = () => {
        toggleMenu();
    };

    return (
        <Div $bool={bool}>
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
    width: 100%;
    display: ${props => props.$bool ? "block" : "none"};
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    
`;

const Ul = styled.ul`
    width: 95%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    margin: 0 auto;
    padding: 2% 0;
`;

const StyledLink = styled(Link)`
    margin: 1% 0;
    text-decoration: none;
    color: black;
    text-align: center;
    padding: 5% 0;
    border: 1px solid #6BA368;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 500;
`;

const Li = styled.li`
    list-style: none;
    width: 100%;
`;

export default MobileHeader;
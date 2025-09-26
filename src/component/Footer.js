import styled from "styled-components";
import { Link } from "react-router-dom";
const Footer = () => {

    return (
        <StyledFooter>
            <H2>선한레시피</H2>
            <Address>경기 성남시 분당구 서판교로44번길 17-3</Address>
            <P>전화 : 031-705-3315</P>
            <StyledLink to="/street">찾아오는 길</StyledLink>
            <Span>
                <P>이용약관</P>
                <P> | </P>
                <P>개인정보처리방침</P>
            </Span>
            <P>"당신의 식탁에 따뜻함을 더합니다."</P>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3% 0;
    background: #e6eeeaff;
`;

const StyledLink = styled(Link)`
    
    text-decoration: none;
`;

const H2 = styled.h2`
    margin-bottom: 3%;
`;

const Address = styled.address`

`;

const Span = styled.span`
    display: flex;
`;

const P = styled.p`

`;


export default Footer;
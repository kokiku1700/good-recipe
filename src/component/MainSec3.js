import styled from "styled-components";
import B from "../assets/img/B.png";
import boxmenu from "../assets/img/boxMenu.jpg";
import C from "../assets/img/C.png";
import { breakPoints } from "../constants/breakPoints";

const MainSec3 = () => {
    

    return (
        <Section3>
            <TextWrap>
                <Img1 src={B} />
                <P>“도시락·반찬, 1개부터 단체까지 포장 OK!”</P>
                <P>“모든 메뉴 포장 가능합니다 — 전화 주문·배달 앱 이용 가능”</P>
                <P>“한 끼든 단체든, 편리하게 포장하세요”</P>
                <Img2 src={C} />
            </TextWrap>
            <ImgWrap>
                <MenuImg src={boxmenu} />
            </ImgWrap>
        </Section3>
    )
};

const Section3 = styled.section`
    width: 100%;
    padding: 1% 0;
    border-bottom: 1px solid white;
    display: flex;

    ${breakPoints.small} {
        flex-direction: column;
    }
`;

const TextWrap = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${breakPoints.medium} {
        padding: 1% 0;
    }
`;

const ImgWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const Img = styled.img`
    width: 10%;
    position: absolute;
`;

const Img1 = styled(Img)`
    top: 15%;
    left: 15%;

    ${breakPoints.medium} {
        top: 10%;
        left: 10%;
    }
`;

const Img2 = styled(Img)`
    bottom: 15%;
    right: 15%;

    ${breakPoints.medium} {
        bottom: 10%;
        right: 10%;
    }
`;

const P = styled.p`
    margin: 2% 0;
    font-size: 20px;
    ${breakPoints.medium} {
        font-size: 1.8vw;
    }
`;

const MenuImg = styled.img`
    width: 70%;
    margin-right: 1%;
    box-shadow: 3px 3px 5px #6BA368;
    border-radius: 20px;
    
`;

export default MainSec3;
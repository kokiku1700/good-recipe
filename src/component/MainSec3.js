import styled from "styled-components";
import B from "../assets/img/B.png";
import boxmenu from "../assets/img/boxMenu.jpg";
import C from "../assets/img/C.png";
import { breakPoints } from "../constants/breakPoints";
import { useState, useEffect } from "react";
import { keyframes, css } from "styled-components";

const MainSec3 = () => {
    const [trigger, setTrigger] = useState(false);

    

    useEffect(() => {
        const handleScroll = () => {
            const location = window.scrollY || document.documentElement.scrollTop;

            if ( location >= 1300 &&!trigger ) {
                setTrigger(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, [trigger]);

    return (
        <Section3>
            <TextWrap $trigger={trigger}>
                <Img1 src={B} />
                <P>“도시락·반찬, 1개부터 단체까지 포장 OK!”</P>
                <P>“모든 메뉴 포장 가능합니다 — 전화 주문·배달 앱 이용 가능”</P>
                <P>“한 끼든 단체든, 편리하게 포장하세요”</P>
                <Img2 src={C} />
            </TextWrap>
            <ImgWrap $trigger={trigger}>
                <MenuImg src={boxmenu} />
            </ImgWrap>
        </Section3>
    )
};

const UpDownB = keyframes`
    0% {
        top: 16%;
    }
    50% {
        top: 15%;
    }    
    100% {
        top: 16%;
    }
`;

const UpDownC = keyframes`
    0% {
        bottom: 16%;
    }
    50% {
        bottom: 15%;
    }    
    100% {
        bottom: 16%;
    }
`;

const MoveAniLeft = keyframes`
    from{
        transform: translate(-1200px);
        opacity: 0;
    }
    to{
        tranform: translate(0);
        opacity: 1;
    }
`;
const MoveAniRight = keyframes`
    from{
        transform: translate(1200px);
        opacity: 0;
    }
    to{
        tranform: translate(0);
        opacity: 1;
    }
`;

const Section3 = styled.section`
    width: 100%;
    padding: 5% 0;
    border-bottom: 1px solid white;
    display: flex;
    overflow: hidden;

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
    opacity: 0;
    ${({ $trigger }) => $trigger && css`animation: ${MoveAniLeft} 1.5s ease-out forwards;`}

    ${breakPoints.medium} {
        padding: 1% 0;
        animation: none;
        opacity: 1;
    }
    ${breakPoints.verySmall} {
        padding: 15% 0;
    }
`;

const ImgWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    ${({ $trigger }) => $trigger && css`animation: ${MoveAniRight} 1.5s ease-out forwards;`}

    ${breakPoints.medium} {
        animation: none;
        opacity: 1;
    }
`;

const Img = styled.img`
    width: 10%;
    position: absolute;
`;

const Img1 = styled(Img)`
    left: 15%;
    animation: ${UpDownB} 2s infinite;

    ${breakPoints.medium} {
        top: 10%;
        left: 10%;
    }
    ${breakPoints.verySmall} {
        top: 5%;
        left: 5%;
    }
    
`;

const Img2 = styled(Img)`
    right: 15%;
    animation: ${UpDownC} 2s infinite;

    ${breakPoints.medium} {
        bottom: 10%;
        right: 10%;
    }
    ${breakPoints.verySmall} {
        bottom: 5%;
        right: 5%;
    }
`;

const P = styled.p`
    margin: 2% 0;
    font-size: 18px;
    text-shadow: 0px 0px 10px #A0C878; 
    ${breakPoints.medium} {
        font-size: 1.8vw;
    }
    ${breakPoints.verySmall} {
        font-size: 3vw;
    }
`;

const MenuImg = styled.img`
    width: 70%;
    margin-right: 1%;
    box-shadow: 0px 0px 8px #6BA368; 
    border-radius: 20px;
    
    ${breakPoints.verySmall} {
        width: 80%;
    }
`;

export default MainSec3;
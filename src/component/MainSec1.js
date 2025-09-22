import styled, { keyframes } from "styled-components"
import lotusLeafILL from "../assets/img/lotusLeafILL.png";
import chonggak from "../assets/img/chonggak.png";
import donwArrow from "../assets/img/downArrow.png";
import tofu from "../assets/img/tofu.png";
import herbs from "../assets/img/herbsILL.png";
import { breakPoints } from "../constants/breakPoints";

const MainSec1 = () => {
    

    return (
        <Section1>
            <Span1>약식동원(藥食同源)</Span1>
            <Span2>"약과 음식은 근본이 같다"는 뜻으로</Span2>
            <Span3>선한레시피가 지켜가는 마음입니다.</Span3>
            <ImgL src={lotusLeafILL} />
            <ImgC src={chonggak} />
            <ImgT src={tofu} />
            <ImgH src={herbs} />
            <ArrowImg src={donwArrow} />
        </Section1>
    )
};

const UpDown = keyframes`
    0% {
        bottom: 15%;
    }
    50% {
        bottom: 13%;
    }    
    100% {
        bottom: 15%;
    }
`;

const Opacity = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const Section1 = styled.section`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 10% 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${breakPoints.verySmall} {
        padding: 20% 0;
    }
`;

const Span1 = styled.span`
    margin: 1.5% 0;
    z-index: 99;
    opacity: 0;
    animation: ${Opacity} 3s 0s ease;
    animation-fill-mode: forwards;
    font-size: 3vw;
    font-weight: bold;
    font-family: 'ChosunGs';
    cursor: default;
    user-select: none;
    background: none;

    ${breakPoints.verySmall} {
        margin: 2% 0;
        font-size: 6vw;
    }
`;
const Span2 = styled(Span1)`
    font-size: 2.2vw;
    animation: ${Opacity} 3s 1.5s ease;
    animation-fill-mode: forwards;

    ${breakPoints.verySmall} {
        margin: 2% 0;
        font-size: 4.2vw;
    }
`;
const Span3 = styled(Span1)`
    font-size: 2.2vw;
    animation: ${Opacity} 3s 1.5s ease;
    animation-fill-mode: forwards;

    ${breakPoints.verySmall} {
        margin: 2% 0;
        font-size: 4.2vw;
    }
`;

const Img = styled.img`
    width: 10%;
    position: absolute;
    opacity: 0;

    ${breakPoints.verySmall} {
        width: 13%;
    }
`;

const ImgL = styled(Img)`
    top: 10%;
    left: 10%;
    filter: drop-shadow(3px 3px 8px #6BA368);
    animation: ${Opacity} 3s 1.7s ease;
    animation-fill-mode: forwards;
    
    ${breakPoints.verySmall} {
        top: 15%;
        left: 5%;
    }
`;

const ImgC = styled(Img)`
    top: 30%;
    right: 10%;
    filter: drop-shadow(3px 3px 5px #dd8e74ff);
    animation: ${Opacity} 3s 2s ease;
    animation-fill-mode: forwards;

    ${breakPoints.verySmall} {
        top: 25%;
    }
`;

const ImgT = styled(Img)`
    bottom: 0%;
    right: 24%;
    animation: ${Opacity} 3s 1.8s ease;
    animation-fill-mode: forwards;

    ${breakPoints.verySmall} {
        bottom: 7%;
        right: 20%;
    }
`;

const ImgH = styled(Img)`
    bottom: 10%;
    left: 20%;
    filter: drop-shadow(3px 3px 5px #035112ff);
    animation: ${Opacity} 3s 2s ease;
    animation-fill-mode: forwards;

    ${breakPoints.verySmall} {
        bottom: 0%;
        left: 20%;
    }
`;

const ArrowImg = styled.img`
    width: 3%;
    position: absolute;
    filter: drop-shadow(1px 1px 1px black);
    animation: ${UpDown} 2s infinite;
    opacity: .7;

    ${breakPoints.verySmall} {
        display: none;
    }
`;

export default MainSec1;
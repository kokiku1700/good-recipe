import styled, { keyframes } from "styled-components"
import lotusLeafILL from "../assets/img/lotusLeafILL.png";
import donwArrow from "../assets/img/downArrow.png";

const MainSec1 = () => {
    

    return (
        <Section1>
            <Span1>약식동원(藥食同源)</Span1>
            <Span2>"약과 음식은 근본이 같다"는 뜻으로</Span2>
            <Span3>선한레시피가 지켜가는 마음입니다.</Span3>
            <Img src={lotusLeafILL} />
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
`;
const Span2 = styled(Span1)`
    font-size: 2.2vw;
    animation: ${Opacity} 3s 1.5s ease;
    animation-fill-mode: forwards;
`;
const Span3 = styled(Span1)`
    font-size: 2.2vw;
    animation: ${Opacity} 3s 1.5s ease;
    animation-fill-mode: forwards;
`;

const Img = styled.img`
    width: 10%;
    position: absolute;
    top: 13%;
    left: 13%;
    opacity: 0;
    animation: ${Opacity} 3s 1.5s ease;
    animation-fill-mode: forwards;
`;

const ArrowImg = styled.img`
    width: 3%;
    position: absolute;
    filter: drop-shadow(1px 1px 1px black);
    animation: ${UpDown} 2s infinite;
`;

export default MainSec1;
import styled, { keyframes } from "styled-components"
import lotusLeafILL from "../assets/img/lotusLeafILL.png";

const MainSec1 = () => {


    return (
        <Div>
            <Section1>
                <Span1>약식동원(藥食同源)</Span1>
                <Span2>"약과 음식은 근본이 같다"는 뜻으로</Span2>
                <Span3>선한레시피가 지켜가는 마음입니다.</Span3>
                <Img src={lotusLeafILL} />
            </Section1>
        </Div>
    )
};


const Opacity = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const Div = styled.div`
    width: 100%;
    border-bottom: 1px solid #fff
`;

const Section1 = styled.section`
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
    font-size: 50px;
    font-weight: bold;
    font-family: 'ChosunGs';
    cursor: default;
    user-select: none;
    background: none;
`;
const Span2 = styled(Span1)`
    animation: ${Opacity} 3s 3.2s ease;
    animation-fill-mode: forwards;

`;
const Span3 = styled(Span1)`
    animation: ${Opacity} 3s 6.4s ease;
    animation-fill-mode: forwards;
`;

const Img = styled.img`
    width: 10%;
    position: absolute;
    top: 13%;
    left: 13%;
    opacity: 0;
    animation: ${Opacity} 3s 8.6s ease;
    animation-fill-mode: forwards;

`;

export default MainSec1;
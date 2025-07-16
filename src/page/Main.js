import styled, { keyframes } from "styled-components";
import mainFirstImg from "../assets/img/main.jpg";
import "../assets/fonts/fonts.css";

const Main = () => {

    return(
        <Div>
            <FirstMain>
                <Span1>약식동원(藥食同源)</Span1>
                <Span2>"약과 음식은 근본이 같다"</Span2>
            </FirstMain>
        </Div>
    );
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
`;

const FirstMain = styled.div`
    position: relative;
    width: 100%;
    height: 900px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${mainFirstImg}) no-repeat center;
    background-size: cover;
    background-color: transparent;
    color: rgba(255,255,255,1);

    &:after {
        content: "";
        position: absolute;
        top: 0; 
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.3);
    }
`

const Span1 = styled.span`
    margin: 1.5% 0;
    z-index: 99;
    opacity: 0;
    animation: ${Opacity} 3s 0s ease;
    animation-fill-mode: forwards;
    font-size: 60px;
    font-weight: bold;
    font-family: 'ChosunGs';
`;
const Span2 = styled.span`
    margin: 1.5% 0;
    z-index: 99;
    opacity: 0;
    animation: ${Opacity} 3s 3.2s ease;
    animation-fill-mode: forwards;
    font-size: 60px;
    font-weight: bold;
    font-family: 'ChosunGs';
`;

export default Main;
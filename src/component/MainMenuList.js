import styled from "styled-components";
import prev from "../assets/img/prev.png";
import next from "../assets/img/next.png";
import { useRef, useState } from "react";

const MainMenuList = ({ menu }) => {
    const menuImg = [...menu]
    const [imgIdx, setImgIdx] = useState(1);
    const [slideTransition, setSlideTransition] = useState(true);
    const timeRef = useRef(false);
    const len = menuImg.length * 700;
    
    
    const nextMove = () => {
        if ( !timeRef.current ) {
            setImgIdx(imgIdx + 1);
            setSlideTransition(true);
            setTimeout(() => {
                if ( imgIdx === menuImg.length - 1) {
                    setImgIdx(1);
                    setSlideTransition(false);
                }
            }, 10);
            timeRef.current = true;
            setTimeout(() => {
                timeRef.current = false;
            }, 300);
        } 
    };

    const prevMove = () => {
        if ( !timeRef.current ) {
            setImgIdx(imgIdx - 1);
            setSlideTransition(true);
            setTimeout(() => {
                if ( imgIdx === 0) {
                    setImgIdx(menuImg.length - 2);
                    setSlideTransition(false);
                }
            }, 10);
            timeRef.current = true;
            setTimeout(() => {
                timeRef.current = false;
            }, 300);
        } 
    };
    return (
        <Div>
            <P>모든 정식의 반찬은 동일합니다.</P>
            <ImgWrap>  
                <Ul $transition={slideTransition} $length={len} translate={700 * imgIdx}>
                    {menuImg.map((e, i) => (
                        <Li key={i}>
                            <H2>{e.name}</H2>
                            <Img src={e.src} />
                            <Span>{e.explain}</Span>
                        </Li>
                    ))}
                </Ul>
            </ImgWrap>
            <ArrowImg $left="25" src={prev} onClick={prevMove} />
            <ArrowImg  $right="25" src={next} onClick={nextMove} />
        </Div>
    );
}

const Div = styled.div`
    position: relative;
    width: 100%;
    padding: 1% 0;
`;

const H2 = styled.h2`
    text-align: center;
`;

const P = styled.p`
    width: 80%;
    margin: 0 auto;
    text-align: center;
    color: red;
`;

const ImgWrap = styled.div`
    width: 700px;
    margin: 0 auto;
    overflow: hidden;
`;

const Ul = styled.ul`
    width: ${props => props.$length}px;
    transition: ${props => props.$transition ? "all .5s ease-in-out" : "none"};
    transform: ${props => `translateX(-` + props.translate + `px)`};
`;

const Li = styled.li`
    float: left;
    list-style: none;
    display: flex;
    flex-direction: column;
`;

const Img = styled.img`
    width: 700px;
    height: 600px;
`;

const Span = styled.span`
    margin: 0 auto;
`;

const ArrowImg = styled.img`
    position: absolute;
    top: 50%;
    left: ${props => props.$left}%;
    right: ${props => props.$right}%;
    cursor: pointer;
`;

export default MainMenuList;
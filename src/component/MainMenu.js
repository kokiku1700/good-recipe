import styled from "styled-components";
import {anchovy,
    aubergine,
    burdock_japchae,
    doenjang,
    herbs,
    kimchi,
    laver,
    lotus_leaf_rice,
    pancake,
    pork_doughnut,
    soy_sauce} from "../assets/img/MainMenuImgs";
import prev from "../assets/img/prev.png";
import next from "../assets/img/next.png";
import { useRef, useState } from "react";

const MainMenu = () => {
    const menu = [
        doenjang, lotus_leaf_rice, soy_sauce, laver, anchovy,
        kimchi, herbs, aubergine, pancake, burdock_japchae,
        pork_doughnut, doenjang, lotus_leaf_rice
    ];
    const [imgIdx, setImgIdx] = useState(1);
    const [slideTransition, setSlideTransition] = useState(true);
    const timeRef = useRef(false);

    const nextMove = () => {
        if ( !timeRef.current ) {
            setImgIdx(imgIdx + 1);
            setSlideTransition(true);
            setTimeout(() => {
                if ( imgIdx === menu.length - 1) {
                    setImgIdx(1);
                    setSlideTransition(false);
                }
            }, 10);
            timeRef.current = true;
            setTimeout(() => {
                timeRef.current = false;
            }, 500);
        } 
    };

    const prevMove = () => {
        if ( !timeRef.current ) {
            setImgIdx(imgIdx - 1);
            setSlideTransition(true);
            setTimeout(() => {
                if ( imgIdx === 0) {
                    setImgIdx(menu.length - 2);
                    setSlideTransition(false);
                }
            }, 10);
            timeRef.current = true;
            setTimeout(() => {
                timeRef.current = false;
            }, 500);
        } 
    };


    return (
        <Div>
            <ImgWrap>  
                <Ul $transition={slideTransition} translate={700 * imgIdx}>
                    {menu.map((e, i) => (
                        <Li key={i}>
                            <Img src={e} />
                        </Li>
                    ))}
                </Ul>
            </ImgWrap>
            <ArrowImg $left="25" src={prev} onClick={prevMove} />
            <ArrowImg  $right="25" src={next} onClick={nextMove} />
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
    padding: 1% 0;
`;

const ImgWrap = styled.div`
    width: 700px;
    margin: 0 auto;
    overflow: hidden;
`;

const Ul = styled.ul`
    width: 9100px;
    transition: ${props => props.$transition ? "all .5s ease-in-out" : "none"};
    transform: ${props => `translateX(-` + props.translate + `px)`};
`;

const Li = styled.li`
    float: left;
    list-style: none;
`;

const Img = styled.img`
    width: 700px;
    height: 600px;
`;

const ArrowImg = styled.img`
    position: absolute;
    top: 50%;
    left: ${props => props.$left}%;
    right: ${props => props.$right}%;
    cursor: pointer;
`;

export default MainMenu;
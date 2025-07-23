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
import { useCallback, useState } from "react";

const MainMenu = () => {
    const menu = [
        doenjang, lotus_leaf_rice, soy_sauce, laver, anchovy,
        kimchi, herbs, aubergine, pancake, burdock_japchae,
        pork_doughnut, doenjang, lotus_leaf_rice
    ];
    const [imgIdx, setImgIdx] = useState(1);

    const nextMove = useCallback(() => {
        if ( imgIdx === menu.length - 2 ) {
            setImgIdx(0);
        } else {
            setImgIdx(imgIdx + 1);
        }
    });

    const prevMove = useCallback(() => {
        if ( imgIdx === 0 ) {
            setImgIdx(menu.length - 2);
        } else {
            setImgIdx(imgIdx - 1);
        }
    }); 



    return (
        <Div>
            <ImgWrap>  
                <Ul idx={imgIdx} maxLen={menu.length} translate={700 * imgIdx}>
                    {menu.map(e => (
                        <Li>
                            <Img src={e} />
                        </Li>
                    ))}
                </Ul>
            </ImgWrap>
            <ArrowImg left="25" src={prev} onClick={prevMove} />
            <ArrowImg  right="25" src={next} onClick={nextMove} />
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
    transition: ${props => props.idx === 0 || props.idx === props.maxLen - 2 ? `none` : `all .5s ease-in-out`};
    transform: ${props => `translateX(-` + props.translate + `px)`};
`;

const Li = styled.li`
    float: left;
`;

const Img = styled.img`
    width: 700px;
    height: 600px;
`;

const ArrowImg = styled.img`
    position: absolute;
    top: 50%;
    left: ${props => props.left}%;
    right: ${props => props.right}%;
    cursor: pointer;
`;

export default MainMenu;
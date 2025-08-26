import styled from "styled-components";
import prev from "../assets/img/prev.png";
import next from "../assets/img/next.png";
import { useEffect, useRef, useState } from "react";

const MainMenuList = ({ menu }) => {
    const menuImg = [...menu];
    const [imgIdx, setImgIdx] = useState(1);
    const [slideTransition, setSlideTransition] = useState(true);
    const liRef = useRef(null);
    const ulRef = useRef(null);
    const timeRef = useRef(false);
    const [liSize, setLiSize] = useState({ width: 0, height: 0 });
    const len = menuImg.length * liSize.width;

    useEffect(() => {
        const width = liRef.current.offsetWidth;
        const height = liRef.current.offsetHeight;
        
        setLiSize({ width: width + 20, height: height });
    }, []);

    useEffect(() => {
        const ul = ulRef.current;
        const handleTransitionEnd = () => {
            if (imgIdx === menuImg.length - 1) {
            setSlideTransition(false);
            setImgIdx(1);
            } else if (imgIdx === 0) {
            setSlideTransition(false);
            setImgIdx(menuImg.length - 2);
            }
        };
        ul.addEventListener("transitionend", handleTransitionEnd);
        return () => ul.removeEventListener("transitionend", handleTransitionEnd);
    }, [imgIdx, menuImg.length]);

    const nextMove = () => {
        if ( !timeRef.current ) {
            setImgIdx(imgIdx + 1);
            setSlideTransition(true);
            
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
            
            timeRef.current = true;
            setTimeout(() => {
                timeRef.current = false;
            }, 300);
        } 
    };
    return (
        <Div>
            <P>모든 정식의 반찬은 동일하게 제공됩니다.</P>
            <ImgWrap $width={liSize.width + 200}>  
                <Ul ref={ulRef} $transition={slideTransition} $length={len} translate={liSize.width * imgIdx -100}>
                    {menuImg.map((e, i) => (
                        <Li ref={liRef} key={i}>
                            <ContentWrap>
                                <H2>{e.name}</H2>
                                <Img src={e.src} />
                                <Span>{e.explain}</Span>
                            </ContentWrap>
                            
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
    background: none;
    margin: 1%;
`;

const P = styled.p`
    width: 80%;
    margin: 0 auto;
    text-align: center;
    color: red;
`;

const ImgWrap = styled.div`
    width: ${props => props.$width}px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 15px;
`;

const Ul = styled.ul`
    width: ${props => props.$length}px;
    transition: ${props => props.$transition ? "all .5s ease-in-out" : "none"};
    transform: ${props => `translateX(-` + props.translate + `px)`};
`;

const Li = styled.li`
    width: 500px;
    height: 600px;
    float: left;
    list-style: none;
    margin: 10px;
    box-sizing: border-box;
    border-radius: 15px;
    background: #f9ecddff;
    box-shadow: 1px 1px 4px #6BA368;
`;

const ContentWrap = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: none;
`;

const Img = styled.img`
    width: 400px;
    height: 300px;
    border-radius: 15px;
    margin: 1%;
`;

const Span = styled.span`
    margin: 2% auto;
    background: none;
`;

const ArrowImg = styled.img`
    position: absolute;
    top: 50%;
    left: ${props => props.$left}%;
    right: ${props => props.$right}%;
    cursor: pointer;
`;

export default MainMenuList;
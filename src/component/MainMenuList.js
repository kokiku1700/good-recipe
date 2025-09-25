import styled from "styled-components";
import prev from "../assets/img/prev.png";
import next from "../assets/img/next.png";
import { useEffect, useRef, useState } from "react";
import { breakPoints } from "../constants/breakPoints";

const MainMenuList = ({ menu, menuName, menuListValue }) => {
    // 무한 캐러셀을 위해 첫 인덱스와 마지막 인덱스를 복사했다.
    // 하지만 약간의 부자연스러움이 있어서 한 개 씩 더 추가
    // 마지막 인덱스와 첫 번째 인덱스는 이미 menu에 포함되어 있음
    const menuImg = [menu[menu.length - 4], menu[menu.length - 3], ...menu, menu[2], menu[3]];
    // 현재 보여지는 이미지 번호
    const [imgIdx, setImgIdx] = useState(3);
    // 슬라이드 효과 
    // 무한 슬라이드에서 눈속임을 위한 변수
    // false일 때 transition을 없애기 위한 변수
    const [slideTransition, setSlideTransition] = useState(true);
    // ul의 넓이를 구하기 위한 변수
    const ulRef = useRef(null);
    // next버튼과 prev버튼 연타를 막아주는 변수
    const timeRef = useRef(false);
    // 슬라이드 버튼 빠르게 클릭 시 이미지 안나오는 버그를 막아줌
    // 즉 이미지가 이동 중일 때 클릭을 무시하게 해줌 
    const [animating, setAnimating] = useState(false);
    // 각 메뉴의 margin 포함된 넓이
    const [liSize, setLiSize] = useState(520);
    // ul의 총 길이.
    const len = menuImg.length * liSize;
    // 현재 브라우저 넓이
    const [browserWidth, setBrowserWdith] = useState(0);
    // 화면에 보여줄 이미지 개수
    const [visibleNum, setVisibleNum] = useState(3);

    useEffect(() => {
        setImgIdx(3);
        setSlideTransition(false);
    }, [menuListValue])

    useEffect(() => {
        setLiSize(window.innerWidth <= 765 ? 320 : 520);

    }, [browserWidth])

    // 화면에 크기에 따라 보여지는 슬라이드 개수를 조정하기 위한 코드
    useEffect(() => {        
        const handleBrowserWidth = () => {
            const width = window.innerWidth;
            setBrowserWdith(width);
            setVisibleNum(prev => {
                let next;
                if ( width <= 1300 ) next = 1;
                else if ( width <= 1900 ) next = 2;
                else next = 3;

                return prev !== next ? next : prev;
            });

            setSlideTransition(false);
            setImgIdx(i => i);
        };

        handleBrowserWidth();

        window.addEventListener("resize", handleBrowserWidth);

        return () => window.removeEventListener("resize", handleBrowserWidth);

    }, [visibleNum]);

    // 앞, 뒤로 슬라이드 이동 시 처음 혹은 마지막을 만났을 때 
    // 자연스러운 움직임을 위한 코드
    useEffect(() => {
        const ul = ulRef.current;
        const handleTransitionEnd = () => {
            setAnimating(false);
            if (imgIdx === menuImg.length - 3) {
            setSlideTransition(false);
            setImgIdx(3);
            } else if (imgIdx === 1) {
            setSlideTransition(false);
            setImgIdx(menuImg.length - 5);
            }
        };
        ul.addEventListener("transitionend", handleTransitionEnd);
        return () => ul.removeEventListener("transitionend", handleTransitionEnd);
    }, [imgIdx, menuImg.length]);

    const nextMove = () => {
        if (animating) return;

        if ( !timeRef.current ) {
            setAnimating(true);
            setImgIdx(imgIdx + 1);
            setSlideTransition(true);
            
            timeRef.current = true;
            setTimeout(() => {
                timeRef.current = false;
            }, 300);
        } 
    };

    const prevMove = () => {
        if (animating) return;

        if ( !timeRef.current ) {
            setAnimating(true);
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
            <H1>{menuName}</H1>
            <P>모든 정식의 반찬은 동일하게 제공됩니다.</P>
            <ImgWrap $width={liSize * visibleNum}>  
                <Ul ref={ulRef} $transition={slideTransition} $length={len} translate={liSize * imgIdx}>
                    {menuImg.map((e, i) => (
                        <Li key={i}>
                            <ContentWrap>
                                <H2>{e.name}</H2>
                                <Img src={e.src} />
                                <Span>{e.explain}</Span>
                            </ContentWrap>
                            
                        </Li>
                    ))}
                </Ul>
            </ImgWrap>
            <ArrowImg $left={browserWidth <= 430 ? "-2.5" : "2"} src={prev} onClick={prevMove} />
            <ArrowImg  $right={browserWidth <= 430 ? "-2.5" : "2"} src={next} onClick={nextMove} />
        </Div>
    );
}

const Div = styled.div`
    position: relative;
    width: 100%;
    padding: 1% 0;
`;

const H1 = styled.h1`
    margin: 1%;
    text-align: center;
    text-shadow: 0px 0px 40px rgba(114, 206, 22, 1);
`;

const H2 = styled.h2`
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
    background: linear-gradient(rgba(160, 200, 120, .3), rgba(221, 235, 157, .2));
    box-shadow: 0px 0px 4px #6BA368;

    ${breakPoints.small} {
        width: 300px;
        height: 400px;
    }
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

    ${breakPoints.small} {
        width: 250px;
        height: 200px;
    }
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

    ${breakPoints.small} {
        width:60px;
    }
`;

export default MainMenuList;
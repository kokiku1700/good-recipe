import styled from "styled-components";
import MainMenuList from "./MainMenuList";
import { useState } from "react";
import MenuCategory from "./MenuCategory";
import { gondreRice, lotusLeafRice, lotusFloorRice } from "../constants/menuExplain";

const MainMenu = () => {
    // 연잎, 곤드레, 연꽃 이미지 및 설명이 들어있는 각각의 배열
    const menu = [
        [...lotusLeafRice],
        [...gondreRice],
        [...lotusFloorRice],
    ];
    // 각 카테고리의 value값 
    // 클릭 시 해당 value로 변경되고 카테고리에 맞는 
    // 슬라이드 이미지 제공
    const [menuListValue, setMenuListValue] = useState("0");
    // 정식 각 카테고리 이름
    const MainMenuName = ["연잎 정식", "곤드레 정식", "연꽃 정식"];
    // 카테고리 value 값 변경 이벤트
    const onClickMenuListValue = e => {
        setMenuListValue(e);
    }


    return (
        <Div>
            <MenuCategory onClickMenuListValue={onClickMenuListValue} menuName={MainMenuName} />
            <MainMenuList menu={menu[menuListValue]} />
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
    padding: 1% 0;
`;



export default MainMenu;
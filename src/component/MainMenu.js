import styled from "styled-components";
import MainMenuList from "./MainMenuList";
import { useState } from "react";
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
    soy_sauce,
    gondre,
    gondre_soy_sauce,
    leafFloor} from "../assets/img/MainMenuImgs";
import MenuCategory from "./MenuCategory";

const MainMenu = () => {
    const menu = [
        [doenjang, lotus_leaf_rice, soy_sauce, laver, anchovy,
        kimchi, herbs, aubergine, pancake, burdock_japchae,
        pork_doughnut, doenjang, lotus_leaf_rice],

        [doenjang, gondre, gondre_soy_sauce, laver, anchovy,
        kimchi, herbs, aubergine, pancake, burdock_japchae,
        pork_doughnut, doenjang, gondre],

        [leafFloor, lotus_leaf_rice, soy_sauce, laver, anchovy,
        kimchi, herbs, aubergine, pancake, burdock_japchae,
        pork_doughnut, doenjang, leafFloor, lotus_leaf_rice],

    ];
    const [menuListValue, setMenuListValue] = useState("0");
    const MainMenuName = ["연잎 정식", "곤드레 정식", "연꽃 정식"];
    
    const onClickMenuListValue = e => {
        setMenuListValue(e);
    }


    return (
        <Div>
            <MenuCategory onClickMenuListValue={onClickMenuListValue} menuName={MainMenuName} />
            <MainMenuList menu={menu[menuListValue]} menuListValue={menuListValue} />
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
    padding: 1% 0;
`;



export default MainMenu;
import styled from "styled-components";
import MenuCategory from "./MenuCategory";
import { useState } from "react";
import { subMenu } from "../constants/menuExplain";

const SubMenu = () => {
    const [menuListValue, setMenuListValue] = useState(0);
    const menuName = [...subMenu];
    const subMenuName = [menuName[0].name, menuName[1].name];

    const onClickMenuListValue = e => {
        setMenuListValue(e);
    };

    return(
        <Div>
            <MenuCategory onClickMenuListValue={onClickMenuListValue} menuName={subMenuName} menuValue={menuListValue} />
            <Ul>
                <Li $display={menuListValue === 0 ? "block" : "none"}>
                    <H1>{menuName[0].name}</H1>
                    <Img src={menuName[0].src} />
                    <p>{menuName[0].explain}</p>
                </Li>
                <Li $display={menuListValue === 1 ? "block" : "none"}>
                    <H1>{menuName[1].name}</H1>
                    <Img src={menuName[1].src} />
                    <p>{menuName[1].explain}</p>
                </Li>  
            </Ul> 
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
    text-align: center;
`;

const Ul = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 1% 0;
`;

const Li = styled.li`
    display: ${props => props.$display};
    float: left;
    list-style: none;
`;

const H1 = styled.h1`
    margin: 2% 0;
`;

const Img = styled.img`
    width: 500px;
    border-radius: 15px;
`;

export default SubMenu;
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
            <MenuCategory onClickMenuListValue={onClickMenuListValue} menuName={subMenuName} />
            <Ul>
                <Li $display={menuListValue === 0 ? "block" : "none"}>
                    <h2>{menuName[0].name}</h2>
                    <Img src={menuName[0].src} />
                    <p>{menuName[0].explain}</p>
                </Li>
                <Li $display={menuListValue === 1 ? "block" : "none"}>
                    <h2>{menuName[1].name}</h2>
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
`;

const Li = styled.li`
    display: ${props => props.$display};
    float: left;
    list-style: none;
`;

const Img = styled.img`
    width: 700px;
    height: 600px;
`;

export default SubMenu;
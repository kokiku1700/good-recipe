import styled from "styled-components";
import MenuCategory from "./MenuCategory";
import { useState } from "react";
import { panFriedBeef, neobiani } from "../assets/img/MainMenuImgs";

const SubMenu = () => {
    const [menuListValue, setMenuListValue] = useState(0);
    const subMenuName = ["육전", "너비아니"];
    
    const onClickMenuListValue = e => {
        setMenuListValue(e);
    };

    return(
        <Div>
            <MenuCategory onClickMenuListValue={onClickMenuListValue} menuName={subMenuName} />
            <Ul>
                <Li $display={menuListValue === 0 ? "block" : "none"}><Img src={panFriedBeef} /></Li>
                <Li $display={menuListValue === 1 ? "block" : "none"}><Img src={neobiani} /></Li>  
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
import styled from "styled-components";
import MenuCategory from "./MenuCategory";
import { useState } from "react";

const SubMenu = () => {
    const [menuListValue, setMenuListValue] = useState("0");
    const subMenuName = ["육전", "너비아니"];
    
    const onClickMenuListValue = e => {
        setMenuListValue(e);
    };

    return(
        <Div>
            <MenuCategory onClickMenuListValue={onClickMenuListValue} menuName={subMenuName} />
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
    text-align: center;
`

export default SubMenu;
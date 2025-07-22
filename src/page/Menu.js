import { useState } from "react";
import styled from "styled-components";
import MainMenu from "../component/MainMenu";
import SubMenu from "../component/SubMenu";

const Menu = () => {
    const [tabState, setTabState] = useState("mainMenu");

    const onClick = (e) => {
        setTabState(e.target.value);
    }

    return (
        <Div>
            <TabDiv>
                <Label className={tabState === "mainMenu" ? "checked" : ""}>
                    <Input type="radio" name="tab" value="mainMenu" onClick={onClick} defaultChecked/>
                    정식
                </Label>
                <Label  className={tabState === "subMenu" ? "checked" : ""}>
                    <Input type="radio" name="tab" value="subMenu" onClick={onClick} />
                    단품 메뉴
                </Label> 
            </TabDiv>
              
            {tabState === "mainMenu" ? <MainMenu /> : <SubMenu />}           
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
`;

const TabDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const Label = styled.label`
    width: 40%;
    text-align: center;
    padding: 1.5% 0;
    cursor: pointer;
    

    &.checked {
        border: 1px solid #000;
        border-bottom: none;
    }

    &:hover{
        background: #ddd;
    }
`;

const Input = styled.input`
    display: none;
`;

export default Menu;
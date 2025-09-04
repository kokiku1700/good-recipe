import styled from "styled-components"

const MenuCategory = ({ onClickMenuListValue, menuName, menuValue }) => {
    const menuNames = [...menuName];

    const onClickChangeValue = e => {
        onClickMenuListValue(e.target.value);
    }

    return (
        <Div>
            <Ul>
                {menuNames.map((e, i) => (
                    <Li value={i} 
                        key={i} 
                        $background={menuValue === i ? "rgba(221, 235, 157, .2)" : "none"} 
                        boxShadow={menuValue === i ? "inset 0px 0px 4px #DDEB9D" : "0px 0px 2px #DDEB9D"} 
                        onClick={onClickChangeValue}
                    >
                        {e}
                    </Li>
                ))}
            </Ul>
        </Div>
    );
};
const Div = styled.div`
    width: 100%;
`;

const Ul = styled.ul`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
`;

const Li = styled.li`
    width: 100%;
    text-align: center;
    list-style: none;
    cursor: pointer;
    padding: 1% 0;
    background: ${props => props.$background};
    box-shadow: ${props => props.boxShadow};
    

    &:hover {
        box-shadow: 0px 0px 4px #DDEB9D;
    }
`;

export default MenuCategory;
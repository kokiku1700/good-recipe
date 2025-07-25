import styled from "styled-components"

const MenuCategory = ({ onClickMenuListValue, menuName}) => {
    const menuNames = [...menuName];

    const onClickChangeValue = e => {
        onClickMenuListValue(e.target.value);
    }

    return (
        <Div>
            <Ul>
                {menuNames.map((e, i) => (
                    <Li value={i} key={i} onClick={onClickChangeValue}>{e}</Li>
                ))}
            </Ul>
        </Div>
    );
};
const Div = styled.div`
    width: 100%;
`;

const Ul = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

const Li = styled.li`
    list-style: none;
    cursor: pointer;
`;

export default MenuCategory;
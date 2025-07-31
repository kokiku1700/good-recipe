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
    
    &:hover {
        background: #ddd;
    }
`;

export default MenuCategory;
import styled from "styled-components";
import { contents } from "../constants/FAQContents";
import { useState } from "react";

const FAQ = () => {
    const [num, setNum] = useState();

    const onClickToggle = e => {
        setNum(e.currentTarget.value);
    }



    return (
        <Div>
            <Nav>
                <Ul>
                    {contents.map((e, i) => (
                        <Li key={i} value={i} onClick={onClickToggle}>
                            <ContentWrap>
                                <H3>{e.title}</H3>    
                            </ContentWrap>
                            <ContentWrap $display={num === i ? "block" : "none"}>
                                <P>{e.content}</P>
                            </ContentWrap>
                        </Li>
                    ))}
                </Ul>
            </Nav>
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
`;

const Nav = styled.nav`
    width: 80%;
    margin: 0 auto;
`;

const Ul = styled.ul`

`;

const Li = styled.li`
    width: 100%;
    list-style: none;
    background: yellow;

`;

const ContentWrap = styled.div`
    display: ${props => props.$display};
    width: 100%;
    border: 1px solid #ccc;
    padding: 1% 0;
`;

const H3 = styled.h3`
    padding-left: 1%;
`;

const P = styled.p`
    padding-left: 2%;
`;

export default FAQ;
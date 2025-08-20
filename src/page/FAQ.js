import styled from "styled-components";
import { contents } from "../constants/FAQContents";
import { useState } from "react";
import plus from "../assets/img/plus.png";
import minus from "../assets/img/minus.png";

const FAQ = () => {
    const [bool, setBool] = useState(new Array(contents.length).fill(false));

    const onClickToggle = i => {
        setBool(boolArr => {
            const newArr = [...boolArr];
            newArr[i] = !boolArr[i];

            return newArr;
        });
        console.log(bool)
    }



    return (
        <Div>
            <Nav>
                <Ul>
                    {contents.map((e, i) => (
                        <Li key={i} onClick={() => onClickToggle(i)}>
                            <ContentWrap $display="flex" $justifyContent="space-between">
                                <H3>{e.title}</H3>  
                                 <Img src={bool[i] ? minus : plus} /> 
                            </ContentWrap>
                            <ContentWrap $display={bool[i] ? "block" : "none"}>
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
    width: 60%;
    margin: 0 auto;
`;

const Ul = styled.ul`

`;

const Li = styled.li`
    width: 100%;
    list-style: none;
    margin: 1% 0;
    cursor: pointer;
`;

const ContentWrap = styled.div`
    display: ${props => props.$display};
    justify-content: ${props => props.$justifyContent};
    width: 100%;
    border: 1px solid #ccc;
    padding: 1% 0;
    border-radius: 10px;
    animation: 1s;
`;

const H3 = styled.h3`
    padding-left: 1%;
`;

const P = styled.p`
    padding-left: 2%;
`;

const Img = styled.img`
    margin-right: 1%;
`;

export default FAQ;
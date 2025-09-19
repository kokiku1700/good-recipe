import styled from "styled-components";
import { contents } from "../constants/FAQContents";
import { useState } from "react";
import plus from "../assets/img/plus.png";
import minus from "../assets/img/minus.png";
import { breakPoints } from "../constants/breakPoints";

const FAQ = () => {
    const [bool, setBool] = useState(new Array(contents.length).fill(false));

    const onClickToggle = i => {
        setBool(boolArr => {
            const newArr = [...boolArr];
            newArr[i] = !boolArr[i];

            return newArr;
        });
    }



    return (
        <Div>
            <Nav>
                <Ul>
                    {contents.map((e, i) => (
                        <Li key={i} onClick={() => onClickToggle(i)}>
                            <MainWrap $display="flex" $justifyContent="space-between">
                                <H3>{e.title}</H3>  
                                 <Img src={bool[i] ? minus : plus} /> 
                            </MainWrap>
                            <SubWrap $display={bool[i] ? "block" : "none"}>
                                <P>{e.content}</P>
                            </SubWrap>
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
    width: 45%;
    margin: 0 auto;
    margin-top: 5%;

    ${breakPoints.medium} {
        width: 70%;
    }
    ${breakPoints.small} {
        width: 85%;
    }
    
`;

const Ul = styled.ul`

`;

const Li = styled.li`
    width: 100%;
    list-style: none;
    cursor: pointer;
    margin-bottom: 1%;
`;

const MainWrap = styled.div`
    display: ${props => props.$display};
    justify-content: ${props => props.$justifyContent};
    align-items: center;
    width: 100%;
    border: 1px solid #6BA368;
    border-radius: 5px;
    padding: 1%;
`;
const SubWrap = styled(MainWrap)`
    border-top: none;
`;

const H3 = styled.h3`
    
`;

const P = styled.p`
    padding: 0 2%;
`;

const Img = styled.img`
    margin-right: 1%;
`;

export default FAQ;
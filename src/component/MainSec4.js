import styled from "styled-components";
import Button from "./components/Button";

const MainSec4 = () => {

    return (
        <Section4>
            <H3>친구, 연인, 가족과 함께 하는 건강한 한끼, 혹시 5명 이상이라면?</H3>
            <Button content="예약하러가기" width="10" />
        </Section4>
    )
};

const Section4 = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1% 0;
    border-bottom: 1px solid white;
`;

const H3 = styled.h3`
    margin: 5% 0;
`;

export default MainSec4;
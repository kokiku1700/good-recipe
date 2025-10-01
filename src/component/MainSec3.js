import styled from "styled-components";
import Button from "./components/Button";
import { useNavigate } from "react-router-dom";
import { breakPoints } from "../constants/breakPoints";

const MainSec4 = () => {
    const navigate = useNavigate();

    const onClickMove = () => {
        navigate("/reserve");
    }

    return (
        <Section4>
            <H3>친구, 연인, 가족과 함께 하는 건강한 한끼, 혹시 5명 이상이라면?</H3>
            <Button content="예약하러 가기" width="20" padding="1.5% 2%" onClick={onClickMove} />
        </Section4>
    )
};

const Section4 = styled.section`
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 3%;
    box-shadow: 0px 1px 7px #6BA368;
    border-radius: 10px;

    ${breakPoints.verySmall} {
        width: 90%;
    }
`;

const H3 = styled.h3`
    margin: 5% 0;

    ${breakPoints.verySmall}{
        font-size: 3.1vw;
    }
`;

export default MainSec4;
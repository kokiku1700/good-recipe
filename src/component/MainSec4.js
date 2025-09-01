import styled from "styled-components";
import Button from "../component/components/Button";
import { useNavigate } from "react-router-dom";

const MainSec4 = () => {
    const navigate = useNavigate();

    const onClickMove = () => {
        navigate('/street');
    }

    return (
        <Section4>
            <Div>
                선한 레시피에 방문하고 싶다면?
                <Button content="자세히 보기" width="20" onClick={onClickMove} />
            </Div>
            
        </Section4>
    )
};

const Section4 = styled.section`
    width: 100%;
    padding: 1% 0;
    border-bottom: 1px solid white;
`;

const Div = styled.div`
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default MainSec4;
import styled from "styled-components";
import lotusLeafSet from "../assets/img/lotusLeafSet.jpg";
import Button from "../component/components/Button";
import { useNavigate } from "react-router-dom";
import divisionLeaf from "../assets/img/divisionLeaf.png";
import { breakPoints } from "../constants/breakPoints";

const MainSec2 = () => {
    const navigate = useNavigate();

    const onClickMoveMenu = () => {
        navigate('/menu');
    }

    return (
        <Section2>
            <ImgWrap>
                <Img src={lotusLeafSet} />
            </ImgWrap>
            <TextWrap>
                <Article>
                    <ImgILL src={divisionLeaf} />
                    <P>연잎의 향을 머금은 따뜻한 한 끼 정식</P>
                    <P>자연을 담은 연잎밥과 정갈한 반찬의 조화</P>
                    <P>몸과 마음을 채우는 건강한 밥상</P>
                    <Button content="메뉴 보러 가기" width="30" background="#6BA368" onClick={onClickMoveMenu} />
                    <ImgILL src={divisionLeaf} />
                </Article>
            </TextWrap>
        </Section2>
    )
};

const Section2 = styled.section`
    width: 100%;
    display: flex;
    padding: 1% 0;
    border-bottom: 1px solid white;

    ${breakPoints.small} {
        flex-direction: column;
    }
`;

const ImgWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;

    ${breakPoints.small} {
        justify-content: center;
        margin-bottom: 2%;
    }
`;

const TextWrap = styled.div`
    width: 100%; 
    display: flex;
    justify-content: center;
    align-items: center;
       
`;

const Article = styled.article`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #6BA368;
    border-radius: 15px;
    background-color: #FAF6E9; 

    ${breakPoints.medium} {
        width: 80%;
    }
    ${breakPoints.small} {
        width: 60%;
    }
`;

const P = styled.p`
    margin-bottom: 5%;
    font-size: 18px;

    ${breakPoints.medium} {
        margin-bottom: 2.5%;
        font-size: 15px;
    }
`;

const Img = styled.img`
    width: 80%;
    margin-right: 1%;
    box-shadow: 3px 3px 5px #6BA368;
    border-radius: 20px;

    ${breakPoints.medium} {
        width: 90%;
    }
    ${breakPoints.small} {
        width: 70%;
    }
`;

const ImgILL = styled.img`
    width: 280px;

    ${breakPoints.medium} {
        width: 200px;
    }
`;

export default MainSec2;
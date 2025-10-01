import styled from "styled-components";
import { breakPoints } from "../constants/breakPoints";

const Modal = ({ content, modalOpenState, modalOpenSetState, onClick }) => {

    const onClickModalState = () => {
        modalOpenSetState();
    }

    const onClickDelete = () => {
        onClick();
    }

    return (
        <Div $display={modalOpenState}>
            <Article>
                <P>
                    {content}
                </P>
                <ButtonWrap>
                    <CancelButton onClick={onClickModalState}>취소</CancelButton>
                    <CheckButton onClick={onClickDelete}>확인</CheckButton>
                </ButtonWrap>

            </Article>     
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: ${props => props.$display ? "flex" : "none"};
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, .1);
    z-index: 9999;

    ${breakPoints.small} {
        align-items: flex-start;
    }
`;

const Article = styled.article`
    width: 30%;
    background: white;
    border-radius: 10px;

    ${breakPoints.small} {
        margin-top: 50%;
        width: 70%;
    }
`;

const ButtonWrap = styled.div`
    display: flex;
    justify-content: end;
    margin-right: 2%;
`;

const P = styled.p`
    margin: 5%;
`;

const Button = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    margin: 2%;
    padding: 2%;
    font-weight: 600;
`;

const CheckButton = styled(Button)`
    color: green;
`;
const CancelButton = styled(Button)`
    color: red;
`;

export default Modal;
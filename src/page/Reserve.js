import styled from "styled-components";

const Reserve = () => {

    return (
        <DivWrap>
            <Div>
                <Span>
                    이름
                    <Input />
                </Span>
                <Span>
                    전화번호
                    <Input type="tel" />
                    <Button>확인</Button>
                </Span>
                <Span>
                    인증번호
                    <Input />
                    <Button>학인</Button>
                </Span>
            </Div>
        </DivWrap>
    );
};

const DivWrap = styled.div`
    width: 100%;
`;

const Div = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

const Span = styled.span`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1% 0;
    background: green;
`;

const Input = styled.input`
    padding: 1% 0;
    margin: 0 1%;
`;

const Button = styled.button`
    
`;

export default Reserve;
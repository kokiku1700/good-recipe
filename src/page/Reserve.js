import styled from "styled-components";

const Reserve = () => {

    return (
        <DivWrap>
            <Div>
                <Span>
                    <H3>이름</H3>
                    <Input width="97" />
                </Span>
                <Span>
                    <H3>전화번호</H3>
                    <Input width="67" type="tel" />
                    <Button>확인</Button>
                </Span>
                <Span>
                    <H3>인증번호</H3>
                    <Input width="67" />
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
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 10%;
    border-radius: 10px;
    border: 2px solid #aaa;
`;

const Span = styled.span`
    width: 90%;
    align-items: center;
    margin: 5% auto;
`;

const H3 = styled.h3`
    
`;

const Input = styled.input`
    width: ${props => props.width}%;
    padding: 2.5% 0;
    margin: 1% 0;
    border: 1px solid brown;
    border-radius: 5px;
    
    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
    width: 30%;
    margin: 0 1%;
    padding: 2% 0;
`;

export default Reserve;
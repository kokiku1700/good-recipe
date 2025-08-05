import styled from "styled-components";
import { useLocation } from "react-router-dom";
import Calendar from "react-calendar";

const ReserveDetail = () => {
    const { state } = useLocation();


    return (
        <Div>
            <DetailDiv>
                <Span>
                    <H3>이름</H3>
                    <Input value={state.name} disabled={true} />
                </Span>
                <Span>
                    <H3>전화번호</H3>
                    <Input value={state.tel} disabled={true} />
                </Span>
                <Span>
                    <H3>날짜</H3>
                    <Calendar />
                </Span>
                <Span>
                    <H3>시간</H3>
                        <Select>
                            <Option>점심</Option>
                            <Option>저녁</Option>
                        </Select>
                        <Select>
                            <Option>11:30</Option>
                            <Option>13:00</Option>
                        </Select>
                </Span>
                <Span>
                    <H3>인원수</H3>
                    <Span>
                        <h6>8세 이상</h6>
                        <Select>
                            <Option>11:30</Option>
                            <Option>13:00</Option>
                        </Select>
                    </Span>
                    <Span>
                        <h6>7세 이하</h6>
                        <Select>
                            <Option>11:30</Option>
                            <Option>13:00</Option>
                        </Select>
                    </Span>
                    
                </Span>
                <Span>
                    <H3>아기의자</H3>
                    <Select>
                        <Option>1</Option>
                        <Option>2</Option>
                        <Option>3</Option>
                        <Option>4</Option>
                    </Select>
                </Span>
            </DetailDiv>
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
`;

const DetailDiv = styled.div`
    width: 50%;
    border: 1px solid #eee;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

const Span = styled.span`

`;

const H3 = styled.h3`

`;

const Input = styled.input`

`;

const Select = styled.select`

`;

const Option = styled.option`

`;

export default ReserveDetail;
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../component/components/Button";

const ReserveCheck = () => {
    // 예약 정보를 찾기 위한 입력 정보 저장
    const [reserveCheck, setReserveCheck] = useState({
        name: "",
        tel: ""
    });
    // 예약 정보 존재 여부에 따라 보여질 화면 상태
    const [checkState, setCheckState] = useState(false);
    // 예약 정보가 있다면 여기에 저장
    const [reserveInformation, setReserveInformation] = useState({});
    const naviage = useNavigate();

    // 입력 값를 저장하는 함수
    const onChangeReserveCheck = e => {
        setReserveCheck({
            ...reserveCheck,
            [e.target.name]: e.target.value
        });
    };

    // 버튼 클릭 시 입력 값에 근거해 값을 가져온다. 
    const onClickReserveCheck = async() => {
        await axios.get("http://localhost:4000/reserveCheck", {params: {name: reserveCheck.name, tel: reserveCheck.tel}})
        .then(res => {
            setCheckState(true);
            setReserveInformation(res.data);
        })
    }

    const onClickMove = () => {
        naviage("/");
    }
    const onClickMoveChange = () => {
        naviage("/reserveDetail", { 
            state: { 
                name: reserveInformation.name, 
                tel: reserveInformation.tel,
            }
        });
    }

    return (
        <Div>
            <CheckDivWrap $display={checkState ? "none" : "flex"}>
                <Span>
                    <H3>이름</H3>
                    <Input name="name" value={reserveCheck.name} onChange={onChangeReserveCheck} />
                </Span>
                <Span>
                    <H3>전화번호</H3>
                    <Input name="tel" value={reserveCheck.tel} onChange={onChangeReserveCheck} />
                </Span>
                <Button width="10" content="예약 확인하기" onClick={onClickReserveCheck} />
            </CheckDivWrap>
            <CheckSuccess $display={checkState ? "flex" : "none"}>
                <Span>
                    <H3>{reserveInformation.name}</H3>
                    <H3>{reserveInformation.tel}</H3>
                    <H3>{reserveInformation.date}</H3>
                    <H3>{reserveInformation.ampm}</H3>
                    <H3>{reserveInformation.time}</H3>
                    <H3>{reserveInformation.adult}</H3>
                    <H3>{reserveInformation.children}</H3>
                </Span>
                <Span>
                    <Button width="100" content="홈" onClick={onClickMove} />
                    <Button width="100" content="예약 정보 변경" onClick={onClickMoveChange} />
                </Span>
            </CheckSuccess>
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
`;

const CheckDivWrap = styled.div`
    width: 60%;
    margin: 0 auto;
    display: ${props => props.$display};
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CheckSuccess = styled.div`
    width: 60%;
    margin: 0 auto;
    display: ${props => props.$display};
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const Span = styled.span`
    margin: 1% 0;
`;

const H3 = styled.h3`

`;

const Input = styled.input`

`;

export default ReserveCheck;
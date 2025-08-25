import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../component/components/Button";

const ReserveCheck = () => {
    // 예약 정보를 찾기 위한 입력 정보 저장
    const [reserveCheck, setReserveCheck] = useState({
        name: "",
        tel: "",
        date: "",
        ampm: "",
        time: "",
        adult: "",
        children: ""
    });
    // 예약 정보 존재 여부에 따라 보여질 화면 상태
    const [checkState, setCheckState] = useState(false);
    // 예약 정보가 있다면 여기에 저장
    const [reserveInformation, setReserveInformation] = useState({});
    const [checkErrMessage, setCheckErrMessage] = useState(false);
    const [checkEmptyErrMessage, setCheckEmptyErrMessage] = useState(false);
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
        if ( reserveCheck.name !== "" && reserveCheck.tel !== "" ) {
            await axios.get("http://localhost:4000/reserveCheck", {params: {name: reserveCheck.name, tel: reserveCheck.tel}})
            .then(res => {
                if ( res.data !== "" ) {
                    setCheckState(true);
                    setReserveInformation(res.data);
                    setReserveCheck({
                        ...reserveCheck,
                        date: res.data.date,
                        ampm: res.data.ampm,
                        time: res.data.time,
                        adult: res.data.adult,
                        children: res.data.children
                    });
                    console.log(res.data);
                } else {
                    setCheckErrMessage(true);
                    setCheckEmptyErrMessage(false);
                }
 
            });
        } else {
            setCheckErrMessage(false);
            setCheckEmptyErrMessage(true);
        }

    }

    const onClickMove = () => {
        naviage("/");
    }
    const onClickMoveChange = () => {
        naviage("/reserveDetail", { 
            state: { 
                name: reserveInformation.name, 
                tel: reserveInformation.tel,
                date: reserveInformation.date,
                ampm: reserveInformation.ampm,
                time: reserveInformation.time,
                adult: reserveInformation.adult,
                children: reserveInformation.children,
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
                <P $display={checkErrMessage ? "block" : "none"}>입력 정보가 올바르지 않거나 예약 정보가 없습니다.</P>
                <P $display={checkEmptyErrMessage ? "block" : "none"}>정보를 입력해주세요</P>
                <Span>
                    <Button width="100" content="예약 확인하기" onClick={onClickReserveCheck} />
                </Span>
            </CheckDivWrap>
            <CheckDivWrap $display={checkState ? "flex" : "none"}>
                <Span>
                    <H3>이름: {reserveInformation.name}</H3>
                    <H3>전화번호: {reserveInformation.tel}</H3>
                    <H3>날짜: {reserveInformation.date}</H3>
                    <H3>시간: {reserveInformation.ampm} {reserveInformation.time}</H3>
                    <H3>성인: {reserveInformation.adult}</H3>
                    <H3>아이: {reserveInformation.children}</H3>
                </Span>
                <Span $display="flex">
                    <Button width="100" content="홈" onClick={onClickMove} />
                    <Button width="100" content="예약 정보 변경" onClick={onClickMoveChange} />
                </Span>
            </CheckDivWrap>
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
`;

const CheckDivWrap = styled.div`
    width: 40%;
    margin: 8% auto;
    padding: 2% 0;
    display: ${props => props.$display};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ddd;
`;

const Span = styled.span`
    display: ${props => props.$display};
    width: 40%;
    margin: 3% 0;
`;

const H3 = styled.h3`
    margin-bottom: 5%;
`;

const Input = styled.input`
    width: 100%;
    padding: 2%;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid black;

    &: focus {
        outline: none;
        border: 1px solid brown;
    }
`;

const P = styled.p`
    display: ${props => props.$display};
    color: red;
`;

export default ReserveCheck;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../component/components/Button";
import Input from "../component/components/Input";
import { breakPoints } from "../constants/breakPoints";
import Modal from "../component/Modal";
import { useReservationRead } from "../hooks/useReservationRead";
import { useReservationDelete } from "../hooks/useReservationDelete";

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
    const [checkErrMessage, setCheckErrMessage] = useState(false);
    const [checkEmptyErrMessage, setCheckEmptyErrMessage] = useState(false);
    
    const navigate = useNavigate();
    
    // 커스텀훅 변수 
    const {error, getReservation } = useReservationRead();
    const reservationDelete = useReservationDelete();

    const [modalOpen, setModalOpen] = useState(false);


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
            const res = await getReservation(reserveCheck.name, reserveCheck.tel);
            
            if ( res ) {
                setCheckState(true);
                setReserveCheck({
                    ...reserveCheck,
                    date: res.date,
                    ampm: res.ampm,
                    time: res.time,
                    adult: res.adult,
                    children: res.children
                });
            } else {
                setCheckErrMessage(true);
                setCheckEmptyErrMessage(false);
            }
        } else {
            setCheckErrMessage(false);
            setCheckEmptyErrMessage(true);
        }
    };

    const onClickMove = () => {
        navigate("/");
    };

    const onClickMoveChange = () => {
        navigate("/reserveDetail", { 
            replace: true,
            state: { 
                name: reserveCheck.name, 
                tel: reserveCheck.tel,
                date: reserveCheck.date,
                ampm: reserveCheck.ampm,
                time: reserveCheck.time,
                adult: reserveCheck.adult,
                children: reserveCheck.children,
            }
        });
    };

    const onClickDelete = async() => {
        const del = await reservationDelete(
            reserveCheck.name, 
            reserveCheck.tel, 
            reserveCheck.date
        );

        if ( del ) navigate("/");
    }

    const handleModalOpen = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <Div>
            <CheckDivWrap $display={checkState ? "none" : "flex"}>
                <Span>
                    <H3 $marginBottom="3%">이름</H3>
                    <Input name="name" value={reserveCheck.name}
                            width="98"
                            padding="2.5% 1%"
                            onChange={onChangeReserveCheck} 
                            autoComplete="off"
                    />
                </Span>
                <Span>
                    <H3 $marginBottom="3%">전화번호</H3>
                    <Input name="tel" value={reserveCheck.tel}
                            width="98"
                            padding="2.5% 1%"
                            onChange={onChangeReserveCheck} 
                            autoComplete="off"
                    />
                </Span>
                <P $display={checkErrMessage ? "block" : "none"}>{error}</P>
                <P $display={checkEmptyErrMessage ? "block" : "none"}>정보를 입력해주세요</P>
                <Span>
                    <Button width="100"
                            background={reserveCheck.name === "" || reserveCheck.tel === "" ? "#999" : "#6BA368"}
                            content="예약 확인하기" 
                            onClick={onClickReserveCheck} 
                            disabled={reserveCheck.name === "" || reserveCheck.tel === ""}
                            cursor={reserveCheck.name === "" || reserveCheck.tel === ""}
                    />
                </Span>
            </CheckDivWrap>
            <CheckDivWrap $display={checkState ? "flex" : "none"}>
                <Span>
                    <InforSpan>
                        <H3>이름:</H3>
                        <H5>{reserveCheck.name}</H5>
                    </InforSpan>
                    <InforSpan>
                        <H3>전화번호:</H3>
                        <H5>{reserveCheck.tel}</H5>
                    </InforSpan>
                    <InforSpan>
                        <H3>날짜:</H3>
                        <H5>{reserveCheck.date}</H5>
                    </InforSpan>
                    <InforSpan>
                        <H3>시간:</H3>
                        <H5>{reserveCheck.ampm} {reserveCheck.time}</H5>
                    </InforSpan>
                    <InforSpan>
                        <H3>성인:</H3>
                        <H5>{reserveCheck.adult}</H5>
                    </InforSpan>
                    <InforSpan>
                        <H3>아이:</H3>
                        <H5>{reserveCheck.children}</H5>
                    </InforSpan>
                </Span>
                <Span $display="flex">
                    <Button width="100" margin="0 1%" content="홈" onClick={onClickMove} />
                    <Button width="100" margin="0 1%" content="예약 정보 변경" onClick={onClickMoveChange} />
                    <Button width="100" margin="0 1%" content="예약 취소" onClick={handleModalOpen} />
                </Span>
            </CheckDivWrap>
            <Modal content="예약을 취소하시겠습니까?" modalOpenState={modalOpen} modalOpenSetState={setModalOpen} onClick={onClickDelete} />
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
`;

const CheckDivWrap = styled.div`
    width: 600px;
    margin: 0 auto;
    margin-top: 7%;
    padding: 2% 0;
    display: ${props => props.$display};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #6BA368;
    border-radius: 10px;

    ${breakPoints.medium} {
        width: 60%;
        margin-top: 10%;
    }
    ${breakPoints.verySmall} {
        width: 80%;
        margin-top: 15%;
    }
`;

const Span = styled.span`
    display: ${props => props.$display};
    width: 80%;
    margin: 3% 0;

    ${breakPoints.verySmall} {
        width: 80%;
        margin: 5% 0;
    }
`;

const InforSpan = styled.span`
    display: flex;
    align-items: center;
    padding: 3% 0;
`;

const H3 = styled.h3`
    margin-bottom: ${props => props.$marginBottom};
    margin-right: 1%;
`;

const H5 = styled.h5`
    margin-left: 1%;
    font-weight: 500;
`;

const P = styled.p`
    display: ${props => props.$display};
    color: red;
`;

export default ReserveCheck;
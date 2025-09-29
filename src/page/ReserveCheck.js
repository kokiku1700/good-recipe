import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../component/components/Button";
import Input from "../component/components/Input";
import { breakPoints } from "../constants/breakPoints";
import Modal from "../component/Modal";

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

    };

    const onClickMove = () => {
        naviage("/");
    };

    const onClickMoveChange = () => {
        naviage("/reserveDetail", { 
            replace: true,
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
    };

    const onClickDelete = async() => {
        await axios.delete("http://localhost:4000/delete",
                {
                    data: 
                        {
                            name: reserveInformation.name,
                            tel: reserveInformation.tel,
                            date: reserveInformation.date                            
                        }
                })
        .then(res => {
            naviage('/');
        })
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
                <P $display={checkErrMessage ? "block" : "none"}>입력 정보가 올바르지 않거나 예약 정보가 없습니다.</P>
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
                        <H5>{reserveInformation.name}</H5>
                    </InforSpan>
                    <InforSpan>
                        <H3>전화번호:</H3>
                        <H5>{reserveInformation.tel}</H5>
                    </InforSpan>
                    <InforSpan>
                        <H3>날짜:</H3>
                        <H5>{reserveInformation.date}</H5>
                    </InforSpan>
                    <InforSpan>
                        <H3>시간:</H3>
                        <H5>{reserveInformation.ampm} {reserveInformation.time}</H5>
                    </InforSpan>
                    <InforSpan>
                        <H3>성인:</H3>
                        <H5>{reserveInformation.adult}</H5>
                    </InforSpan>
                    <InforSpan>
                        <H3>아이:</H3>
                        <H5>{reserveInformation.children}</H5>
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
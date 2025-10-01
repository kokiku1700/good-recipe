import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../component/components/Button";
import Input from "../component/components/Input";
import Timer from "../component/components/Timer";
import { breakPoints } from "../constants/breakPoints";
import { useSms } from "../hooks/useSms";

const Reserve = () => {
    // 인증 및 예약에 필요한 최소한의 정보를 저장하는 변수
    const [confirmation, setConfirmation] = useState({
        name: "",
        tel: "",
    });
    // 작성한 전화번호에 보낼 무작위 인증번호를 저장하는 함수
    // 입력한 인증번호를 저장하는 변수
    const [confirmationNumberCheck, setConfirmationNumberCheck] = useState("");
    // 인증번호 상태에 따라 인증번호 버튼 문자 변환
    // 인증번호 전송 버튼을 클릭하면 타이머 보여줌
    // 아래 세 변수는 각각의 입력값이 올바르면 true, 아니면 false
    // 세 변수가 모두 true면 예약 상세 페이지로 넘어간다.
    const [confirmSuccessStatus, setConfirmSuccessStatus] = useState(false);
    const [nameStatus, setNameStatus] = useState(false);
    const [telStatus, setTelStatus] = useState(false);
    // 메세지 상태 관리 변수
    const [errNameMessage, setErrNameMessage] = useState(true);
    const [errTelMessage, setErrTelMessage] = useState(true);
    const [errCheckNumber, setErrCheckNumber] = useState(true);
    
    const {confirmationNumber,
        confirmButton,
        showTimer,
        setShowTimer,
        errTelExistMessage,
        setErrTelExistMessage,
        Sms} = useSms();

    const navigate = useNavigate();

    // 이름과 전화번호 입력정보를 저장
    const onChangeConFirmation = e => {
        const nameRegExp = /^[가-힣]+$/;
        const telRegExp = /^0\d{8,10}$/;
        
        setConfirmation({
            ...confirmation,
            [e.target.name]: e.target.value
        });
        if ( e.target.name === "name" ) {
            if ( nameRegExp.test(e.target.value) ) {
                setNameStatus(true);
            } else {
                setNameStatus(false);
            }
        } else if ( e.target.name === "tel" ) {
            if (!errTelExistMessage) setErrTelExistMessage(true);
            if ( telRegExp.test(e.target.value) ) {
                setTelStatus(true);
            } else {
                setTelStatus(false);
            }
        }
    };

    // 인증번호 커스텀훅
    const onClickConfirmationSend = async() => {
        if ( telStatus ) {
            await Sms(confirmation.tel);
        }
    };

    // 입력한 인증번호를 저장
    const onChangeConfirmationCheck = e => {
        setConfirmationNumberCheck(e.target.value);
    };

    // 인증번호 확인을 누르면 생성된 인증번호와 
    // 입력한 인증번호의 일치유무를 체크
    const onClickConfirmationCheck = () => {
        if ( confirmationNumberCheck !== "" && Number(confirmationNumber) === Number(confirmationNumberCheck) ) {
            setConfirmSuccessStatus(true);
            setErrCheckNumber(true);
        } else {
            setErrCheckNumber(false);
        }
    };

    const onBlur = e => {
        if ( e.target.name === "name" ) {
            if ( nameStatus ) setErrNameMessage(true);
            else setErrNameMessage(false);
        } else if ( e.target.name === "tel" ) {
            if ( telStatus ) setErrTelMessage(true);
            else setErrTelMessage(false); 
        }
    }

    // 입력 정보가 제대로 입력된 경우 예약 상세 페이지로 이동
    const AllSuccess = () => {
        if ( confirmSuccessStatus &&
            nameStatus &&
            telStatus
        ) {
            navigate("/reserveDetail", { state: {name: confirmation.name, tel: confirmation.tel} });
        } 
    };

    const endTime = () => {
        setConfirmationNumberCheck("");
        setShowTimer(false);
        setErrCheckNumber(true);
        alert("인증 시간 만료.");
    };

    return (
        <Div>
            <Span>
                <H3>이름</H3>
                <InputWrap>
                    <Input name="name" width="98" type="name" 
                            padding="2.5% 1%"
                            value={confirmation.name} 
                            onChange={onChangeConFirmation} 
                            placeholder="한글만 입력 가능합니다."
                            onBlur={onBlur}
                            disabled={showTimer}
                    />
                </InputWrap>
                <P $display={errNameMessage ? "none" : "block"}>양식을 제대로 입력해주세요</P>
            </Span>
            <Span>
                <H3>전화번호</H3>
                <InputWrap>
                    <Input name="tel" width="68" type="tel" 
                            padding="2.5% 1%"
                            value={confirmation.tel} 
                            onChange={onChangeConFirmation} 
                            placeholder="'-' 빼고 입력해주세요" 
                            autoComplete="off" 
                            onBlur={onBlur}
                            disabled={showTimer}
                    />
                    <Button width="30"
                            margin="0 0 0 1%"
                            content={confirmButton} 
                            background={ !telStatus || showTimer ? "#999" : "#6BA368"}
                            onClick={onClickConfirmationSend} 
                            cursor={ !telStatus || showTimer ? "default" : "pointer"}
                            disabled={ !telStatus || showTimer}
                    />
                </InputWrap> 
                <P $display={errTelMessage ? "none" : "block"}>전화번호를 제대로 입력해주세요.</P>
                <P $display={errTelExistMessage ? "none" : "block"}>이미 같은 번호로 예약이 되어 있습니다.</P>
            </Span>
            <Span>
                <H3>인증번호</H3>
                <InputWrap>
                    <Input width="68" 
                            value={confirmationNumberCheck} 
                            padding="2.5% 1%"
                            onChange={onChangeConfirmationCheck} 
                            autoComplete="off" disabled={confirmSuccessStatus} 
                    />
                    {showTimer && <Timer onEnd={endTime} />}
                    <Button width="30" 
                            margin="0 0 0 1%"
                            background={confirmationNumberCheck.length !== 6 || confirmSuccessStatus ? "#999" : "#6BA368"} 
                            content="인증번호 학인" onClick={onClickConfirmationCheck} 
                            disabled={confirmationNumberCheck.length !== 6 || confirmSuccessStatus} 
                            cursor={confirmationNumberCheck.length !== 6 || confirmSuccessStatus ? "default" : "pointer"}
                    />
                </InputWrap>
                <P $display={errCheckNumber ? "none" : "block"}>인증번호가 올바르지 않습니다.</P>
            </Span>
            <Span>
                <Button width="100" 
                    margin="0"
                    background={!confirmSuccessStatus || !telStatus || !nameStatus ? "#999" :  "#6BA368"} 
                    content="확인" onClick={AllSuccess} 
                    disabled={!confirmSuccessStatus || !telStatus || !nameStatus}
                    cursor={!confirmSuccessStatus || !telStatus || !nameStatus ? "default" : "pointer"}
                />
            </Span>
            
        </Div>
    );
};

const Div = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    margin-top: 7%;
    border-radius: 10px;
    border: 2px solid #6BA368;
    padding: 1% 0;

    ${breakPoints.medium} {
        width: 60%;
        margin-top: 10%;
    }
    ${breakPoints.verySmall} {
        width: 90%;
        margin-top: 15%;
    }
`;

const Span = styled.span`
    position: relative;
    width: 80%;
    align-items: center;
    margin: 1% auto;
    padding-bottom: 5%;

    ${breakPoints.medium} {
        width: 90%;
    }
    ${breakPoints.verySmall} {
        margin: 3% auto;
    }
`;

const InputWrap = styled.span`
    width: 100%;
    display: flex;
`;

const H3 = styled.h3`
    margin-bottom: 1.5%;
`;

const P = styled.p`
    display: ${props => props.$display};
    color: red;
    margin-left: 1%;
    
`;

export default Reserve;
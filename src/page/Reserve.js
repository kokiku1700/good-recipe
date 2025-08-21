import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "../component/components/Button";

const Reserve = () => {
    // 인증 및 예약에 필요한 최소한의 정보를 저장하는 변수
    const [confirmation, setConfirmation] = useState({
        name: "",
        tel: "",
    });
    // 작성한 전화번호에 보낼 무작위 인증번호를 저장하는 함수
    const [confirmationNumber, setConfirmationNumber] = useState("");
    // 입력한 인증번호를 저장하는 변수
    const [confirmationNumberCheck, setConfirmationNumberCheck] = useState("");
    // 인증번호 상태에 따라 인증번호 버튼 문자 변환
    const [confirmButton, setConfirmButton] = useState("인증번호 전송");
    // 아래 세 변수는 각각의 입력값이 올바르면 true, 아니면 false
    // 세 변수가 모두 true면 예약 상세 페이지로 넘어간다.
    const [confirmSuccessStatus, setConfirmSuccessStatus] = useState(false);
    const [nameStatus, setNameStatus] = useState(false);
    const [telStatus, setTelStatus] = useState(false);
    // const [timer, setTimer] = useState(180);
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
            if ( telRegExp.test(e.target.value) ) {
                setTelStatus(true);
            } else {
                setTelStatus(false);
            }
        }
    };

    // 인증번호 전송 버튼 클릭 시 발생하는 함수
    // 예약 정보에 같은 번호가 있다면 실패
    // 없다면 예약 진행
    const onClickConfirmationSend = async() => {
        if ( telStatus ) {
            await axios.get("http://localhost:4000/existTel", { params: { tel: confirmation.tel }})
            .then(res => {
                if ( res.data.length === 0 ) {
                    let randomNum = Math.floor(Math.random() * 1000000);
                    
                    setConfirmButton("인증번호 재전송");

                    if ( randomNum < 100000 ) {
                        randomNum = "0" + randomNum;
                    }

                    setConfirmationNumber(randomNum);
                    
                    axios.get("http://localhost:4000/confirmation", {params: {tel: confirmation.tel, num: randomNum}})
                    .then(res => {
                        console.log(res);
                    }).catch(err => {
                        console.log(err);
                    })
                } else {
                    console.log("같은 번호로 예약이 되어있습니다.");
                }
            })
        } else {
            console.log('번호를 제대로 입력해주세요')
        }
    };

    // useEffect(() => {
    //     let minute = Math.floor(timer / 60);
    //     let second = timer % 60;
        
    //     const time = setInterval(() => {
    //         setTimer(timer - 1);
    //         if ( timer === 0 ) {
    //             clearInterval(time);
    //         }
    //         console.log(minute, second);
    //     }, 1000) 
    // }, [timer]);

    // 입력한 인증번호를 저장
    const onChangeConfirmationCheck = e => {
        setConfirmationNumberCheck(e.target.value);
    };

    // 인증번호 확인을 누르면 생성된 인증번호와 
    // 입력한 인증번호의 일치유무를 체크
    const onClickConfirmationCheck = () => {
        if ( confirmationNumberCheck !== "" && Number(confirmationNumber) === Number(confirmationNumberCheck) ) {
            setConfirmSuccessStatus(true);
            console.log("success");
        } else {
            console.log("fail");
        }
    };

    const AllSuccess = () => {
        if ( confirmSuccessStatus &&
            nameStatus &&
            telStatus
        ) {
            navigate("/reserveDetail", { state: {name: confirmation.name, tel: confirmation.tel} });
        }
    }

    return (
        <DivWrap>
            <Div>
                <Span>
                    <H3>이름</H3>
                    <InputWrap>
                        <Input name="name" width="97" type="name" value={confirmation.name} onChange={onChangeConFirmation} autoComplete="off" />
                    </InputWrap>
                </Span>
                <Span>
                    <H3>전화번호</H3>
                    <InputWrap>
                        <Input name="tel" width="67" type="tel" value={confirmation.tel} onChange={onChangeConFirmation} placeholder="'-' 빼고 입력해주세요" autoComplete="off" />
                        <Button width="30" content={confirmButton} onClick={onClickConfirmationSend} />
                    </InputWrap> 
                    <P>이미 같은 번호로 예약이 되어 있습니다.</P>
                </Span>
                <Span>
                    <H3>인증번호</H3>
                    <InputWrap>
                        <Input width="67" value={confirmationNumberCheck} onChange={onChangeConfirmationCheck} autoComplete="off" disabled={confirmSuccessStatus} />
                        <Button width="30" content="인증번호 학인" onClick={onClickConfirmationCheck} disabled={confirmSuccessStatus} />
                    </InputWrap>
                </Span>
                <Button width="90" background="#da5f01" content="확인" onClick={AllSuccess} />
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
    margin-top: 7%;
    border-radius: 10px;
    border: 2px solid #aaa;
    padding: 1% 0;
`;

const Span = styled.span`
    width: 90%;
    align-items: center;
    margin: 2% auto;
    padding-bottom: 5%;

`;

const InputWrap = styled.span`
    width: 100%;
    display: flex;
`;

const H3 = styled.h3`
    
`;

const Input = styled.input`
    width: ${props => props.width}%;
    padding: 2.5% 1%;
    margin: 1% 0;
    border: 1px solid brown;
    border-radius: 5px;
    font-size: 16px;

    &:focus {
        outline: none;
    }
`;

const P = styled.p`
    color: red;
    margin-left: 1%;
`;

export default Reserve;
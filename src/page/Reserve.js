import { useState } from "react";
import styled from "styled-components";

const Reserve = () => {

    const [confirmation, setConfirmation] = useState({
        name: "",
        tel: "",
    });
    const [confirmationNumber, setConfirmationNumber] = useState("");
    const [confirmationNumberCheck, setConfirmationNumberCheck] = useState("");
    // const [timer, setTimer] = useState(180);

    // 이름과 전화번호 입력정보를 저장
    const onChangeConFirmation = e => {
        setConfirmation({
            ...confirmation,
            [e.target.name]: e.target.value
        });

        console.log(confirmation);
    };

    const onClickConfirmationSend = () => {
        const telRegExp = /^0\d{8,10}$/;

        if ( telRegExp.test(confirmation.tel) ) {
            let randomNum = Math.floor(Math.random() * 1000000);

            if ( randomNum < 100000 ) {
                randomNum = "0" + randomNum;
            }

            setConfirmationNumber(randomNum);
            console.log(randomNum);
        } else {
            console.log('번호를 제대로 입력해주세요')
        }

         
    }

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
        console.log(confirmationNumberCheck)
    };

    // 인증번호 확인을 누르면 생성된 인증번호와 
    // 입력한 인증번호의 일치유무를 체크
    const onClickConfirmationCheck = () => {
        if ( Number(confirmationNumber) === Number(confirmationNumberCheck) ) {
            console.log("success");
        } else {
            console.log("fail");
        }
    };

    return (
        <DivWrap>
            <Div>
                <Span>
                    <H3>이름</H3>
                    <Input name="name" width="97" type="name" value={confirmation.name} onChange={onChangeConFirmation} autoComplete="off" />
                </Span>
                <Span>
                    <H3>전화번호</H3>
                    <Input name="tel" width="67" type="tel" value={confirmation.tel} onChange={onChangeConFirmation} autoComplete="off" />
                    <Button onClick={onClickConfirmationSend}>인증번호 전송</Button>
                </Span>
                <Span>
                    <H3>인증번호</H3>
                    <Input width="67" value={confirmationNumberCheck} onChange={onChangeConfirmationCheck} autoComplete="off" />
                    <Button onClick={onClickConfirmationCheck}>인증번호 학인</Button>
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
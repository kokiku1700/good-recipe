import axios from "axios";
import { useState } from "react";
import styled from "styled-components";


const ReserveCheck = () => {
    const [reserveCheck, setReserveCheck] = useState({
        name: "",
        tel: ""
    });


    const onChangeReserveCheck = e => {
        setReserveCheck({
            ...reserveCheck,
            [e.target.name]: e.target.value
        });

        console.log(reserveCheck);
    };

    const onClickReserveCheck = async() => {
        await axios.get("http://localhost:4000/reserveCheck", {params: {name: reserveCheck.name, tel: reserveCheck.tel}})
        .then(res => {
            console.log(res.data);
        })
    }

    return (
        <Div>
            <CheckDivWrap>
                <Span>
                    <H3>이름</H3>
                    <Input name="name" value={reserveCheck.name} onChange={onChangeReserveCheck} />
                </Span>
                <Span>
                    <H3>전화번호</H3>
                    <Input name="tel" value={reserveCheck.tel} onChange={onChangeReserveCheck} />
                </Span>
                <button onClick={onClickReserveCheck}>예약 확인하기</button>
            </CheckDivWrap>
            
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
`;

const CheckDivWrap = styled.div`
    width: 60%;
    margin: 0 auto;
    display: flex;
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
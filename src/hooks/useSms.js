import axios from "axios";
import { useState } from "react";

export const useSms = () => {
    const [confirmationNumber, setConfirmationNumber] = useState(null);
    const [confirmButton, setConfirmButton] = useState("인증번호 전송");
    const [showTimer, setShowTimer] = useState(false);
    const [errTelExistMessage, setErrTelExistMessage] = useState(true);

    const Sms = async (confirmationTel) => {
        try {
            const res = await axios.get("http://localhost:4000/existTel", { params: { tel: confirmationTel }})
            if ( res.data.length === 0 ) {
                let randomNum = Math.floor(Math.random() * 1000000);
                setShowTimer(true);
                setConfirmButton("인증번호 재전송");
                if ( randomNum < 100000 ) randomNum = "0" + randomNum;

                setConfirmationNumber(randomNum);
                
                await axios.get("http://localhost:4000/confirmation", {params: {tel: confirmationTel, num: randomNum}})
                setErrTelExistMessage(true);
            } else {
                setErrTelExistMessage(false);
            }
        } catch ( err ) {
            console.log(err);
        }
    }

    return {
        confirmationNumber,
        confirmButton,
        showTimer,
        setShowTimer,
        errTelExistMessage,
        setErrTelExistMessage,
        Sms
    }
}
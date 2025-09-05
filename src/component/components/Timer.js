import styled from "styled-components"
import { useState, useEffect } from "react";

const Timer = ({ onEnd }) => {
    const [time, setTime] = useState(180);
    let mm = String(Math.floor(time / 60)).padStart(2, "0");
    let ss = String(time % 60).padStart(2, "0");

    useEffect(() => {
        if ( time <= 0 ) {
            onEnd?.();
            return;
        }

        const timeId = setInterval(() => {
            setTime(time - 1);
        }, 1000);

        return () => clearInterval(timeId);
    }, [time, onEnd]);

    return (
        <Div>
            {`${mm}:${ss}`}
        </Div>
    )
};

const Div = styled.div`
    position: absolute;
    top: 52%;
    right: 35%;
    transform: translateY(-50%);
`;

export default Timer;
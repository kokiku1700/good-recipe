import styled from "styled-components";
import bg1 from "../assets/img/sec2_bg1.jpg";
import bg2 from "../assets/img/sec2_bg2.jpg";
import bg3 from "../assets/img/sec2_bg3.jpg";
import bg4 from "../assets/img/sec2_bg4.jpg";
import { useEffect, useState } from "react";

const MainSec2 = () => {
    const backgroundImages = [bg1, bg2, bg3, bg4];
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(i => (i + 1) % backgroundImages.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [])

    return (
        <Section2>
            {backgroundImages.map((bg, i) => (
                <DivBg
                    key={i}
                    active={i === count}
                    style={{ backgroundImage: `url(${bg})` }}
                />
            ))}
        </Section2>
    )
};

const Section2 = styled.section`
    width: 100%;
    position: relative;
    height: 50vw;
    overflow: hidden;
`;

const DivBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    opacity: ${({ active }) => active ? 1 : 0};
    transition: opacity 1s ease-in-out;
`;


export default MainSec2;
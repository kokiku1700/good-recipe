import styled from "styled-components";
import "../assets/fonts/fonts.css";
import MainSec1 from "../component/MainSec1";
import MainSec2 from "../component/MainSec2";

const Main = () => {

    return(
        <Div>
            <MainSec1 />
            <MainSec2 />
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
`;



export default Main;
import styled from "styled-components";
import "../assets/fonts/fonts.css";
import MainSec0 from "../component/MainSec0";
import MainSec1 from "../component/MainSec1";
import MainSec2 from "../component/MainSec2";
import MainSec3 from "../component/MainSec3";
import MainSec4 from "../component/MainSec4";
import Footer from "../component/Footer";

const Main = () => {

    return(
        <Div>
            <MainSec0 />
            <MainSec1 />
            <MainSec2 />
            <MainSec3 />
            <MainSec4 />
            <Footer />
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
`;



export default Main;
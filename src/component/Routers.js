import { Route, Routes } from "react-router-dom"
import App from "../App";
import Menu from "../page/Menu";
import Reserve from "../page/Reserve";
import ReserveCheck from "../page/ReserveCheck";
import FAQ from "../page/FAQ";

const Routers = () => {

    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/reserveCheck" element={<ReserveCheck />} />
            <Route path="/faq" element={<FAQ />} />
        </Routes>
    );
};

export default Routers;
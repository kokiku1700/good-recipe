import { Route, Routes } from "react-router-dom"
import Menu from "../page/Menu";
import Reserve from "../page/Reserve";
import ReserveCheck from "../page/ReserveCheck";
import FAQ from "../page/FAQ";
import Main from "../page/Main";

const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reserve" element={<Reserve />} />
            <Route path="/reserveCheck" element={<ReserveCheck />} />
            <Route path="/faq" element={<FAQ />} />
        </Routes>
    );
};

export default Router;
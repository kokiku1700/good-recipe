import { useNavigate } from "react-router-dom";
import Button from "../component/components/Button";

const ReserveSuccess = () => {
    const navigate = useNavigate();

    const onClickNavigate = () => {
        navigate("/", { replace: true });
    }

    return (
        <>
            예약이 완료되었습니다.
            <Button width="20" content="홈" onClick={onClickNavigate} />
        </>
    );
};

export default ReserveSuccess;
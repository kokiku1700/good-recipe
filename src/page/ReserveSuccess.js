import { useNavigate } from "react-router-dom";

const ReserveSuccess = () => {
    const navigate = useNavigate();

    const onClickNavigate = () => {
        navigate("/", { replace: true });
    }

    return (
        <>
            예약이 완료되었습니다.
            <button onClick={onClickNavigate}>홈</button>
        </>
    );
};

export default ReserveSuccess;
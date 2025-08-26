import { useLocation, useNavigate } from "react-router-dom";
import Button from "../component/components/Button";
import styled from "styled-components";

const ReserveSuccess = () => {
    const navigate = useNavigate();
    const data = useLocation();

    const onClickNavigate = () => {
        navigate("/", { replace: true });
    };

    return (
        <div>
            {data.state.result === "reserve Success" ?
                <H2>예약이 완료되었습니다.</H2> :
                <H2>예약이 변경되었습니다.</H2>
            }
            <Button width="20" background="#6BA368" content="홈" onClick={onClickNavigate} />
        </div>
    );
};

const H2 = styled.h2`

`;

export default ReserveSuccess;
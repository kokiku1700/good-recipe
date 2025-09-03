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
        <Div>
            {data.state.result === "reserve Success" ?
                <H2>예약이 완료되었습니다.</H2> :
                <H2>예약이 변경되었습니다.</H2>
            }
            <Button width="10" background="#6BA368" content="홈" onClick={onClickNavigate} />
        </Div>
    );
};

const Div = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
`;

const H2 = styled.h2`
    margin: 5% 0;
`;

export default ReserveSuccess;
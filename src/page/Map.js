import styled from "styled-components";
import { Map } from "react-kakao-maps-sdk";

const Street = () => {

    return (
        <SectionMap>
            <Map
                center={{ lat: 37.394726159, lng: 127.111209047 }}
                style={{ width: '1000px', height: '700px' }}
                level={3}
            />
            <Article>
                <p>1. 판교역 1번 출구로 나와서 건너편 정류장을 이용하시면 됩니다.</p>
                <p>2. 32번 버스와 누리3 버스를 이용하실 경우 너더리육교에서 내리시면 됩니다.</p>
                <p>3. 누리4 버스를 이용하실 경우 판교동행정복지센터에서 내리시면 됩니다.</p>
            </Article>
        </SectionMap> 
    );
};

const SectionMap = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3% 0;
`;

const Article = styled.article`
    margin-left: 1%;
`;

export default Street;
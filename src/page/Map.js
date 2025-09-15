import styled from "styled-components";
import { Map } from "react-kakao-maps-sdk";

const Street = () => {

    return (
        <Div>
            <SectionMap>
                <Map
                    center={{ lat: 37.394726159, lng: 127.111209047 }}
                    style={{ width: '1000px', height: '700px' }}
                    level={3}
                />
                <Article>
                    판교역 1번 출구로 나와서 건너편 정류장을 이용하시면 됩니다.
                </Article>
            </SectionMap> 
        </Div>
        
    );
};

const Div = styled.div`
    width: 100%;
`;

const SectionMap = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1% 0;
`;

const Article = styled.article`
    background: yellow;
`;

export default Street;
import styled from "styled-components";
import { Map } from "react-kakao-maps-sdk";

const Street = () => {

    return (
        <Map
            center={{ lat: 37.394726159, lng: 127.111209047 }}
            style={{ width: '1000px', height: '600px' }}
            level={3}
        />
    );
};

export default Street;
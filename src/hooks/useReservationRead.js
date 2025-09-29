import { useState } from "react";
import axios from "axios";

export const useReservationRead = () => {
    // 로딩이 필요할 정도의 규모가 아니라 주석처리
    // const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getReservation = async (reserveName, reserveTel) => {
        // setLoading(true);
        setError(null);
        try {
            const res = await axios.get("http://localhost:4000/reserveCheck", 
                {
                    params: {
                        name: reserveName, 
                        tel: reserveTel
                    }
                });

            if ( res.data ) {
                return res.data;
            } else {
                throw new Error("예약 정보가 없습니다.");
            }
        } catch ( err ) {
            setError(err.message || "조회 실패");
        } finally {
            // setLoading(false);
        }
    };

    return {
        // loading,
        error,
        getReservation,
    }
};
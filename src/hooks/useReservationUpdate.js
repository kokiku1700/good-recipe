import axios from "axios";

export const useReservationUpdate = () => {

    const reservationUpdate = async (
        reserveName, 
        reserveTel, 
        reserveDate, 
        reserveApmpm,
        reserveTime,
        reserveAdult,
        reserveChildren
    ) => {
        try {
            const res = axios.put("http://localhost:4000/reserveEdit", {
                "name": reserveName,
                "tel": reserveTel,
                "date": reserveDate,
                "time": {"AmPm" : reserveApmpm, "time": reserveTime},
                "people": {"adult": reserveAdult, "children": reserveChildren},
            })
            
            return res.data;
        } catch ( err ) {

        }
    }

    return reservationUpdate;
}
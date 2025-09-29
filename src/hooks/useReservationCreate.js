import axios from "axios"

export const useReservationCreate = () => {

    const reservationCreate = async (
        reserveName, 
        reserveTel, 
        reserveDate, 
        reserveApmpm,
        reserveTime,
        reserveAdult,
        reserveChildren
    ) => {
        try {
            const res = await axios.post("http://localhost:4000/Reserve", {
                "name": reserveName,
                "tel": reserveTel,
                "date": reserveDate,
                "time": {"AmPm" : reserveApmpm, "time": reserveTime},
                "people": {"adult": reserveAdult, "children": reserveChildren},
            });
            
            return res.data;
        } catch ( err ) {
            console.err(err);
        }
    }

    return reservationCreate;
}
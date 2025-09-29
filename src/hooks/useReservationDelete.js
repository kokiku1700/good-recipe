import axios from "axios";

export const useReservationDelete = () => {
    
    const reservationDelete = async (reserveName, reserveTel, reserveDate) => {

        try {
            await axios.delete("http://localhost:4000/delete",
                {
                    data: {
                        name: reserveName,
                        tel: reserveTel,
                        date: reserveDate                            
                    }
                }
                
            )
            return true;
        } catch ( err ) {

        }
    }

    return reservationDelete;
}
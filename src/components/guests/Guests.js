import { useEffect, useState } from "react";
import { guestsAPI } from "../../api/api";
import { AddGuest } from "../addGuest/AddGuest";
import Row from "../row/Row";
import  "./guests.css";

const Guests = () => {
    
    const [guestsList, setGuestsList] = useState([]);

    useEffect(() => {
        const getData = async() => {
            try {
                const {data} = await guestsAPI.get("/");
                setGuestsList(data);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    },[])

    const removeGuest= (id) => {
        setGuestsList(prev => prev.filter(guest => guest.id !== id));
    }

    const addGuest = (guest) => {
        setGuestsList(prev => [...prev, guest]);
    }

    const drawTable = () => {
        return guestsList.map(guest => {
            return <Row key={guest.id} content={guest} remove={removeGuest}/>
        })
    }

    return (
        <div>
            {/* {console.log(guestsList)} */}
            <AddGuest add={addGuest}/>
            {drawTable()}
        </div>
    )
};

export default Guests;
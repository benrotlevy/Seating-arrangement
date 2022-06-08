import { useEffect, useRef, useState } from "react";
import { guestsAPI } from "../../api/api";
import { AddGuest } from "../addGuest/AddGuest";
import Row from "../row/Row";
import  "./guests.css";

const Guests = () => {
    
    const [guestsList, setGuestsList] = useState([]);
    const [guestsListToDisplay, setGuestsListToDisplay] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const searchInputRef = useRef("");

    useEffect(() => {
        const getData = async() => {
            try {
                const {data} = await guestsAPI.get("/");
                setGuestsList(data);
                setGuestsListToDisplay(data);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    },[])

    useEffect(()=> {
        setGuestsListToDisplay([...guestsList]);
    }, [guestsList])

    useEffect(()=> {
        if(searchInputRef.current !== searchInput) {
            setGuestsListToDisplay(guestsList.filter(guest => {
                const guestToString = guest.firstName+ " " +guest.lastName+" " +guest.label;
                return guestToString.includes(searchInput);
            }))
        }
        searchInputRef.current = searchInput;
    }, [searchInput, guestsListToDisplay])

    const removeGuest= (id) => {
        setGuestsList(prev => prev.filter(guest => guest.id !== id));
    }

    const addGuest = (guest) => {
        setGuestsList(prev => [...prev, guest]);
    }

    const drawTable = () => {
        return guestsListToDisplay.map(guest => {
            return <Row key={guest.id} content={guest} remove={removeGuest}/>
        })
    }

    return (
        <div>
            <div className="search">
                {/* Search:  */}
                <input value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} />
            </div>
            <AddGuest add={addGuest}/>
            {drawTable()}
        </div>
    )
};

export default Guests;
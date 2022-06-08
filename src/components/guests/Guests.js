import { useEffect, useState } from "react";
import { guestsAPI } from "../../api/api";
import { AddGuest } from "../addGuest/AddGuest";
import Row from "../row/Row";
import { SelectBox } from "../selectBox/SelectBox";
import  "./guests.css";

const getAvailable = (data, prev) => {
    const copy = {...prev};
    for(let key in copy) {
        copy[key].guests = {};
    }
    data.forEach(guest => {
        copy[guest.table].guests[guest.id] = guest;
    })
    for(let key in copy) {
        let taken = 0;
        for(let key2 in copy[key].guests) {
            taken++;
        }
        copy[key].taken = taken;
    }
    // console.log(copy);
    return copy;
}


const Guests = () => {
    
    const [guestsList, setGuestsList] = useState([]);
    const [guestsListToDisplay, setGuestsListToDisplay] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [selectedTable, setSelectedTable] = useState("");
    const [available, setAvailable] = useState({
        1: {numOfChairs:14,
            guests: {},
        },
        2: {numOfChairs:14,
            guests: {},
        },
        3: {numOfChairs:18,
            guests: {},
        },
        4: {numOfChairs:18,
            guests: {},
        },
        5: {numOfChairs:18,
            guests: {},
        },
        6: {numOfChairs:10,
            guests: {},
        },
        7: {numOfChairs:10,
            guests: {},
        },
        8: {numOfChairs:10,
            guests: {},
        },
        9: {numOfChairs:10,
            guests: {},
        },
        10: {numOfChairs:12,
            guests: {},
        },
        11: {numOfChairs:12,
            guests: {},
        },
        12: {numOfChairs:12,
            guests: {},
        },
        13: {numOfChairs:12,
            guests: {},
        },
        14: {numOfChairs:12,
            guests: {},
        },
        15: {numOfChairs:12,
            guests: {},
        },
        16: {numOfChairs:12,
            guests: {},
        },
        17: {numOfChairs:12,
            guests: {},
        },
        18: {numOfChairs:12,
            guests: {},
        },
        19: {numOfChairs:12,
            guests: {},
        },
        20: {numOfChairs:12,
            guests: {},
        },
        21: {numOfChairs:12,
            guests: {},
        },
        22: {numOfChairs:12,
            guests: {},
        },
        23: {numOfChairs:12,
            guests: {},
        },
        24: {numOfChairs:12,
            guests: {},
        },
        25: {numOfChairs:12,
            guests: {},
        },
        26: {numOfChairs:12,
            guests: {},
        },
        27: {numOfChairs:12,
            guests: {},
        },
        28: {numOfChairs:12,
            guests: {},
        },
        29: {numOfChairs:12,
            guests: {},
        },
        30: {numOfChairs:12,
            guests: {},
        },
        31: {numOfChairs:12,
            guests: {},
        },
    });

    useEffect(() => {
        const getData = async() => {
            try {
                const {data} = await guestsAPI.get("/");
                setGuestsList(data);
                // setGuestsListToDisplay(data);
                // setAvailable(prev => getAvailable(data, prev));
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    },[])

    useEffect(()=> {
        setGuestsListToDisplay(guestsList.filter(guest => {
            const guestToString = guest.firstName+ " " +guest.lastName+" " +guest.label;
            return guestToString.includes(searchInput) && (guest.table === selectedTable || !selectedTable);
        }))
        setAvailable(prev => getAvailable(guestsList, prev));
    }, [searchInput, guestsList, selectedTable])

    const removeGuest= (id) => {
        setGuestsList(prev => prev.filter(guest => guest.id !== id));
    }

    const addGuest = (guest) => {
        setGuestsList(prev => [...prev, guest]);
    }

    const editGuest = (editedGuest) => {
        setGuestsList(prev => prev.map(guest => {
            if(guest.id === editedGuest.id) {
                return editedGuest;
            }
            return guest;
        }))
    }

    const drawTable = () => {
        return guestsListToDisplay.map(guest => {
            return <Row key={guest.id} content={guest} remove={removeGuest} guestsList={guestsList} available={available} edit={editGuest}/>
        })
    }

    const onFilterChange = ({target}) => {
        setSelectedTable(target.value);
    }

    return (
        <div>
            <div className="search">
                {/* Search:  */}
                <input value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} />
                <SelectBox onSelectChange={onFilterChange} available={available} selectedTable={selectedTable} all={true}/>
            </div>
            <div className="table">
                <AddGuest guestsList={guestsList} add={addGuest} available={available} selectedTable={selectedTable}/>
                {drawTable()}
            </div>
        </div>
    )
};

export default Guests;
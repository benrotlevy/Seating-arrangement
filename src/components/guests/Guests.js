import Row from "../row/Row";
import  "./guests.css";


const fakeData = [
    {
        firstName: "benjamin",
        lastName: "rotlevy",
        gender: "male",
        label: "",
    },
    {
        firstName: "ben",
        lastName: "rot",
        gender: "female",
        label: "friend",
    },
]

const Guests = () => { 
    return <div><Row content={fakeData[0]} /></div>
};

export default Guests;
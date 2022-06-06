import { useState } from "react";
import  "./row.css";

const Row = ({content}) => {
    
    const [isEditMode, setIsEditMode] = useState(false);
    const [firstNameVal, setFirstNameVal] = useState(content.firstName);
    const [LastNameVal, setLastNameVal] = useState(content.LastName);
    // const [male, setMale] = useState()
    
    return (
        <div className="row">
            
        </div>
    )
};

export default Row;
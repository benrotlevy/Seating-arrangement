import { useRef, useState } from "react";
import { guestsAPI } from "../../api/api";
import { SelectBox } from "../selectBox/SelectBox";
import  "./row.css";

const Row = ({content, remove, available, edit}) => {
    
    const guestData = useRef(content);
    const [isEditMode, setIsEditMode] = useState(false);
    const [firstName, setFirstName] = useState(content.firstName);
    const [lastName, setLastName] = useState(content.lastName);
    const [gender, setGender] = useState(content.gender);
    const [label, setLabel] = useState(content.label);
    const [table, setTable] = useState(content.table);

    const genderChanged = ({target}) => {
        setGender(target.value);
    }

    const tableChanged = ({target}) => {
        // console.log(target);
        setTable(target.value);
    }

    const insertEditDelete = () => {
        return (
            <div className="cell edit-delete">
                <button onClick={handleEdit}>{isEditMode? "Save": "Edit"}</button>
                <button onClick={deleteGuest}>{isEditMode? "Cancel" :"Delete"}</button>
            </div>
        )
    }

    const handleEdit = () => {
        if(isEditMode) {
            editGuest();
        } else {
            setIsEditMode(prev => !prev);
        }
    }

    const editGuest = async () => {
        try {
            const newDetailes = {
                firstName: firstName,
                lastName: lastName,
                gender: gender,
                label: label,
                table: table,
            }
            const {data} = await guestsAPI.put(`/${content.id}`, newDetailes);
            guestData.current = data;
            edit(data);
            setIsEditMode(prev => !prev);
        } catch (error){
            console.log(error);
        }
    }

    const deleteGuest = async() => {
        if(isEditMode) {
            setIsEditMode(prev => !prev);
        } else {
            try {
                const {data} = await guestsAPI.delete(`/${content.id}`);
                remove(data.id);
            } catch (error) {
                console.log(error);
            }
        }
    }

    if(isEditMode) {
        return (
            <div className="row">
                <div className="gender cell">
                    <select onChange={genderChanged} value={gender}>
                        <option value="Mr." >Mr.</option>
                        <option value="Mrs." >Mrs.</option>
                    </select>
                </div>
                <div className="first-name cell">
                    <input value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
                </div>
                <div className="last-name cell">
                    <input value={lastName} onChange={(e)=> setLastName(e.target.value)} />
                </div>
                <div className="label cell">
                    <input value={label} onChange={(e)=> setLabel(e.target.value)} />
                </div>
                <div className="table cell">
                    <SelectBox onSelectChange={tableChanged} selectedTable={table} available={available} all={false}/>
                    {/* <input type="number" max={31} min={1} value={table} onChange={tableChanged} /> */}
                </div>
                {insertEditDelete()}
            </div>
        )
    }

    return (
        <div className="row">
            <div className="gender cell">{guestData.current.gender}</div>
            <div className="first-name cell">{guestData.current.firstName}</div>
            <div className="last-name cell">{guestData.current.lastName}</div>
            <div className="label cell">{guestData.current.label}</div>
            <div className="table cell">{guestData.current.table? `Table ${guestData.current.table}`: ""}</div>
            {insertEditDelete()}
        </div>
    )
};

export default Row;
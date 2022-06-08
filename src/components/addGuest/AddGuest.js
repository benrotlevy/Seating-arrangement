import React, { useEffect, useState } from "react";
import { guestsAPI } from "../../api/api";
import { SelectBox } from "../selectBox/SelectBox";
import "./addGuest.css";

export const AddGuest = ({add, available, selectedTable}) => {
    const [firstNameVal, setFirstNameVal] = useState("");
    const [LastNameVal, setLastNameVal] = useState("");
    const [gender, setGender] = useState("Mr.");
    const [labelVal, setLabelVal] = useState("");
    const [table, setTable] = useState("");

    // useEffect(()=> {
    //     console.log(selectedTable);
    //     if(table !== selectedTable) {
    //         setTable(selectedTable)
    //     }
    // },[table])

    const genderChanged = ({target}) => {
        setGender(target.value);
    }

    const tableChanged = ({target}) => {
        setTable(target.value);
    }

    const addGuest = async() => {
        try {
            const newGuest = {
                firstName: firstNameVal,
                lastName: LastNameVal,
                gender: gender,
                label: labelVal,
                table: table,
            }
            const {data} = await guestsAPI.post("/", newGuest);
            add(data);
            setFirstNameVal("");
            setLabelVal("");
            setGender("Mr.");
            setLastNameVal("");
            setTable(selectedTable);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="row">
                <div className="gender cell">
                    <select onChange={genderChanged} value={gender}>
                        <option value="Mr." >Mr.</option>
                        <option value="Mrs." >Mrs.</option>
                    </select>
                </div>
                <div className="first-name cell">
                    <input value={firstNameVal} onChange={(e)=> setFirstNameVal(e.target.value)} />
                </div>
                <div className="last-name cell">
                    <input value={LastNameVal} onChange={(e)=> setLastNameVal(e.target.value)} />
                </div>
                <div className="label cell">
                    <input value={labelVal} onChange={(e)=> setLabelVal(e.target.value)} />
                </div>
                <div className="table cell">
                    <SelectBox onSelectChange={tableChanged} selectedTable={table} available={available} all={false}/>
                    {/* <input type="number" max={20} min="1" value={table} onChange={tableChanged} /> */}
                </div>
                <div className="cell add">
                    <button onClick={addGuest}>Add</button>
                </div>
            </div>
        </>
    )

}
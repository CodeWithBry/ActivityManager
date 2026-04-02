import { useContext, useState } from "react";
import s from "./Components.module.css"
import { AddRecapContext } from "../AddRecap";
import type { AddRecapContextType } from "../../../../Interfaces/interface";

function DayChoices() {
    const {selectedDay, setSelectedDay} = useContext(AddRecapContext) as AddRecapContextType
    const days: string[] = [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
    ]

    const [showDropDown, setShowDropDown] = useState<boolean>(false)

    return (
        <>
            <h2 className={s.subName}>Days</h2>
            <button
                className={s.subjectBox}
                onClick={() => {
                    showDropDown ? setShowDropDown(false) : setShowDropDown(true)
                }}>
                {selectedDay}
                <i className={showDropDown ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                <ul className={showDropDown ? `${s.choices} ${s.show}` : s.choices}>
                    {days.map((sub) => {
                        return <li
                            className={s.subject}
                            key={Math.random() * 1}
                            onClick={() => { setSelectedDay(sub) }}>
                            {sub}
                        </li>
                    })}
                </ul>
            </button>
        </>
    )
}

export default DayChoices
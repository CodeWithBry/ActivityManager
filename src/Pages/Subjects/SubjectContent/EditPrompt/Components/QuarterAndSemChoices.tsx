import { useContext, useState } from "react";
import s from "./Components.module.css"
import { SubjectContentContext } from "../../SubjectContent";
import type { SubConContextType } from "../../../../../Interfaces/interface";

function QuarterAndSemChoices() {
    const {quarterAndSemChoices, quarter, setQuarter, semester, setSemester} = useContext(SubjectContentContext) as SubConContextType
    const [showSemAndQuarter, setShowSemAndQuarter] = useState<boolean>(false)
    
    return (
        <>
            <h2 className={s.subName}>Semester and Quarter</h2>
            <button
                className={s.subjectBox}
                onClick={() => {
                    showSemAndQuarter ? setShowSemAndQuarter(false) : setShowSemAndQuarter(true)
                }}>
                {semester + " Sem: " + quarter + " Quarter"}
                <i className={showSemAndQuarter ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                <ul className={showSemAndQuarter ? `${s.choices} ${s.show}` : s.choices}>
                    {quarterAndSemChoices.map((sub) => {
                        return <li
                            className={s.subject}
                            key={Math.random() * 1}
                            onClick={() => { setQuarter(sub.quarter), setSemester(sub.sem) }}>
                            {sub.sem + " Sem: " + sub.quarter + " Quarter"}
                        </li>
                    })}
                </ul>
            </button>
        </>
    )
}

export default QuarterAndSemChoices
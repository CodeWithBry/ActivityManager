import { useState, type Dispatch, type SetStateAction } from "react";
import s from "./Components.module.css";

interface Props {
    selectedStatus: string;
    setSelectedStatus: Dispatch<SetStateAction<string>>
}

function QuarterAndSemChoices({selectedStatus, setSelectedStatus}: Props) {
    const [showStatus, setShowStatus] = useState<boolean>(false)
    const [statusChoices] = useState<string[]>(["(Submitted)", "(Continue)", ""])

    return (
        <>
            <h2 className={s.subName}>Semester and Quarter</h2>
            <button
                className={s.subjectBox}
                onClick={() => {
                    showStatus ? setShowStatus(false) : setShowStatus(true)
                }}>
                {selectedStatus}
                <i className={showStatus ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                <ul className={showStatus ? `${s.choices} ${s.show}` : s.choices}>
                    {statusChoices.map((sub) => {
                        return <li
                            className={s.subject}
                            key={Math.random() * 1}
                            onClick={() => { setSelectedStatus(sub) }}>
                            {sub}
                        </li>
                    })}
                </ul>
            </button>
        </>
    )
}

export default QuarterAndSemChoices
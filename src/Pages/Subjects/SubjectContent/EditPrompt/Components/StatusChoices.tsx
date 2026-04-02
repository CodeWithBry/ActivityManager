import { useState, type Dispatch, type SetStateAction } from "react";
import s from "./Components.module.css"

interface Props {
    status: "completed" | "pending",
    setStatus: Dispatch<SetStateAction<"completed" | "pending">>
}

function StatusChoices({ status, setStatus }: Props) {

    const [subjects] = useState([
        "pending", "completed"
    ])
    const [showStatus, setShowStatus] = useState<boolean>(false)

    return (
        <>
            <h2 className={s.subName}>Subject</h2>
            <button
                className={s.subjectBox}
                onClick={() => {
                    showStatus ? setShowStatus(false) : setShowStatus(true)
                }}>
                {status}
                <i className={showStatus ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                <ul className={showStatus ? `${s.choices} ${s.show}` : s.choices}>
                    {subjects.map((sub) => {
                        return <li
                            className={s.status}
                            key={Math.random() * 1}
                            onClick={() => { setStatus(sub == "pending" ? "pending" : "completed") }}>
                            {sub}
                        </li>
                    })}
                </ul>
            </button>
        </>
    )
}

export default StatusChoices
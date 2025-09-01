import { useState, type Dispatch, type SetStateAction } from "react";
import s from "./Components.module.css"

interface Props {
    subject: string,
    setSubject: Dispatch<SetStateAction<string>>
}

function SubjectChoices({ subject, setSubject }: Props) {

    const [subjects] = useState([
        "CSS", "Philosophy", "CPAR", "UCSP", "PEH3", "Entrepreneurship",
        "21stCL", "Robotics"
    ])
    const [showSubjects, setShowSubjects] = useState<boolean>(false)

    return (
        <>
            <h2 className={s.subName}>Subject</h2>
            <button
                className={s.subjectBox}
                onClick={() => {
                    showSubjects ? setShowSubjects(false) : setShowSubjects(true)
                }}>
                {subject}
                <i className={showSubjects ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                <ul className={showSubjects ? `${s.choices} ${s.show}` : s.choices}>
                    {subjects.map((sub) => {
                        return <li
                            className={s.subject}
                            key={Math.random() * 1}
                            onClick={() => { setSubject(sub) }}>
                            {sub}
                        </li>
                    })}
                </ul>
            </button>
        </>
    )
}

export default SubjectChoices
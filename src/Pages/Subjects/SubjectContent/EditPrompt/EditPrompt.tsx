import { useContext, useEffect, useState } from "react"
import s from "./EditPrompt.module.css"
import { context } from "../../../../App"
import type { ContextType, SchoolActivities, SubConContextType } from "../../../../Interfaces/interface"
import SubjectChoices from "./Components/SubjectChoices"
import QuarterAndSemChoices from "./Components/QuarterAndSemChoices"
import { SubjectContentContext } from "../SubjectContent"
import StatusChoices from "./Components/StatusChoices"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { firestore } from "../../../../Firebase/Firebase"


export default function EditPrompt() {
    const { typeOfWork, setTypeOfWork, params, quarter, semester, actDesc, showEdit, setShowEdit } = useContext(SubjectContentContext) as SubConContextType

    const { userData } = useContext(context) as ContextType
    const [actTitle, setActTitle] = useState<string>("")
    const [actDescription, setActDescription] = useState<string>("")
    const [dueDate, setDueDate] = useState<string>("")
    const [subject, setSubject] = useState<string>(params?.toUpperCase())
    const [status, setStatus] = useState<"completed" | "pending">("pending")
    const [id, setId] = useState<number | string>("")

    async function UpdateMainDB() {
        const date = new Date
        const activity = {
            id: id,
            title: actTitle,
            description: actDescription,
            typeOfWork: typeOfWork,
            status: status,
            createdBy: "Pajarillaga, Bryan",
            createdAt: `${date?.getFullYear()}-${date?.getMonth()}-${date?.getDate()}`,
            dueDate: dueDate,
            subject: subject,
            semester: semester,
            quarter: quarter,
            isSelected: false,
            timeCreated: Date.now()
        }
        const mainDB = doc(firestore, "Main_Database", "School_Activities")
        const getMainDB = await getDoc(mainDB)
        const getData = getMainDB.data()
        if (getData) {
            switch (typeOfWork) {
                case "Activity":
                    const Activities = getData.Activity as SchoolActivities[]
                    const Activity = Activities.map(act => (act.id == id ? { ...activity, id: Math.random() * 1 } : { ...act }))
                    await updateDoc(mainDB, {
                        [typeOfWork]: Activity
                    })
                    break;
                case "Assignment":
                    const Assignments = getData.Assignment as SchoolActivities[]
                    const Assignment = Assignments.map(act => (act.id == id ? { ...activity, id: Math.random() * 1 } : { ...act }))
                    await updateDoc(mainDB, {
                        [typeOfWork]: Assignment
                    })
                    break;
                case "Project":
                    const Projects = getData.Project as SchoolActivities[]
                    const Project = Projects.map(act => (act.id == id ? {...activity, id: Math.random() * 1} : {...act})) 
                    await updateDoc(mainDB, {
                        [typeOfWork]: Project
                    })
                    break;
            }
        }

        setShowEdit(false)
    }

    useEffect(() => {
        setSubject(params)
    }, [params])

    useEffect(() => {
        if (actDesc) {
            setActTitle(actDesc.title)
            setActDescription(actDesc.description)
            setDueDate(actDesc.dueDate)
            setStatus(actDesc.status)
            setId(actDesc.id)
        }
    }, [actDesc])

    if (showEdit && userData?.user.status == "Owner") return (
        <div className={s.addSubjectWrapper}>
            <div className={s.addSubjectBox}>
                <button className={s.closeButton} onClick={() => { setTypeOfWork(""), setShowEdit(false) }}>X</button>
                <h1>Edit {typeOfWork}</h1>
                <div className={s.top}>
                    <SubjectChoices subject={subject} setSubject={setSubject} />
                    <QuarterAndSemChoices />
                    <StatusChoices status={status} setStatus={setStatus} />
                    <h2 className={s.deadline}>Deadline: </h2>
                    <input
                        type="date"
                        onChange={(e) => {
                            console.log(e.currentTarget.value)
                            setDueDate(e.currentTarget.value)
                        }
                        } />
                    <h2 className={s.actTitle}>{typeOfWork} Title</h2>
                    <input
                        type="text"
                        value={actTitle}
                        onChange={(e) => {
                            setActTitle(e.currentTarget.value)
                        }} />
                    <h2 className={s.actDescription}>{typeOfWork} Description</h2>
                    <textarea

                        rows={5}
                        value={actDescription}
                        onChange={(e) => {
                            setActDescription(e.currentTarget.value)
                        }} />
                </div>
                <button
                    className={s.submit}
                    onClick={UpdateMainDB}>
                    Submit
                </button>
            </div>
        </div>
    )
}
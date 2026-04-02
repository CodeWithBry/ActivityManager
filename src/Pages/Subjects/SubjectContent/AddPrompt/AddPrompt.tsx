import { useContext, useEffect, useState } from "react"
import s from "./AddPrompt.module.css"
import { context } from "../../../../App"
import type { ContextType, SubConContextType } from "../../../../Interfaces/interface"
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore"
import { firestore } from "../../../../Firebase/Firebase"
import { FirebaseError } from "firebase/app"
import SubjectChoices from "./Components/SubjectChoices"
import QuarterAndSemChoices from "./Components/QuarterAndSemChoices"
import { SubjectContentContext } from "../SubjectContent"
import StatusChoices from "./Components/StatusChoices"


export default function AddPrompt() {
    const {typeOfWork, showAddPrompt, setShowAddPrompt, setTypeOfWork, params, quarter, semester} = useContext(SubjectContentContext) as SubConContextType

    const { userData } = useContext(context) as ContextType
    const [actTitle, setActTitle] = useState<string>("")
    const [actDesc, setActDesc] = useState<string>("")
    const [dueDate, setDueDate] = useState<string | null>(null)
    const [subject, setSubject] = useState<string>(params?.toUpperCase())
    const [status, setStatus] = useState<"completed" | "pending">("pending")


    async function saveToMainDB() {
        const date = new Date
        const activity = {
            id: Math.random() * 1,
            title: actTitle,
            description: actDesc,
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
        try {
            const mainDB = doc(firestore, "Main_Database", `School_Activities`)
            const getActivities = await getDoc(mainDB)
            if (!getActivities.exists()) {
                await setDoc(mainDB, {
                    [typeOfWork]: arrayUnion(activity)
                })
            } else {
                await updateDoc(mainDB, {
                    [typeOfWork]: arrayUnion(activity)
                })
            }
            setActTitle("")
            setActDesc("")
            setDueDate(null)
            setTypeOfWork("")
            setShowAddPrompt(false)
        } catch (error) {
            if (error instanceof FirebaseError) console.log(error)
        }
    }

    useEffect(()=>{
        setSubject(params)
    },[params])

    

    if (showAddPrompt && userData?.user.status == "Owner") return (
        <div className={s.addSubjectWrapper}>
            <div className={s.addSubjectBox}>
                <button className={s.closeButton} onClick={() => { setTypeOfWork(""), setShowAddPrompt(false) }}>X</button>
                <h1>Create {typeOfWork}</h1>
                <div className={s.top}>
                    <SubjectChoices subject={subject} setSubject={setSubject}/>
                    <QuarterAndSemChoices />
                    <StatusChoices status={status} setStatus={setStatus} />
                    <h2 className={s.deadline}>Deadline: </h2>
                    <input
                        type="date"
                        onChange={(e) => {
                            console.log(e.currentTarget.value)
                            setDueDate(e.currentTarget.value)}
                        } />
                    <h2 className={s.actTitle}>{typeOfWork} Title</h2>
                    <input
                        type="text"
                        value={actTitle}
                        onChange={(e) => {
                            setActTitle(e.currentTarget.value)
                        }} />
                    <h2 className={s.actDesc}>{typeOfWork} Description</h2>
                    <textarea

                        rows={5}
                        value={actDesc}
                        onChange={(e) => {
                            setActDesc(e.currentTarget.value)
                        }} />
                </div>
                <button
                    className={s.submit}
                    onClick={saveToMainDB}>
                    Submit
                </button>
            </div>
        </div>
    )
}
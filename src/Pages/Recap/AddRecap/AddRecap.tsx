import { createContext, useState, type Dispatch, type SetStateAction } from "react"
import s from "./AddRecap.module.css"
import type { WeeklyRecap } from "../../../Interfaces/interface"
import DayChoices from "./Components/DayChoices";
import Activity from "./Components/Activity";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../../../Firebase/Firebase";
import { FirebaseError } from "firebase/app";

type Props = {
    showAddRecap: boolean;
    setShowAddRecap: Dispatch<SetStateAction<boolean>>;
    weeklyRecaps: WeeklyRecap | null;
}

export const AddRecapContext = createContext({})

export default function AddRecap({ showAddRecap, setShowAddRecap }: Props) {
    const initialRecapVal = {
        monthAndDay: "",
        days: [{ day: "Monday", Activities: [], Assignment: [], Groupings: [], Projects: [], Exams: [] },
        { day: "Tuesday", Activities: [], Assignment: [], Groupings: [], Projects: [], Exams: [] },
        { day: "Wednesday", Activities: [], Assignment: [], Groupings: [], Projects: [], Exams: [] },
        { day: "Thursday", Activities: [], Assignment: [], Groupings: [], Projects: [], Exams: [] },
        { day: "Friday", Activities: [], Assignment: [], Groupings: [], Projects: [], Exams: [] }]
    }

    const [showActPrompt, setShowActPrompt] = useState<boolean>(false)
    const [showAssPrompt, setShowAssPrompt] = useState<boolean>(false)
    const [showProjPrompt, setShowProjPrompt] = useState<boolean>(false)

    const [typeOfWork, setTypeOfWork] = useState<string>("Activity")
    const [selectedDay, setSelectedDay] = useState<string>("Monday")
    const [quarter, setQuarter] = useState<string>("1st")
    const [semester, setSemester] = useState<string>("1st")

    const [recap, setRecap] = useState<WeeklyRecap>(initialRecapVal)


    async function createRecap() {
        const monthAndDay = { monthAndDay: recap.monthAndDay }
        try {
            const listOfRecaps = doc(firestore, "Main_Database", "Recaps")
            const recapDate = doc(firestore, "Main_Database", "Recaps", `${monthAndDay.monthAndDay}`, `${monthAndDay.monthAndDay}`)
            await updateDoc(listOfRecaps, {
                ListsOfRecap: arrayUnion(monthAndDay)
            })
            await setDoc(recapDate, {
                [monthAndDay.monthAndDay]: recap
            })

        } catch (error) {
            if (error instanceof FirebaseError) console.log(error)
        }
    }

    function toTrash(id: string | number, typeOfWorkArg: string) {
        switch (typeOfWorkArg) {
            case "Activity":
                setRecap(prev => {
                    if (!prev) return prev
                    const newValue = prev.days.map(day => {
                        const newActValue = day.Activities.filter(act => act.id != id)

                        return {...day, Activities: newActValue}
                    })
                    
                    return { ...prev, days: newValue }
                })
                break;
            case "Groupings":
                setRecap(prev => {
                    if (!prev) return prev
                    if (!prev) return prev
                    const newValue = prev.days.map(day => {
                        const newActValue = day.Groupings.filter(act => act.id != id)

                        return {...day, Groupings: newActValue}
                    })
                    
                    return { ...prev, days: newValue }
                })
                break;
            case "Assignment":
                setRecap(prev => {
                    if (!prev) return prev
                    const newValue = prev.days.map(day => {
                        const newActValue = day.Assignment.filter(act => act.id != id)

                        return {...day, Assignment: newActValue}
                    })
                    
                    return { ...prev, days: newValue }
                })
                break;
            case "Project":
                setRecap(prev => {
                    if (!prev) return prev
                    const newValue = prev.days.map(day => {
                        const newActValue = day.Projects.filter(act => act.id != id)

                        return {...day, Projects: newActValue}
                    })
                    
                    return { ...prev, days: newValue }
                })
                break;
            case "Exams":
                setRecap(prev => {
                    if (!prev) return prev
                    const newValue = prev.days.map(day => {
                        const newActValue = day.Exams.filter(act => act.id != id)

                        return {...day, Exams: newActValue}
                    })
                    
                    return { ...prev, days: newValue }
                })
                break;
        }
    }

    const variable = {
        showActPrompt, setShowActPrompt,
        showAssPrompt, setShowAssPrompt,
        showProjPrompt, setShowProjPrompt,

        selectedDay, setSelectedDay,
        typeOfWork, setTypeOfWork,
        quarter, setQuarter,
        semester, setSemester,

        recap, setRecap,

        createRecap
    }

    if (showAddRecap) {
        return (
            <AddRecapContext.Provider value={variable}>
                <Activity />
                <div className={s.createPrompt}>
                    <div className={s.addSubjectBox}>
                        <button className={s.closeButton} onClick={() => { setShowAddRecap(false), setRecap(initialRecapVal) }}>X</button>
                        <div className={s.top}>
                            <DayChoices />
                            <h2 className={s.title}>Month and Day</h2>
                            <input
                                type="text"
                                value={recap.monthAndDay}
                                onChange={(e) => {
                                    const val = e.currentTarget.value
                                    setRecap(prev => ({
                                        ...prev,
                                        monthAndDay: val
                                    }));
                                }}
                            />
                            <div className={s.activitiesWrapper}>
                                <h2 className={s.actTitle}>
                                    <span>Activities: </span>
                                    <button onClick={() => { setShowActPrompt(true), setTypeOfWork("Activity") }}>Create Actvity</button>
                                </h2>
                                <ul>
                                    {
                                        recap?.days.map(day => day.day == selectedDay && day.Activities.map(act =>
                                            <li key={Math.random() * 1} className={s.lists}>
                                                <span>{act.subject}: {act.title}</span>
                                                <button onClick={()=>{toTrash(act.id, act.typeOfWork)}}> <i className="fa fa-trash"></i> </button>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <h2 className={s.actTitle}>
                                    <span>Group Activities: </span>
                                    <button onClick={() => { setShowActPrompt(true), setTypeOfWork("Groupings") }}>Create Groupings</button>
                                </h2>
                                <ul>
                                    {
                                        recap?.days.map(day => day.day == selectedDay && day.Groupings.map(act =>
                                            <li key={Math.random() * 1} className={s.lists}>
                                                <span>{act.subject}: {act.title}</span>
                                                <button onClick={()=>{toTrash(act.id, act.typeOfWork)}}> <i className="fa fa-trash"></i> </button>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <h2 className={s.actTitle}>
                                    <span>Assignments: </span>
                                    <button onClick={() => { setShowActPrompt(true), setTypeOfWork("Assignment") }}>Create Assignment</button>
                                </h2>
                                <ul>
                                    {
                                        recap?.days.map(day => day.day == selectedDay && day.Assignment.map(act =>
                                            <li key={Math.random() * 1} className={s.lists}>
                                                <span>{act.subject}: {act.title}</span>
                                                <button onClick={()=>{toTrash(act.id, act.typeOfWork)}}> <i className="fa fa-trash"></i> </button>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <h2 className={s.actTitle}>
                                    <span>Projects: </span>
                                    <button onClick={() => { setShowActPrompt(true), setTypeOfWork("Project") }}>Create Project</button>
                                </h2>
                                <ul>
                                    {
                                        recap?.days.map(day => day.day == selectedDay && day.Projects.map(act =>
                                            <li key={Math.random() * 1} className={s.lists}>
                                                <span>{act.subject}: {act.title}</span>
                                                <button onClick={()=>{toTrash(act.id, act.typeOfWork)}}> <i className="fa fa-trash"></i> </button>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <h2 className={s.actTitle}>
                                    <span>Exams: </span>
                                    <button onClick={() => { setShowActPrompt(true), setTypeOfWork("Exams") }}>Create Exam</button>
                                </h2>
                                <ul>
                                    {
                                        recap?.days.map(day => day.day == selectedDay && day.Exams.map(act =>
                                            <li key={Math.random() * 1} className={s.lists}>
                                                <span>{act.subject}: {act.title}</span>
                                                <button onClick={()=>{toTrash(act.id, act.typeOfWork)}}> <i className="fa fa-trash"></i> </button>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            <button
                                className={s.submit}
                                onClick={createRecap}>
                                Submit
                            </button>
                        </div>

                    </div>
                </div>
            </AddRecapContext.Provider>
        )
    }
}
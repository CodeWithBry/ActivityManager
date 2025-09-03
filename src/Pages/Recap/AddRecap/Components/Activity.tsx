import { useContext, useEffect, useState } from 'react'
import s from './Activity.module.css'
import { AddRecapContext } from '../AddRecap'
import type { AddRecapContextType } from '../../../../Interfaces/interface'
import SubjectChoices from './SubjectChoices'
import QuarterAndSemChoices from './QuarterAndSemChoices'

export default function Activity() {
    const { typeOfWork, setTypeOfWork,
        showActPrompt, setShowActPrompt,
        showAssPrompt, setShowAssPrompt,
        showProjPrompt, setShowProjPrompt,
        setRecap, recap,
        selectedDay } = useContext(AddRecapContext) as AddRecapContextType
    const [actTitle, setActTitle] = useState<string>("")
    const [actDesc, setActDesc] = useState<string>("")
    const [status, setStatus] = useState("(Submitted)")
    const [subject, setSubject] = useState<string>("CSS")

    function handleCreate() {
        const activity = {
            id: Math.random() * 1,
            status: status,
            title: actTitle,
            description: actDesc,
            typeOfWork: typeOfWork,
            subject: subject
        }

        switch (typeOfWork) {
            case "Activity":
                setRecap(prev => {
                    if (!prev) return prev
                    const newValue = prev.days.map(day => {
                        if (selectedDay == day.day) return { ...day, Activities: [...day.Activities, { ...activity, status: status }] }

                        return { ...day }
                    })
                    return { ...prev, days: newValue }
                })
                break;
            case "Groupings":
                setRecap(prev => {
                    if (!prev) return prev
                    const newValue = prev.days.map(day => {
                        if (selectedDay == day.day) return { ...day, Groupings: [...day.Groupings, { ...activity, status: status }] }

                        return { ...day }
                    })
                    return { ...prev, days: newValue }
                })
                break;
            case "Assignment":
                setRecap(prev => {
                    if (!prev) return prev
                    const newValue = prev.days.map(day => {
                        if (selectedDay == day.day) return { ...day, Assignment: [...day.Assignment, { ...activity, status: status }] }

                        return { ...day }
                    })
                    return { ...prev, days: newValue }
                })
                break;
            case "Project":
                setRecap(prev => {
                    if (!prev) return prev
                    const newValue = prev.days.map(day => {
                        if (selectedDay == day.day) return { ...day, Projects: [...day.Projects, { ...activity, status: status }] }

                        return { ...day }
                    })
                    return { ...prev, days: newValue }
                })
                break;
            case "Exams":
                setRecap(prev => {
                    if (!prev) return prev
                    const newValue = prev.days.map(day => {
                        if (selectedDay == day.day) return { ...day, Exams: [...day.Exams, { ...activity, status: status }] }

                        return { ...day }
                    })
                    return { ...prev, days: newValue }
                })
                break;
        }
    }

    useEffect(() => {
        if (recap) {
            console.log(recap)
        }
    }, [recap])

    if (showActPrompt || showAssPrompt || showProjPrompt) return (
        <div className={s.addSubjectWrapper}>
            <div className={s.addSubjectBox}>
                <button className={s.closeButton} onClick={() => { setTypeOfWork(""), setShowActPrompt(false), setShowAssPrompt(false), setShowProjPrompt(false) }}>X</button>
                <h1>Create {typeOfWork}</h1>
                <div className={s.top}>
                    <SubjectChoices subject={subject} setSubject={setSubject} />
                    <QuarterAndSemChoices selectedStatus={status} setSelectedStatus={setStatus} />
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
                <div className={s.buttonWrapper}>
                    <button
                        className={s.submit}
                        onClick={handleCreate}>
                        Submit Only
                    </button>
                    <button
                        className={s.submit}
                        onClick={handleCreate}>
                        Create Again
                    </button>
                </div>
            </div>
        </div>
    )
}
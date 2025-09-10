import { useContext, type Dispatch, type FC, type MouseEvent, type SetStateAction } from "react";
import s from "./Activity.module.css"
import type { SchoolActivities, SubConContextType } from "../../../../Interfaces/interface";
import { SubjectContentContext } from "../SubjectContent";


interface ActivityProps {
    task: SchoolActivities | null;
    handleRightClick: (e: MouseEvent<HTMLDivElement>, task: SchoolActivities | null, contextMenu: boolean) => void
    setActDesc: Dispatch<SetStateAction<SchoolActivities | null>>
}

function Activity({ task, handleRightClick, setActDesc,  }: ActivityProps) {
    const { canSelect, setActivities, setAssignments, setProjects, setExams } = useContext(SubjectContentContext) as SubConContextType
    const Input: FC = () => {

        if (canSelect) return <input
            type="checkbox"
            checked={task?.isSelected}
            onChange={() => {
                handleCheck(null)
            }}
            className={task?.isSelected ? s.selected : s.notSelected} />
    }

    function handleCheck(task: SchoolActivities | null) {
        if (canSelect) {
            setActivities(prev => prev ? prev.map((acts) => {
                if (acts.id == task?.id) return { ...acts, isSelected: acts.isSelected ? false : true }
                return acts
            }) : [])
            setAssignments(prev => prev ? prev.map((acts) => {
                if (acts.id == task?.id) return { ...acts, isSelected: acts.isSelected ? false : true }
                return acts
            }) : [])
            setProjects(prev => prev ? prev.map((acts) => {
                if (acts.id == task?.id) return { ...acts, isSelected: acts.isSelected ? false : true }
                return acts
            }) : [])
            setExams(prev => prev ? prev.map((acts) => {
                if (acts.id == task?.id) return { ...acts, isSelected: acts.isSelected ? false : true }
                return acts
            }) : [])
        } 
    }

    return <div
        id={`${task?.id}`}
        className={task?.status == "completed" ? s.activity : s.pendingActivity}
        onContextMenu={(e) => handleRightClick(e, task, false)}
        onDoubleClick={(e) => handleRightClick(e, task, true)}
        onClick={() => { setActDesc(task), handleCheck(task) }}>
        <h2>{task?.title}</h2>
        <p>{task?.description}</p>
        <Input />
    </div>
}

export default Activity
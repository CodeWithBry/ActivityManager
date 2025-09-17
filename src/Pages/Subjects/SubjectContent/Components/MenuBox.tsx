import { useContext } from "react";
import s from "./Components.module.css"
import { SubjectContentContext } from "../SubjectContent";
import type { ContextType, SchoolActivities, SubConContextType } from "../../../../Interfaces/interface";
import { context } from "../../../../App";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../../../../Firebase/Firebase";

interface Props {
    task: SchoolActivities | null;
}

function MenuBox({ task }: Props) {
    const {
        setShowActDesc, setCanSelect,
        defineTypeOfWork, actDesc,
        menu, showMenu,
        menuPos, canSelect,
        handleRightClick, setActivities,
        setAssignments, setProjects,
        handleSelectAll, setShowEdit,
        setExams } = useContext(SubjectContentContext) as SubConContextType
    const { userData } = useContext(context) as ContextType

    function handleCheck(bool: boolean) {
        if (canSelect) {
            switch (task?.typeOfWork) {
                case "Activity":
                    setActivities(prev => prev ? prev.map((acts) => {
                        if (acts.id == task?.id) return { ...acts, isSelected: bool }
                        return acts
                    }) : [])
                    break;
                case "Assignment":
                    setAssignments(prev => prev ? prev.map((acts) => {
                        if (acts.id == task?.id) return { ...acts, isSelected: bool }
                        return acts
                    }) : [])
                    break;
                case "Project":
                    setProjects(prev => prev ? prev.map((acts) => {
                        if (acts.id == task?.id) return { ...acts, isSelected: bool }
                        return acts
                    }) : [])
                    break;
                case "Exam":
                    setExams(prev => prev ? prev.map((acts) => {
                        if (acts.id == task?.id) return { ...acts, isSelected: bool }
                        return acts
                    }) : [])
                    break;
            }
        }
    }

    function handleClick(num: number) {
        switch (num) {
            case 1:
                setShowActDesc(true)
                break;
            case 2:
                !canSelect ? setCanSelect(true) : setCanSelect(false)
                if (canSelect) {
                    handleCheck(false)
                    handleSelectAll("All", false)
                }
                break;
            case 3:
                if (actDesc)
                    defineTypeOfWork(true, "pending", actDesc)
                break;
            case 4:
                if (actDesc)
                    defineTypeOfWork(true, "completed", actDesc)
                break;
            case 5:
                task?.isSelected ? handleCheck(false) : handleCheck(true)
                break;
            case 6:
                setShowEdit(true)
                break;
            case 7:
                if (actDesc) deleteTask(actDesc);
                break;
        }
    }

    async function deleteTask(act: SchoolActivities) {
        const docRef = doc(firestore, "Main_Database", "School_Activities")
        const getData = (await getDoc(docRef)).data()
        const findAct = getData?.Activity.filter((origAct: SchoolActivities) => act.id != origAct.id)
        const findAss = getData?.Assignment.filter((origAct: SchoolActivities) => act.id != origAct.id)
        const findProj = getData?.Project.filter((origAct: SchoolActivities) => act.id != origAct.id)
        const findExam = getData?.Exam.filter((origAct: SchoolActivities) => act.id != origAct.id)

        switch (act.typeOfWork) {
            case "Activity":
                await updateDoc(docRef, {
                    Activity: findAct
                })
                break;
            case "Assignment":
                await updateDoc(docRef, {
                    Assignment: findAss
                })
                break;
            case "Project":
                await updateDoc(docRef, {
                    Project: findProj
                })
                break;
            case "Exam":
                await updateDoc(docRef, {
                    Exam: findExam
                })
                break;
        }
    }

    function SelectButtons() {
        if (canSelect)
            return <button
                onClick={() => handleClick(5)}>
                <i className="fa fa-hand-o-up"></i>
                {actDesc?.isSelected ? "Unselect" : "Select"}
            </button>
    }

    function EditButton() {
        if (userData?.user.status == "Owner") {
            return <>
                <button
                    onClick={() => handleClick(6)}>
                    <i className="	fa fa-edit"></i>
                    Edit
                </button>
                <button
                    onClick={() => handleClick(7)}>
                    <i className="	fa fa-trash"></i>
                    Delete
                </button>
            </>
        }
    }


    return <div
        ref={menu}
        onClick={(e) => handleRightClick(e, null, false)}
        className={showMenu ? s.showMenu : s.hideMenu}
        style={{
            left: menuPos.x,
            top: menuPos.y
        }}
    >
        <button
            onClick={() => handleClick(1)}>
            <i className="fa fa-envelope-open"></i>
            Open
        </button>
        <EditButton />
        <button
            onClick={() => handleClick(2)}>
            <i className={canSelect ? "fa fa-close" : "fa fa-hand-o-up"}></i>
            {canSelect ? "Cancel" : "Select"}
        </button>
        <SelectButtons />
        <button
            onClick={() => handleClick(3)}>
            <i className="	fa fa-edit"></i>
            Mark As Pending
        </button>
        <button
            onClick={() => handleClick(4)}>
            <i className="	fa fa-edit"></i>
            Mark As Finish
        </button>
    </div>
}

export default MenuBox
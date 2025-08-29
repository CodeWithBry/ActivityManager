import { useContext } from "react";
import s from "./Components.module.css"
import { SubjectContentContext } from "../SubjectContent";
import type { SchoolActivities, SubConContextType } from "../../../../Interfaces/interface";

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
        handleSelectAll } = useContext(SubjectContentContext) as SubConContextType

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
                    defineTypeOfWork(true, "pending")
                break;
            case 4:
                if (actDesc)
                    defineTypeOfWork(true, "completed")
                break;
            case 5:
                task?.isSelected ? handleCheck(false) : handleCheck(true)
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
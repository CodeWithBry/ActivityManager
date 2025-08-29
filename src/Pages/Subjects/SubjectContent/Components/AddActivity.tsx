import s from "./Components.module.css"
import { context } from '../../../../App';
import type { ContextType, SubConContextType } from '../../../../Interfaces/interface';
import { useContext } from "react";
import { SubjectContentContext } from "../SubjectContent";

interface AddActivityProps {
    type: string;
}

function AddActivity({ type }: AddActivityProps) {
    const {userData} = useContext(context) as ContextType
    const {setTypeOfWork, setShowAddPrompt} = useContext(SubjectContentContext) as SubConContextType
    if (userData?.user?.status == "Owner") return <div
        className={s.addActivity}
        onClick={() => { setTypeOfWork(type), setShowAddPrompt(true) }}>
        <h1>+</h1>
    </div>
}

export default AddActivity
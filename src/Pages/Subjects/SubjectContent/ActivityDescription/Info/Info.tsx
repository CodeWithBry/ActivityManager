import { useContext, type Dispatch, type SetStateAction } from "react";
import s from "./Info.module.css"
import { SubjectContentContext } from "../../SubjectContent";
import type { SubConContextType } from "../../../../../Interfaces/interface";

interface Props {
    showInfo: boolean;
    setShowInfo: Dispatch<SetStateAction<boolean>>;
}

function Info({ showInfo, setShowInfo }: Props) {
    const { actDesc } = useContext(SubjectContentContext) as SubConContextType

    function handleMouseLeave(e: React.MouseEvent<HTMLDivElement>) {
        const element = e.currentTarget.classList
        if (element.contains(s.hideInfoBox)) {
            element.replace(`${s.hideInfoBox}`, `${s.animHideInfo}`)
            setTimeout(() => {
                element.replace(`${s.animHideInfo}`, `${s.hideInfoBox}`)
            }, 1000)
        } else {
            element.add(`${s.animHideInfo}`)
            setTimeout(() => {
                element.replace(`${s.animHideInfo}`, `${s.hideInfoBox}`)
            }, 1000)
        }
        setShowInfo(false)
    }

    return <>
        <div
            className={showInfo ? `${s.infoBox} ${s.showInfoBox}` : `${s.infoBox} ${s.hideInfoBox}`}
            onMouseLeave={handleMouseLeave}>
            <ul>
                <li>Created At: {actDesc?.createdAt}</li>
                <li>Deadline: {actDesc?.dueDate}</li>
                <li>Semester: {actDesc?.semester} Sem</li>
                <li>Quarter: {actDesc?.quarter} Quarter</li>
                <li>Type: {actDesc?.typeOfWork}</li>
            </ul>
        </div>
    </>
}

export default Info
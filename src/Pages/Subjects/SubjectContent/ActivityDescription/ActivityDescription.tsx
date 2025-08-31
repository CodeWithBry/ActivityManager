import type { SubConContextType } from "../../../../Interfaces/interface";
import { SubjectContentContext } from "../SubjectContent";
import s from "./ActivityDescription.module.css"
import { useContext, useState } from "react";
import Info from "./Info/Info";


function ActivityDescription() {
    const { actDesc, showActDesc, setShowActDesc, setActDesc, defineTypeOfWork } = useContext(SubjectContentContext) as SubConContextType

    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [showInfo, setShowInfo] = useState<boolean>(false)

    return <>
        <div className={
            showActDesc ? s.showActDesc : s.hideActDesc
        }>
            <div className={showActDesc ? s.showActDescBox : s.hideActDescBox}>
                <h2>
                    Description
                    <div className={s.right}>
                        <div className={s.stateWrapper}>
                            <button className={s.showButton}
                                onClick={() => {
                                    showMenu ? setShowMenu(false) : setShowMenu(true)
                                }}>
                                <i className="fa fa-navicon"></i>
                            </button>
                            <div className={showMenu ? s.choices : s.hideChoices}>
                                <button
                                    className={actDesc?.status == "completed" ? s.highlight : s.unhighlight}
                                    onClick={() => {
                                        if (actDesc) {
                                            defineTypeOfWork(false, "completed")
                                        }
                                    }}>
                                    Finish
                                </button>
                                <button
                                    className={actDesc?.status == "pending" ? s.highlight : s.unhighlight}
                                    onClick={() => {
                                        if (actDesc) {
                                            defineTypeOfWork(false, "pending")
                                        }
                                    }}>
                                    Pending
                                </button>
                                <button
                                    className={s.showInfo}
                                    onClick={() => {
                                        showInfo ? setShowInfo(false) : setShowInfo(true)
                                    }}>
                                    <i className="fa fa-list-alt"></i>

                                    <Info showInfo={showInfo} setShowInfo={setShowInfo} />
                                </button>
                            </div>
                        </div>
                        <button
                            onClick={() => { setShowActDesc(false), setActDesc(null) }}
                            className={s.hideButton}>X</button>
                    </div>
                </h2>
                <h3>{actDesc?.title}</h3>
                <p>{actDesc?.description}</p>
            </div>
        </div>
    </>
}

export default ActivityDescription
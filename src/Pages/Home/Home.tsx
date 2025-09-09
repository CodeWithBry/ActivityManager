import CurrentTasks from "./CurrentTasks/CurrentTasks"
import SubShortcut from "./SubShortcut/SubShortcut"
import s from "./Home.module.css"
import { useContext, useEffect, useState } from "react";
import { context } from "../../App";
import type { ContextType } from "../../Interfaces/interface";

function Home() {
  const { pageDetector, userObject } = useContext(context) as ContextType

  const [fullView, setFullView] = useState<boolean>(false)

  useEffect(() => {
    userObject?.uid && pageDetector ?
      pageDetector(null, 0, false): 
      pageDetector(0, null, true) 
  }, []);

  return (
    <div className={s.homeWrapper}>
      <div className={fullView ? `${s.classSched} ${s.fullView}` : `${s.classSched}`} onClick={()=>{fullView ? setFullView(false) : setFullView(true)}}>
        <button className={fullView ? s.closeButton : s.hideCloseButton}>X</button>
        <h2> <i className="fa fa-calendar-check-o"> </i>Classroom Schedule</h2>
        <img src="./class_sched.png" alt="" />
      </div>
      <CurrentTasks />
      <SubShortcut />
    </div>
  )
}

export default Home
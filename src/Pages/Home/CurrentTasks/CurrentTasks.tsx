import { useContext, useEffect, useState } from "react";
import s from "./CurrentTasks.module.css"
import type { ContextType, SchoolActivities } from "../../../Interfaces/interface";
import { context } from "../../../App";
import { useNavigate } from "react-router-dom";

function CurrentTasks() {
  const navigation = useNavigate()
  const { userData } = useContext(context) as ContextType
  const [activities, setActivities] = useState<SchoolActivities[] | null>(null)
  const [assignments, setAssignments] = useState<SchoolActivities[] | null>(null)
  const [projects, setProjects] = useState<SchoolActivities[] | null>(null)
  const [exams, setExams] = useState<SchoolActivities[] | null>(null)

  function handleClick(task: SchoolActivities) {
    navigation(`/subjects/${task.subject}#${task.typeOfWork}#${task.id}`)
  }

  useEffect(() => {
    if (userData) {
      setActivities(userData.activities);
      setAssignments(userData.assignments);
      setProjects(userData.petas);
      setExams(userData.exams)
    }
  }, [userData])

  return (
    <div className={s.currentWrapper} >
      <h2> <i className="	fa fa-pencil"></i> Current Tasks</h2>
      <div className={s.currentBox}>
        {
          activities?.filter(act => act.status == "pending").length != 0 ?
            <div className={s.curActBox}>
              <h3>
                Current Activities
              </h3>
              <ul className={s.wrapper}>
                {activities?.map((act) => {
                  if (act.status == "pending") return <li key={Math.random() * 1} onClick={() => { handleClick(act) }}> <i className="fa fa-thumb-tack"></i> {act.subject}: {act.title}</li>
                })}
              </ul>
            </div> :
            <div className={s.curActBox}>
              <h3>
                Current Activities
              </h3>
              <ul className={s.wrapper}> <li>There are no activities.</li></ul>
            </div>
        }

        {
          assignments?.filter(act => act.status == "pending").length != 0 ?
            <div className={s.curActBox}>
              <h3>
                Current Assignments
              </h3>
              <ul className={s.wrapper}>
                {assignments?.map((act) => {
                  if (act.status == "pending") return <li key={Math.random() * 1} onClick={() => { handleClick(act) }}> <i className="fa fa-thumb-tack"></i> {act.subject}: {act.title}</li>
                })}
              </ul>
            </div> :
            <div className={s.curActBox}>
              <h3>
                Current Assignments
              </h3>
              <ul className={s.wrapper}> <li>There are no activities.</li></ul>
            </div>
        }

        {
          projects?.filter(act => act.status == "pending").length != 0 ?
            <div className={s.curActBox}>
              <h3>
                Current Projects
              </h3>
              <ul className={s.wrapper}>
                {projects?.map((act) => {
                  if (act.status == "pending") return <li key={Math.random() * 1} onClick={() => { handleClick(act) }}> <i className="fa fa-thumb-tack"></i> {act.subject}: {act.title}</li>
                })}
              </ul>
            </div> :
            <div className={s.curActBox}>
              <h3>
                Current Projects
              </h3>
              <ul className={s.wrapper}> <li>There are no activities.</li></ul>
            </div>
        }

        {
          exams?.filter(act => act.status == "pending").length != 0 ?
            <div className={s.curActBox}>
              <h3>
                Current Exams
              </h3>
              <ul className={s.wrapper}>
                {exams?.map((act) => {
                  if (act.status == "pending") return <li key={Math.random() * 1} onClick={() => { handleClick(act) }}> <i className="fa fa-thumb-tack"></i> {act.subject}: {act.title}</li>
                })}
              </ul>
            </div> :
            <div className={s.curActBox}>
              <h3>
                Current Exams
              </h3>
              <ul className={s.wrapper}> <li>There are no activities.</li></ul>
            </div>
        }
      </div>
    </div>
  )
}

export default CurrentTasks
import type { Day } from '../../../Interfaces/interface'
import s from './Days.module.css'

interface Props {
  day: Day;
}

export default function Days({ day }: Props) {
  return (
    <div className={s.daysWrapper}>
      <div className={s.dayCard}>
        <div className={s.dayHeader}>{day.day}</div>
        <div className={s.dayContent}>
          <div className={s.activities}>
            <h2>Activities</h2>
            <ul className={s.actWrapper}>
              {day.Activities.map(act => <li key={act.id}> <i className='fa fa-caret-right'></i> {act.subject}: {act.title + act.status}</li>)}
            </ul>
          </div>
          <div className={s.activities}>
            <h2>Group Activity</h2>
            <ul className={s.actWrapper}>
              {day.Groupings.map(act => <li key={act.id}> <i className='fa fa-caret-right'></i> {act.subject}: {act.title + act.status}</li>)}
            </ul>
          </div>
          <div className={s.activities}>
            <h2>Assignment</h2>
            <ul className={s.actWrapper}>
              {day.Assignment.map(act => <li key={act.id}> <i className='fa fa-caret-right'></i> {act.subject}: {act.title + act.status}</li>)}
            </ul>
          </div>
          <div className={s.activities}>
            <h2>Projects</h2>
            <ul className={s.actWrapper}>
              {day.Projects.map(act => <li key={act.id}> <i className='fa fa-caret-right'></i> {act.subject}: {act.title + act.status}</li>)}
            </ul>
          </div>
          <div className={s.activities}>
            <h2>Exams</h2>
            <ul className={s.actWrapper}>
              {day.Exams.map(act => <li key={act.id}> <i className='fa fa-caret-right'></i> {act.subject}: {act.title + act.status}</li>)}
            </ul>
          </div>
        </div>
        <button className={s.openDay}>Open</button>
      </div>
    </div>
  )
}









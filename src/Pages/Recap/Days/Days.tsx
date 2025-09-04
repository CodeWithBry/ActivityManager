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
              {day.Activities.length != 0 ? 
                day.Activities.map(act => 
                  <li key={act.id}>
                    <i className='fa fa-caret-right'></i> <span>{act.subject}</span>: {act.title + act.status}
                  </li>) : 
                <li>There are no Activity</li>}
            </ul>
          </div>
          <div className={s.activities}>
            <h2>Group Activity</h2>
            <ul className={s.actWrapper}>
              {day.Groupings.length != 0 ? day.Groupings.map(act => 
                <li key={act.id}>
                  <i className='fa fa-caret-right'></i> <span>{act.subject}</span>: {act.title + act.status}
                </li>) : 
              <li>There are no Group Activity</li>}
            </ul>
          </div>
          <div className={s.activities}>
            <h2>Assignment</h2>
            <ul className={s.actWrapper}>
              {day.Assignment.length != 0 ?  day.Assignment.map(act => 
                <li key={act.id}>
                  <i className='fa fa-caret-right'></i> <span>{act.subject}</span>: {act.title + act.status}
                </li>) : 
              <li>There are no Assignment</li>}
            </ul>
          </div>
          <div className={s.activities}>
            <h2>Projects</h2>
            <ul className={s.actWrapper}>
              {day.Projects.length != 0 ? day.Projects.map(act => 
                <li key={act.id}>
                  <i className='fa fa-caret-right'></i> <span>{act.subject}</span>: {act.title + act.status}
                </li>) : 
              <li>There are no Project</li>}
            </ul>
          </div>
          <div className={s.activities}>
            <h2>Exams</h2>
            <ul className={s.actWrapper}>
              {day.Exams.length != 0 ? day.Exams.map(act => 
                <li key={act.id}>
                  <i className='fa fa-caret-right'></i> <span>{act.subject}</span>: {act.title + act.status}
                </li>) : 
              <li>There are no Exam</li>}
            </ul>
          </div>
        </div>
        <button className={s.openDay}>Open</button>
      </div>
    </div>
  )
}









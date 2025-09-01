import { Link } from 'react-router-dom';
import type { ContextType, SchoolActivities, SubjectContext, SubjectsType } from '../../../Interfaces/interface';
import s from './Subject.module.css'
import { useContext, useEffect, useState } from 'react';
import { context } from '../../../App';
import { SubjectsContext } from '../Subjects';
import SkeletonSubject from './SkeletonSubject/SkeletonSubject';
type Props = {
    subData: SubjectsType;
}

function Subject({ subData }: Props) {
    const { userData } = useContext(context) as ContextType
    const { selectedQuarter } = useContext(SubjectsContext) as SubjectContext

    const [numberOfActivities, setNumberOfActivities] = useState(0)
    const [totalFinishedActivities, setTotalFinishedActivities] = useState(0)
    const [calcPerAct, setCalcPerAct] = useState(0)

    const [numberOfAssignment, setNumberOfAssignment] = useState(0)
    const [totalFinishedAssignment, setTotalFinishedAssignment] = useState(0)
    const [calcPerAss, setCalcPerAss] = useState(0)

    const [numberOfProjects, setNumberOfProjects] = useState(0)
    const [totalFinishedProjects, setTotalFinishedProjects] = useState(0)
    const [calcPerProj, setCalcPerProj] = useState(0)

    const [activities, setActivities] = useState<SchoolActivities[] | null>()
    const [assignments, setAssignments] = useState<SchoolActivities[] | null>()
    const [projects, setProjects] = useState<SchoolActivities[] | null>()

    useEffect(() => {
        const act = numberOfActivities > 0 ? (totalFinishedActivities / numberOfActivities) * 100 : 0
        const ass = numberOfAssignment > 0 ? (totalFinishedAssignment / numberOfAssignment) * 100 : 0
        const proj = numberOfProjects > 0 ? (totalFinishedProjects / numberOfProjects) * 100 : 0

        setCalcPerAct(act)
        setCalcPerAss(ass)
        setCalcPerProj(proj)
    }, [
        numberOfActivities, totalFinishedActivities,
        numberOfAssignment, totalFinishedAssignment,
        numberOfProjects, totalFinishedProjects
    ])

    useEffect(() => {
        if (selectedQuarter) {
            const numOfAct = activities?.filter(act => act.subject == subData.subjectNameAbbreviation && selectedQuarter == act.quarter)?.length
            const numOfAss = assignments?.filter(act => act.subject == subData.subjectNameAbbreviation && selectedQuarter == act.quarter)?.length
            const numOfProj = projects?.filter(act => act.subject == subData.subjectNameAbbreviation && selectedQuarter == act.quarter)?.length
            const totalFinishedAct = activities?.filter(act => act.status == "completed" && act.subject == subData.subjectNameAbbreviation && selectedQuarter == act.quarter)?.length
            const totalFinishedAss = assignments?.filter(act => act.status == "completed" && act.subject == subData.subjectNameAbbreviation && selectedQuarter == act.quarter)?.length
            const totalFinishedProj = projects?.filter(act => act.status == "completed" && act.subject == subData.subjectNameAbbreviation && selectedQuarter == act.quarter)?.length
            console.log(activities)
            setNumberOfActivities(numOfAct ? numOfAct : 0)
            setTotalFinishedActivities(totalFinishedAct ? totalFinishedAct : 0)
            setNumberOfAssignment(numOfAss ? numOfAss : 0)
            setTotalFinishedAssignment(totalFinishedAss ? totalFinishedAss : 0)
            setNumberOfProjects(numOfProj ? numOfProj : 0)
            setTotalFinishedProjects(totalFinishedProj ? totalFinishedProj : 0)
        }
    }, [selectedQuarter, activities, assignments, projects])

    useEffect(() => {
        if (userData) {
            setActivities(userData.activities)
            setAssignments(userData.assignments)
            setProjects(userData.petas)
        }
    }, [userData])

    if (activities) {
        return (
            <div className={`${s.subjectBox}`} >
                <div className={s.topWrapper}>
                    <h1 className={s.subjectName}>{subData.subjectNameAbbreviation}</h1>
                </div>

                <div className={s.progressWrapper}>
                    <div className={`${s.actWrapper} ${s.progresses}`}>
                        <div className={s.top}>
                            <p>Activities:</p>
                            <p className={s.completed}>{
                                numberOfActivities >= totalFinishedActivities && numberOfActivities != 0
                                    ? totalFinishedActivities + " out of " + numberOfActivities + " is Completed" : "No Activity"}
                            </p>
                        </div>
                        <div className={s.bottom}>
                            <div className={s.barWrapper}>
                                <div
                                    className={s.bar}
                                    style={{
                                        width: `${numberOfActivities >= totalFinishedActivities && numberOfActivities != 0
                                            ? calcPerAct : 100}%`
                                    }}>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={`${s.assignWrapper} ${s.progresses}`}>
                        <div className={s.top}>
                            <p>Assignments:</p>
                            <p className={s.completed}>{numberOfAssignment >= totalFinishedAssignment && numberOfAssignment != 0
                                ? totalFinishedAssignment + " out of " + numberOfAssignment + " is Completed" : "No Assignment"}
                            </p>
                        </div>
                        <div className={s.bottom}>
                            <div className={s.barWrapper}>
                                <div className={s.bar} style={{
                                    width: `${numberOfAssignment >= totalFinishedAssignment && numberOfAssignment != 0
                                        ? calcPerAss : 100}%`
                                }}>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${s.projWrapper} ${s.progresses}`}>
                        <div className={s.top}>
                            <p>Performance Tasks:</p>
                            <p className={s.completed}>{numberOfProjects >= totalFinishedProjects && numberOfProjects != 0
                                ? totalFinishedProjects + " out of " + numberOfProjects + " is Completed" : "No Projects"}
                            </p>
                        </div>
                        <div className={s.bottom}>
                            <div className={s.barWrapper}>
                                <div className={s.bar} style={{
                                    width: `${numberOfProjects >= totalFinishedProjects && numberOfProjects != 0
                                        ? calcPerProj : 100}%`
                                }}>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <Link
                    to={'/subjects/' + subData.subjectNameAbbreviation}
                    className={s.openSubject}>
                    Open Subject
                </Link>
            </div>
        )
    } else {
        return <SkeletonSubject />
    }
}

export default Subject
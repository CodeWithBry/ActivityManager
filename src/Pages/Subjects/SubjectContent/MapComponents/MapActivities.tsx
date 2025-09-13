import { SubjectContentContext } from '../SubjectContent';
import type { ContextType, SubConContextType } from '../../../../Interfaces/interface';
import Activity from '../Activity/Activity';
import { useContext, useMemo } from 'react';
import s from "../Components/Components.module.css";
import ActivitySkeleton from '../ActivitySkeleton/ActivitySkeleton';
import { context } from '../../../../App';

type Props = {
    typeOfWork: string;
    sortingType: string;
};

export default function MapActivities({ typeOfWork, sortingType }: Props) {
    const { activities, assignments, projects, selectedChoice,
        handleRightClick, setActDesc, exams } = useContext(SubjectContentContext) as SubConContextType;
    const { userData } = useContext(context) as ContextType

    const data = typeOfWork === "Activity" ? activities || [] :
        typeOfWork === "Assignment" ? assignments || [] :
            typeOfWork === "Project" ? projects || [] : exams || []

    const sortedData = useMemo(() => {
        let sorted = [...data];

        if (sortingType === "Newest-Oldest") {
            sorted.sort((a, b) => b.timeCreated - a.timeCreated);
        } else if (sortingType === "Oldest-Newest") {
            sorted.sort((a, b) => a.timeCreated - b.timeCreated);
        } else if (sortingType === "A-Z") {
            sorted.sort((a, b) => (a.title || "").localeCompare(b.title || ""));
        } else if (sortingType === "Z-A") {
            sorted.sort((a, b) => (b.title || "").localeCompare(a.title || ""));
        } else if (sortingType === "Pending") {
            sorted = sorted.filter(act => act.status === "pending");
        } else if (sortingType === "Completed") {
            sorted = sorted.filter(act => act.status === "completed");
        }

        const completeSorted = sorted.filter((task) => task.quarter === selectedChoice.quarter &&
            task.semester === selectedChoice.sem
        );

        return completeSorted
    }, [data, sortingType, selectedChoice]);

    if (!userData) {
        return <ActivitySkeleton count={6} />
    } else if (userData && sortedData.length != 0) {
        return <>
            {sortedData.map((task) => (
                <Activity
                    key={task.id || task.timeCreated}
                    task={task}
                    handleRightClick={handleRightClick}
                    setActDesc={setActDesc}
                />
            ))}
        </>
    } else if (userData && sortedData.length == 0) {
        return <h2 className={s.noActivities}>
            {typeOfWork === "Activity" && "There are no Activities!"}
            {typeOfWork === "Assignment" && "There are no Assignments!"}
            {typeOfWork === "Project" && "There are no Projects!"}
            {typeOfWork === "Exam" && "There are no Exam!"}
        </h2>
    }
}


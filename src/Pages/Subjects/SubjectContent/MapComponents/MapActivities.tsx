import { SubjectContentContext } from '../SubjectContent'
import type { SubConContextType } from '../../../../Interfaces/interface'
import Activity from '../Activity/Activity'
import { useContext } from 'react'
import s from "../Components/Components.module.css"

type Props = {
    typeOfWork: string,
    sortingType: string
}

export default function MapActivities({ typeOfWork, sortingType }: Props) {
    const { activities, assignments, projects, selectedChoice,
        handleRightClick, setActDesc } = useContext(SubjectContentContext) as SubConContextType

    if (typeOfWork == "Activity") {
        let sortedActivities = [...(activities || [])];

        if (sortingType === "Newest-Oldest") {
            sortedActivities.sort((a, b) => b.timeCreated - a.timeCreated);
        } else if (sortingType === "Oldest-Newest") {
            sortedActivities.sort((a, b) => a.timeCreated - b.timeCreated);
        } else if (sortingType === "A-Z") {
            sortedActivities.sort((a, b) =>
                (a.title || "").localeCompare(b.title || "")
            );
        } else if (sortingType === "Z-A") {
            sortedActivities.sort((a, b) =>
                (b.title || "").localeCompare(a.title || "")
            );
        } else if (sortingType == "Pending") {
            sortedActivities = sortedActivities.filter(act => act.status == "pending")
        } else if (sortingType == "Completed") {
            sortedActivities = sortedActivities.filter(act => act.status == "completed")
        }

        sortedActivities = sortedActivities.filter(act => act.quarter == selectedChoice.quarter)
        console.log(sortedActivities)
        if (sortedActivities.length != 0) return (
            <>
                {sortedActivities
                    .filter(
                        (task) =>
                            task.quarter === selectedChoice.quarter &&
                            task.semester === selectedChoice.sem
                    )
                    .map((task) => (
                        <Activity
                            key={task.id || task.timeCreated}
                            task={task}
                            handleRightClick={handleRightClick}
                            setActDesc={setActDesc}
                        />
                    ))}
            </>
        );


        return <h2 className={s.noActivities}>There are no Activites!</h2>
    }

    else if (typeOfWork == "Assignment") {
        let sortedAssignments = [...(assignments || [])];

        if (sortingType === "Newest-Oldest") {
            sortedAssignments.sort((a, b) => b.timeCreated - a.timeCreated);
        } else if (sortingType === "Oldest-Newest") {
            sortedAssignments.sort((a, b) => a.timeCreated - b.timeCreated);
        } else if (sortingType === "A-Z") {
            sortedAssignments.sort((a, b) =>
                (a.title).localeCompare(b.title)
            );
        } else if (sortingType === "Z-A") {
            sortedAssignments.sort((a, b) =>
                (b.title).localeCompare(a.title)
            );
        } else if (sortingType == "Pending") {
            sortedAssignments = sortedAssignments.filter(act => act.status == "pending")
        } else if (sortingType == "Completed") {
            sortedAssignments = sortedAssignments.filter(act => act.status == "completed")
        }

        sortedAssignments = sortedAssignments.filter(act => act.quarter == selectedChoice.quarter)
        if (sortedAssignments.length != 0) return (
            <>
                {sortedAssignments
                    .filter(
                        (task) =>
                            task.quarter === selectedChoice.quarter &&
                            task.semester === selectedChoice.sem
                    )
                    .map((task) => {
                        console.log(task.timeCreated)
                        return (<Activity
                            key={task.id || task.timeCreated}
                            task={task}
                            handleRightClick={handleRightClick}
                            setActDesc={setActDesc}
                        />
                        )
                    })}
            </>
        );


        return <h2 className={s.noActivities}>There are no Assignments!</h2>
    }

    else if (typeOfWork == "Project") {
        let sortedProjects = [...(projects || [])];

        if (sortingType === "Newest-Oldest") {
            sortedProjects.sort((a, b) => b.timeCreated - a.timeCreated);
        } else if (sortingType === "Oldest-Newest") {
            sortedProjects.sort((a, b) => a.timeCreated - b.timeCreated);
        } else if (sortingType === "A-Z") {
            sortedProjects.sort((a, b) =>
                (a.title || "").localeCompare(b.title || "")
            );
        } else if (sortingType === "Z-A") {
            sortedProjects.sort((a, b) =>
                (b.title || "").localeCompare(a.title || "")
            );
        } else if (sortingType == "Pending") {
            sortedProjects = sortedProjects.filter(act => act.status == "pending")
        } else if (sortingType == "Completed") {
            sortedProjects = sortedProjects.filter(act => act.status == "completed")
        }

        sortedProjects = sortedProjects.filter(act => act.quarter == selectedChoice.quarter)
        if (sortedProjects.length != 0) return (
            <>
                {sortedProjects
                    .filter(
                        (task) =>
                            task.quarter === selectedChoice.quarter &&
                            task.semester === selectedChoice.sem
                    )
                    .map((task) => (
                        <Activity
                            key={task.id || task.timeCreated}
                            task={task}
                            handleRightClick={handleRightClick}
                            setActDesc={setActDesc}
                        />
                    ))}
            </>
        );

        return <h2 className={s.noActivities}>There are no Projects!</h2>
    }
}
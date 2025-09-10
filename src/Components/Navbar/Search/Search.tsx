import { useContext, useEffect, useRef, useState, type Dispatch, type SetStateAction } from "react";
import s from "./Search.module.css"
import type { ContextType, Quarter, SchoolActivities } from "../../../Interfaces/interface";
import { context } from "../../../App";
import Hamburger from "./Hamburger";
import { useNavigate } from "react-router-dom";

interface Props {
    showSearch: boolean;
    setShowSearch: Dispatch<SetStateAction<boolean>>;

}

function Search({ setShowSearch, showSearch }: Props) {
    const { userData } = useContext(context) as ContextType
    const searchInput = useRef<HTMLInputElement | null>(null)
    const navigation = useNavigate()

    const [showChoices, setShowChoices] = useState<boolean>(false)
    const [showSimplifyMenus, setShowSimplifyMenus] = useState<boolean>(false)

    const [allData, setAllData] = useState<SchoolActivities[]>([])
    const [filteredData, setFilteredData] = useState<SchoolActivities[]>([])
    const [selectedQuarter, setSelectedQuarter] = useState<Quarter | null>({ quarter: "1st", sem: "1st" })
    const [quarterAndSemChoices, setQuarterAndSemChoices] = useState<Quarter[]>([
        { quarter: "1st", sem: "1st" },
        { quarter: "2nd", sem: "1st" },
        { quarter: "3rd", sem: "2nd" },
        { quarter: "4th", sem: "2nd" },
    ])
    const [sortingType, setSortingType] = useState<string>("")

    function searchAndFilter() {
        let sorted = [...allData].filter(act => act.quarter == selectedQuarter?.quarter)
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

        const getData = sorted.filter(
            (task) =>
                task.quarter === selectedQuarter?.quarter &&
                task.semester === selectedQuarter?.sem
        ).filter(act => { if (searchInput.current) return act.description.toLowerCase().includes(searchInput.current.value.toLocaleLowerCase()) || act.title.toLowerCase().includes(searchInput.current.value.toLocaleLowerCase()) });

        setFilteredData(getData)
        const filt = getData
        console.log(filt)
    }

    function handleClick(task: SchoolActivities) {
        navigation(`/subjects/${task.subject}#${task.typeOfWork}#${task.id}`)
    }

    useEffect(() => {
        if (userData) {
            setAllData([...userData.activities, ...userData.assignments, ...userData.petas, ...userData.exams])
        }
    }, [userData])

    useEffect(() => {
        if (selectedQuarter && sortingType) {
            searchAndFilter()
        }
    }, [selectedQuarter, sortingType])

    return (
        <>
            <div className={!showSearch ? s.hideSearch : s.searchesWrapper}>
                <div className={s.top}>
                    <div className={s.mainNav}>
                        <h1 >Search Tab</h1>
                        <div className={s.right}>
                            <div className={s.sortWrapper}>
                                <button
                                    className={s.wrapMenusButton}
                                    onClick={() => {
                                        showSimplifyMenus ? setShowSimplifyMenus(false) : setShowSimplifyMenus(true)
                                    }}>

                                    <i className="fa fa-bars"></i>
                                </button>
                                <div className={showSimplifyMenus ? s.wrap : s.hideWrap}>
                                    <div
                                        className={s.selectedQuarter}>
                                        <button
                                            onClick={() => {
                                                showChoices ? setShowChoices(false) : setShowChoices(true)
                                            }}>
                                            {selectedQuarter?.sem} Sem: {selectedQuarter?.quarter} Quarter
                                            <i className={showChoices ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </button>

                                        <div
                                            className={showChoices ?
                                                `${s.choicesBox} ${s.showChoices}` :
                                                `${s.choicesBox} ${s.hideChoices}`}>
                                            {
                                                quarterAndSemChoices.map((choice, index) => {
                                                    return <button
                                                        key={Math.random() * 1}
                                                        onClick={() => {
                                                            setQuarterAndSemChoices((prev: Quarter[]) => prev.map((cho, i) => {
                                                                if (index == i) setSelectedQuarter(cho)
                                                                searchAndFilter()
                                                                return cho
                                                            }))
                                                            setShowChoices(false)
                                                        }}>
                                                        {choice.sem} Sem: {choice.quarter} Quarter
                                                    </button>
                                                })
                                            }
                                        </div>
                                    </div>
                                    <Hamburger setSortingType={setSortingType} />
                                </div>
                            </div>
                            <button onClick={(e) => { e.stopPropagation(), setShowSearch(false) }}> Close </button>
                        </div>
                    </div>
                    <div className={s.searchWrapper}>
                        <i className="fa fa-search" id={s.searchLogo}></i>
                        <input
                            type="text"
                            id={s.searchInput}
                            ref={searchInput}
                            onKeyDown={(e) => {
                                e.stopPropagation()

                                if (e.key == "Enter" && searchInput?.current?.value.length != 0) searchAndFilter()
                            }} placeholder="Search..." />
                        <button
                            onClick={(e) => {
                                e.stopPropagation()
                                searchAndFilter()
                            }}
                            id={s.searchButton}>
                            Search
                        </button>
                    </div>
                </div>
                <div className={s.searches}>
                    <div className={s.result}>{
                        filteredData?.map((act) => <button key={Math.random() * 1} className={s.links} onClick={(e) => {
                            e.stopPropagation(), handleClick(act), setShowSearch(false)
                        }}>
                            <i className="fa fa-arrow-right"> </i> {act.description || act.title}
                        </button>)
                    }</div>
                </div>
            </div>
        </>
    )
}

export default Search
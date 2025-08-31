import { Link, useLocation, useNavigate } from "react-router-dom"
import s from "./SubjectContent.module.css"
import { createContext, useContext, useEffect, useRef, useState, type MouseEvent } from "react";
import type { ContextType, MenuPosition, Quarter, SchoolActivities, SubjectContext, SubjectsType } from "../../../Interfaces/interface";
import ActivityDescription from "./ActivityDescription/ActivityDescription";
import { context } from "../../../App";
import AddPrompt from "./AddPrompt/AddPrompt";
import MenuBox from "./Components/MenuBox";
import Hamburger from "./Components/Hamburger";
import AddActivity from "./Components/AddActivity";
import MapActivities from "./MapComponents/MapActivities";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../../Firebase/Firebase";
import { SubjectsContext } from "../Subjects";

export const SubjectContentContext = createContext({})


interface Props {
  params: any;
  subjects: SubjectsType[];
}

interface SelectAll {
  Activity: boolean;
  Assignment: boolean;
  Project: boolean;
}

function SubjectContent({ params, subjects }: Props) {
  const { userData, userObject, setUserData } = useContext(context) as ContextType
  const { selectedQuarter, selectedSemester } = useContext(SubjectsContext) as SubjectContext
  const menu = useRef<HTMLDivElement | null>(null)
  const navigation = useNavigate()
  const location = useLocation()

  const [activities, setActivities] = useState<SchoolActivities[] | null>(null)
  const [assignments, setAssignments] = useState<SchoolActivities[] | null>(null)
  const [projects, setProjects] = useState<SchoolActivities[] | null>(null)

  const [showChoices, setShowChoices] = useState<boolean>(false)
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showActDesc, setShowActDesc] = useState<boolean>(false)
  const [showAddPrompt, setShowAddPrompt] = useState<boolean>(false)
  const [canSelect, setCanSelect] = useState<boolean>(false)
  const [showSimplifyMenus, setShowSimplifyMenus] = useState<boolean>(false)

  const [typeOfWork, setTypeOfWork] = useState<string>("")
  const [quarter, setQuarter] = useState<string>("2nd")
  const [semester, setSemester] = useState<string>("1st")

  const [actDesc, setActDesc] = useState<SchoolActivities | null>(null)
  const [menuPos, setMenuPos] = useState<MenuPosition>({ x: 0, y: 0 })
  const [quarterAndSemChoices, setQuarterAndSemChoices] = useState<Quarter[]>([
    { quarter: "1st", sem: "1st" },
    { quarter: "2nd", sem: "1st" },
    { quarter: "3rd", sem: "2nd" },
    { quarter: "4th", sem: "2nd" },
  ])
  const [selectedChoice, setSelectedChoice] = useState<Quarter>({ quarter: "2nd", sem: "1st" })
  const [selectAll, setSelectAll] = useState<SelectAll>({
    Activity: false,
    Assignment: false,
    Project: false
  })
  const [sortingType, setSortingType] = useState<string>("Pending")

  function handleRightClick(e: MouseEvent<HTMLDivElement>, task: SchoolActivities | null, contextMenu: boolean) {
    if (contextMenu) { e.preventDefault() }
    setShowMenu(true)
    setMenuPos({ x: e.clientX, y: e.clientY })
    if (task) {
      setTypeOfWork(task.typeOfWork)
      setActDesc(task)
    }
  }

  function defineTypeOfWork(setToNull: boolean, status: "pending" | "completed") {
    switch (typeOfWork) {
      case "Activity":
        setUserData(prev => {
          if (prev) {
            prev?.activities.map((origAct) => {
              activities?.map((act) => {
                if (origAct.id == act.id) {
                  if (act.isSelected || actDesc?.id == act.id) {
                    origAct.status = status
                    setActDesc(setToNull ? null : act)
                  }
                }
              })
              return origAct
            })
            saveToDatabase(prev.activities, "activities")
            setSelectAll(prev => ({ ...prev, Activity: false }))
            return prev
          }

          return null
        })
        break;
      case "Assignment":
        setUserData(prev => {
          if (prev) {
            prev?.assignments.map((origAct) => {
              assignments?.map((act) => {
                if (origAct.id == act.id) {
                  if (act.isSelected || actDesc?.id == act.id) {
                    origAct.status = status
                    setActDesc(setToNull ? null : act)
                  }
                }
              })
              return origAct
            })
            saveToDatabase(prev.assignments, "petas")
            setSelectAll(prev => ({ ...prev, Assignment: false }))
            return prev
          }

          return null
        })
        break;
      case "Project":
        setUserData(prev => {
          if (prev) {
            prev?.petas.map((origAct) => {
              projects?.map((act) => {
                if (origAct.id == act.id) {
                  if (act.isSelected || actDesc?.id == act.id) {
                    origAct.status = status
                    setActDesc(setToNull ? null : act)
                  }
                }
              })
              return origAct
            })
            saveToDatabase(prev.petas, "petas")
            setSelectAll(prev => ({ ...prev, Project: false }))
            return prev
          }

          return null
        })
        break;
    }

  }

  function handleSelectAll(typeOfWorkArgs: string, bool: boolean) {
    if (canSelect) switch (typeOfWorkArgs) {
      case "Activity":
        setActivities(prev => prev ? prev?.map((acts) => ({ ...acts, isSelected: acts.quarter == quarter ? bool : false })) : [])
        break;
      case "Assignment":
        setAssignments(prev => prev ? prev?.map((acts) => ({ ...acts, isSelected: acts.quarter == quarter ? bool : false })) : [])
        break;
      case "Project":
        setProjects(prev => prev ? prev?.map((acts) => ({ ...acts, isSelected: acts.quarter == quarter ? bool : false })) : [])
        break;
      case "All":
        setActivities(prev => prev ? prev?.map((acts) => ({ ...acts, isSelected: acts.quarter == quarter ? bool : false })) : [])
        setAssignments(prev => prev ? prev?.map((acts) => ({ ...acts, isSelected: acts.quarter == quarter ? bool : false })) : [])
        setProjects(prev => prev ? prev?.map((acts) => ({ ...acts, isSelected: acts.quarter == quarter ? bool : false })) : [])
        break;
    }
  }


  async function saveToDatabase(val: SchoolActivities[], typeOfWork: string) {

    try {
      if (val && typeOfWork) {
        const docRef = doc(firestore, "McCarthy", `${userObject?.uid}`)
        await updateDoc(docRef, {
          [typeOfWork]: val
        })
      }
    } catch (error) {

    }
  }

  // ********* EFFECTS ***************
  useEffect(() => {
    if (userData?.activities != null || userData?.assignments != null || userData?.petas != null) {
      setActivities(userData.activities.filter(act => act.subject === params));
      setAssignments(userData.assignments.filter(act => act.subject === params));
      setProjects(userData.petas.filter(act => act.subject === params));
    }
  }, [userData, params])

  useEffect(() => {
    setQuarter(selectedChoice.quarter)
    setSemester(selectedChoice.sem)
  }, [selectedChoice])

  useEffect(() => {
    setSelectedChoice({ quarter: selectedQuarter, sem: selectedSemester })
  }, [selectedQuarter, selectedSemester])

  useEffect(() => {
    if (location.hash && activities != null) {
      const parts = location.hash.substring(1).split("#");
      // Example: "#Project#0.32339428806677273" → ["Project", "0.32339428806677273"]
      const [type, activityId] = parts;

      if (type) {
        const typeEl = document.getElementById(type);
        typeEl?.scrollIntoView({ behavior: "smooth" });
      }

      if (activityId) {
        const activityEl = document.getElementById(activityId);
        activityEl?.scrollIntoView({ behavior: "smooth" });


        switch (type) {
          case "Activity":
            activities?.map((acts) => {
              if (acts.id == activityId) {
                setSelectedChoice({ quarter: acts.quarter, sem: acts.semester })
              }
            })
            break;
          case "Assignment":
            assignments?.map((acts) => {
              if (acts.id == activityId) {
                setSelectedChoice({ quarter: acts.quarter, sem: acts.semester })
              }
            })
            break;
          case "Project":
            console.log("Project")
            projects?.map((acts) => {
              if (acts.id == activityId) {
                console.log("Project")
                setSelectedChoice({ quarter: acts.quarter, sem: acts.semester })
              }
            })
            break;
        }
        if (activityEl) {
          setTimeout(() => {
            navigation(`/subjects/${params}`)
          }, 1000)
        }

      }
    }
  }, [location, activities]);

  // CONTEXT VARIABLE

  const ContextVariable = {

    canSelect, setCanSelect,
    showMenu, setShowMenu,
    showActDesc,
    showAddPrompt, setShowAddPrompt,

    typeOfWork, setTypeOfWork,

    selectedChoice, setSelectedChoice,
    setShowActDesc,
    actDesc, setActDesc,
    activities, setActivities,
    assignments, setAssignments,
    projects, setProjects,
    quarterAndSemChoices, setQuarterAndSemChoices,

    quarter, setQuarter,
    semester, setSemester,
    params,
    sortingType, setSortingType,

    // Numbers
    menuPos, setMenuPos,

    // Functions 
    defineTypeOfWork,
    handleRightClick,
    handleSelectAll,
    // REF
    menu
  }


  // COMPONENTS

  if (params) return (
    <SubjectContentContext.Provider value={ContextVariable}>
      <div className={s.subConWrapper} onClick={() => { setShowMenu(false) }}>
        <MenuBox task={actDesc} />
        <ActivityDescription />
        <AddPrompt />
        <div className={s.topComponent}>
          <Link to={"/subjects"} id={s.backButt}>Back</Link>
          <h1>{subjects.map((sub) => { return sub.subjectNameAbbreviation.toLowerCase() == params.toLowerCase() ? sub.subjectNameAbbreviation : "" })}</h1>
          <div className={s.right}>
            <button
              className={s.wrapMenusButton}
              onClick={() => {
                showSimplifyMenus ? setShowSimplifyMenus(false) : setShowSimplifyMenus(true)
              }}>

              <i className="fa fa-bars"></i>
            </button>
            <div className={showSimplifyMenus ? s.wrap : s.hideWrap}>
              <div
                className={s.selectedChoice}>
                <button
                  onClick={() => {
                    showChoices ? setShowChoices(false) : setShowChoices(true)
                  }}>
                  {selectedChoice.sem} Sem: {selectedChoice.quarter} Quarter
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
                            if (index == i) setSelectedChoice(cho)
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
              <Hamburger />
            </div>
          </div>
        </div>
        <div className={s.contentWrapper}>
          <div className={`${s.subjectActs} ${s.subjectActivities}`} id="Activity">
            <h1>
              <i className="	fa fa-leanpub"></i>
              <span>Activities</span>
            </h1>
            <div className={s.content}>
              <AddActivity key={Math.random() * 1} type={"Activity"} />
              <button
                className={canSelect ? s.selectAllButton : s.hideSelectAllButton}
                onClick={() => {
                  if (!selectAll.Activity) {
                    handleSelectAll("Activity", true)
                    setSelectAll(prev => ({ ...prev, Activity: true }))
                  } else {
                    handleSelectAll("Activity", false)
                    setSelectAll(prev => ({ ...prev, Activity: false }))
                  }
                }}>
                <i className={selectAll.Activity ? "fa fa-check" : s.transparent}></i>
              </button>
              <MapActivities typeOfWork={"Activity"} sortingType={sortingType} />
            </div>
          </div>
          <div className={`${s.subjectActs} ${s.subjectAssignments}`} id="Assignment">
            <h1>
              <i className="	fa fa-leanpub"></i>
              <span>Assignment</span>
            </h1>
            <div className={s.content}>
              <AddActivity key={Math.random() * 1} type={"Assignment"} />
              <button
                className={canSelect ? s.selectAllButton : s.hideSelectAllButton}
                onClick={() => {
                  if (!selectAll.Assignment) {
                    handleSelectAll("Assignment", true)
                    setSelectAll(prev => ({ ...prev, Assignment: true }))
                  } else {
                    handleSelectAll("Assignment", false)
                    setSelectAll(prev => ({ ...prev, Assignment: false }))
                  }
                }}>
                <i className={selectAll.Assignment ? "fa fa-check" : s.transparent}></i>
              </button>
              <MapActivities typeOfWork={"Assignment"} sortingType={sortingType} />
            </div>
          </div>
          <div className={`${s.subjectActs} ${s.subjectProjects}`} id="Project">
            <h1>
              <i className="	fa fa-leanpub"></i>
              <span>Performance Tasks</span>

            </h1>
            <div className={s.content}>
              <AddActivity key={Math.random() * 1} type={"Project"} />
              <button
                className={canSelect ? s.selectAllButton : s.hideSelectAllButton}
                onClick={() => {
                  if (!selectAll.Project) {
                    handleSelectAll("Project", true)
                    setSelectAll(prev => ({ ...prev, Project: true }))
                  } else {
                    handleSelectAll("Project", false)
                    setSelectAll(prev => ({ ...prev, Project: false }))
                  }
                }}>
                <i className={selectAll.Project ? "fa fa-check" : s.transparent}></i>
              </button>
              <MapActivities typeOfWork={"Project"} sortingType={sortingType} />
            </div>
          </div>
        </div>
      </div>
    </SubjectContentContext.Provider>
  )
}

export default SubjectContent
import { Link, useLocation, useNavigate } from "react-router-dom"
import s from "./SubjectContent.module.css"
import { createContext, useContext, useEffect, useRef, useState, type MouseEvent } from "react";
import type { ContextType, MenuPosition, Quarter, SchoolActivities, SubjectContext, SubjectsType, UserData } from "../../../Interfaces/interface";
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
import EditPrompt from "./EditPrompt/EditPrompt";

export const SubjectContentContext = createContext({})


interface Props {
  params: any;
  subjects: SubjectsType[];
}

interface SelectAll {
  Activity: boolean;
  Assignment: boolean;
  Project: boolean;
  Exam: boolean;
  Groupings: boolean;
}

type ArrayKeys<T> = {
  [K in keyof T]: T[K] extends any[] ? K : never;
}[keyof T];

function SubjectContent({ params, subjects }: Props) {
  const { userData, userObject, setUserData } = useContext(context) as ContextType
  const { selectedQuarter, selectedSemester } = useContext(SubjectsContext) as SubjectContext

  const menu = useRef<HTMLDivElement | null>(null)
  const activitySliderRef = useRef<HTMLDivElement | null>(null)
  const assignmentSliderRef = useRef<HTMLDivElement | null>(null)
  const projectsSliderRef = useRef<HTMLDivElement | null>(null)
  const examsSliderRef = useRef<HTMLDivElement | null>(null)

  const navigation = useNavigate()
  const location = useLocation()

  const [activities, setActivities] = useState<SchoolActivities[] | null>(null)
  const [assignments, setAssignments] = useState<SchoolActivities[] | null>(null)
  const [projects, setProjects] = useState<SchoolActivities[] | null>(null)
  const [exams, setExams] = useState<SchoolActivities[] | null>(null)

  const [showChoices, setShowChoices] = useState<boolean>(false)
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showActDesc, setShowActDesc] = useState<boolean>(false)
  const [showAddPrompt, setShowAddPrompt] = useState<boolean>(false)
  const [canSelect, setCanSelect] = useState<boolean>(false)
  const [showSimplifyMenus, setShowSimplifyMenus] = useState<boolean>(false)
  const [showEdit, setShowEdit] = useState<boolean>(false)

  const [typeOfWork, setTypeOfWork] = useState<string>("")
  const [quarter, setQuarter] = useState<string>("2nd")
  const [semester, setSemester] = useState<string>("1st")
  const [sortingType, setSortingType] = useState<string>("Pending")

  const [actDesc, setActDesc] = useState<SchoolActivities | null>(null)
  const [menuPos, setMenuPos] = useState<MenuPosition>({ x: 0, y: 0 })
  const [selectedChoice, setSelectedChoice] = useState<Quarter>({ quarter: "2nd", sem: "1st" })
  const [selectAll, setSelectAll] = useState<SelectAll>({
    Activity: false,
    Assignment: false,
    Project: false,
    Exam: false,
    Groupings: false
  })
  const [quarterAndSemChoices, setQuarterAndSemChoices] = useState<Quarter[]>([
    { quarter: "1st", sem: "1st" },
    { quarter: "2nd", sem: "1st" },
    { quarter: "3rd", sem: "2nd" },
    { quarter: "4th", sem: "2nd" },
  ])

  function handleRightClick(e: MouseEvent<HTMLDivElement>, task: SchoolActivities | null, contextMenu: boolean) {
    if (contextMenu) { e.preventDefault() }
    const screenX = window.innerWidth
    const screenY = window.innerHeight
    setShowMenu(true)
    setMenuPos({ x: e.clientX + 160 > screenX ? e.clientX - ((e.clientX+160) - screenX ) : e.clientX, 
                 y: e.clientY + 162.86 > screenY ? e.clientY - ((e.clientY+162.86) - screenY ) : e.clientY, })
    if (task) {
      setTypeOfWork(task.typeOfWork)
      setActDesc(task)
    }
  }

  function defineTypeOfWork(
    setToNull: boolean,
    status: "pending" | "completed",
    task?: SchoolActivities
  ) {
    switch (typeOfWork) {
      case "Activity":
        updateActivities("activities");
        break;
      case "Assignment":
        updateActivities("assignments");
        break;
      case "Project":
        updateActivities("petas");
        break;
      case "Exam":
        updateActivities("exams");
        break;

      // Add other cases if needed: "projects", "exams", etc.
    }

    function updateActivities<K extends ArrayKeys<UserData>>(keyInstance: K) {
      setUserData((prev) => {

        if (!prev) return null;
        const updatedList = prev[keyInstance]?.map((origAct) => {

          if (task && task.id === origAct.id) {
            return { ...task, status: status, isSelected: false };
          }

          const localActs = activities?.find((a) => a.id === origAct.id);
          const localAss = assignments?.find((a) => a.id === origAct.id);
          const localProj = projects?.find((a) => a.id === origAct.id);
          const localExams = exams?.find((a) => a.id === origAct.id);

          switch (keyInstance) {
            case "activities":
              if (localActs?.isSelected) {
                origAct.status == "pending" ? setSortingType("Pending") : setSortingType("Completed")
                return { ...origAct, status: status, isSelected: false };
              }
              break;
            case "assignments":
              if (localAss?.isSelected) {
                origAct.status == "pending" ? setSortingType("Pending") : setSortingType("Completed")
                return { ...origAct, status: status, isSelected: false };
              }
              break;
            case "petas":
              if (localProj?.isSelected) {
                origAct.status == "pending" ? setSortingType("Pending") : setSortingType("Completed")
                return { ...origAct, status: status, isSelected: false };
              }
              break;
            case "exams":
              if (localExams?.isSelected) {
                origAct.status == "pending" ? setSortingType("Pending") : setSortingType("Completed")
                return { ...origAct, status: status, isSelected: false };
              }
              break;
          }

          return origAct;
        }) || [];

        // Update actDesc once, not in the loop

        setActDesc(prev => {
          if (!prev || setToNull) {
            return null;
          }
          return { ...prev, status: status }
        })

        // Save to DB and reset selection
        saveToDatabase(updatedList, keyInstance);
        setSelectAll((prevSelect) => ({ ...prevSelect, [typeOfWork]: false }));

        return { ...prev, [keyInstance]: updatedList };
      });
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
      case "Exam":
        setExams(prev => prev ? prev?.map((acts) => ({ ...acts, isSelected: acts.quarter == quarter ? bool : false })) : [])
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

  function slideElement(bool: boolean, defineType: string) {
    switch (defineType) {
      case "Activity":
        var e = activitySliderRef.current
        var scrollAmount = 208
        if (e)
          bool == false ? e.scrollBy({ left: scrollAmount, behavior: 'smooth' }) : e.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        break;
      case "Assignment":
        var e = assignmentSliderRef.current
        var scrollAmount = 208
        if (e)
          bool == false ? e.scrollBy({ left: scrollAmount, behavior: 'smooth' }) : e.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        break;
      case "Project":
        var e = projectsSliderRef.current
        var scrollAmount = 208
        if (e)
          bool == false ? e.scrollBy({ left: scrollAmount, behavior: 'smooth' }) : e.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        break;
      case "Exam":
        var e = examsSliderRef.current
        var scrollAmount = 208
        if (e)
          bool == false ? e.scrollBy({ left: scrollAmount, behavior: 'smooth' }) : e.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        break;
    }
  }

  // ********* EFFECTS ***************
  useEffect(() => {
    if (userData?.activities != null || userData?.assignments != null || userData?.petas != null) {
      setActivities(userData.activities.filter(act => act.subject === params));
      setAssignments(userData.assignments.filter(act => act.subject === params));
      setProjects(userData.petas.filter(act => act.subject === params));
      setExams(userData.exams.filter(act => act.subject === params))
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
            projects?.map((acts) => {
              if (acts.id == activityId) {
                setSelectedChoice({ quarter: acts.quarter, sem: acts.semester })
              }
            })
            break;
          case "Exam":
            exams?.map((acts) => {
              if (acts.id == activityId) {
                setSelectedChoice({ quarter: acts.quarter, sem: acts.semester })
              }
            })
            break;
        }

        setTimeout(() => {
          const activityEl = document.getElementById(activityId);
          if (activityEl) {
            activityEl?.scrollIntoView({ behavior: "smooth" });
            activityEl.style.backgroundColor = "rgb(223, 223, 223)"
            activityEl.style.scale = "1.2"
          }

          if (activityEl) {
            setTimeout(() => {
              navigation(`/subjects/${params}`)
              if (activityEl) {
                activityEl?.scrollIntoView({ behavior: "smooth" });
                activityEl.style.backgroundColor = "white"
                activityEl.style.scale = "1"
              }
            }, 1000)
          }
        }, 500)

      }
    }
  }, [location, activities]);

  // CONTEXT VARIABLE

  const ContextVariable = {

    canSelect, setCanSelect,
    showMenu, setShowMenu,
    showActDesc,
    showAddPrompt, setShowAddPrompt,
    showEdit, setShowEdit,

    typeOfWork, setTypeOfWork,

    selectedChoice, setSelectedChoice,
    setShowActDesc,
    actDesc, setActDesc,
    activities, setActivities,
    assignments, setAssignments,
    projects, setProjects,
    exams, setExams,
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
    saveToDatabase,
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
        <EditPrompt />
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

              <div className={s.buttonWrapper}>
                <button onClick={() => { slideElement(true, "Activity") }}>
                  <i className="	fa fa-angle-left"></i>
                </button>
                <button onClick={() => { slideElement(false, "Activity") }}>
                  <i className="	fa fa-angle-right"></i>
                </button>
              </div>
            </h1>
            <div ref={activitySliderRef} className={s.content}>
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
              <div className={s.buttonWrapper}>
                <button onClick={() => { slideElement(true, "Assignment") }}>
                  <i className="	fa fa-angle-left"></i>
                </button>
                <button onClick={() => { slideElement(false, "Assignment") }}>
                  <i className="	fa fa-angle-right"></i>
                </button>
              </div>
            </h1>
            <div ref={assignmentSliderRef} className={s.content}>
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

              <div className={s.buttonWrapper}>
                <button onClick={() => { slideElement(true, "Project") }}>
                  <i className="	fa fa-angle-left"></i>
                </button>
                <button onClick={() => { slideElement(false, "Project") }}>
                  <i className="	fa fa-angle-right"></i>
                </button>
              </div>
            </h1>
            <div ref={projectsSliderRef} className={s.content}>
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
          <div className={`${s.subjectActs} ${s.subjectActivities}`} id="Exam">
            <h1>
              <i className="	fa fa-leanpub"></i>
              <span>Exams And Quizes</span>

              <div className={s.buttonWrapper}>
                <button onClick={() => { slideElement(true, "Exam") }}>
                  <i className="	fa fa-angle-left"></i>
                </button>
                <button onClick={() => { slideElement(false, "Exam") }}>
                  <i className="	fa fa-angle-right"></i>
                </button>
              </div>
            </h1>
            <div ref={examsSliderRef} className={s.content}>
              <AddActivity key={Math.random() * 1} type={"Exam"} />
              <button
                className={canSelect ? s.selectAllButton : s.hideSelectAllButton}
                onClick={() => {
                  if (!selectAll.Exam) {
                    handleSelectAll("Exam", true)
                    setSelectAll(prev => ({ ...prev, Exam: true }))
                  } else {
                    handleSelectAll("Exam", false)
                    setSelectAll(prev => ({ ...prev, Exam: false }))
                  }
                }}>
                <i className={selectAll.Exam ? "fa fa-check" : s.transparent}></i>
              </button>
              <MapActivities typeOfWork={"Exam"} sortingType={sortingType} />
            </div>
          </div>
        </div>
      </div>
    </SubjectContentContext.Provider>
  )
}

export default SubjectContent
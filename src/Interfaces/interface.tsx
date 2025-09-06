import type { User } from "firebase/auth";
import type { Dispatch, RefObject, SetStateAction } from "react";

export interface Tab {
  pageName: string;
  path: string;
  element: any;
  keyId: number;
  icon: string;
  focus: boolean;
}

export interface AuthTab {
  path: string;
  element: any;
  keyId: number;
  icon: string;
  focus: boolean;
}

export interface SubjectsType {
  subjectName: string;
  subjectNameAbbreviation: string;
  subjectTeacher: string;
  subjectSemester: string;
  quarter: number;
  imgPath: string;
  color: string;
}


// MAIN VARIABLES

export interface BasicInfo {
  firstname: string;
  middleInitial: string;
  lastname: string;
}
export interface UserInfo {
  email: string;
  password: string;
  firstName: string;
  middleInitial: string;
  lastName: string;
  status: string;
}
export interface SchoolActivities {
  id: string | number;
  subject: string;
  title: string;
  description: string;
  dueDate: string;
  status: "pending" | "completed";
  createdBy: string;
  createdAt: string;
  typeOfWork: string;
  semester: string;
  quarter: string;
  isSelected: boolean;
  timeCreated: number;
  highlight?: boolean
}

export interface UserData {
  user: UserInfo;
  activities: SchoolActivities[];
  groupings: SchoolActivities[];
  assignments: SchoolActivities[];
  petas: SchoolActivities[];
  exams: SchoolActivities[];
  reviewers: SchoolActivities[];
}

// Components

export interface Quarter {
  quarter: string;
  sem: string;
}

export interface MenuPosition {
  x: number;
  y: number;
}

export interface MenuChoices {
  classname: string;
  functionName: string;
}


export interface ContextType {
  userObject: User | null,
  setUserObject: Dispatch<SetStateAction<User | null>>,
  userData: UserData | null, setUserData: Dispatch<SetStateAction<UserData | null>>,

  // Boolean
  showSideBar: boolean, setShowSideBar: Dispatch<SetStateAction<boolean>>,
  showLogForm: boolean, setShowLogForm: Dispatch<SetStateAction<boolean>>,
  showLogOutPrompt: boolean, setShowLogOutPrompt: Dispatch<SetStateAction<boolean>>,
  basicInfo: boolean, setBasicInfo: Dispatch<SetStateAction<boolean>>,
  isLoading: boolean, setIsLoading: Dispatch<SetStateAction<boolean>>,

  // String and Numbers
  pathTo: string, setPathTo: Dispatch<SetStateAction<string>>,
  errorDescription: string, setErrorDescription: Dispatch<SetStateAction<string>>,

  // Objects and Arrays
  tabs: Tab[], setTabs: Dispatch<SetStateAction<Tab[]>>,



  // Functions
  pageDetector: (
    authInd: number | null,
    tabInd: number | null,
    bool: boolean) => void;
  signInWithFacebook: () => void,
  signInWithGoogle: () => void,
  handleUser: (user: User) => void
}

// Recap Variables

export interface Weeks {
  monthAndDay?: string;
}

export interface WeeklyActivities {
  id: string | number;
  status: string;
  title: string;
  description: string;
  typeOfWork: string;
  subject: string; 
}

export interface Day {
  day: string;
  Activities: WeeklyActivities[];
  Groupings: WeeklyActivities[];
  Assignment: WeeklyActivities[];
  Projects: WeeklyActivities[];
  Exams: WeeklyActivities[]
}

export interface DaySelected {
  day: string;
}

export interface WeekList {
  isCurrent: false;
  monthAndDay: string;
}

export interface WeeklyRecap {
  monthAndDay: string;
  days: Day[];
}

export interface SubConContextType {
  canSelect: boolean, setCanSelect: Dispatch<SetStateAction<boolean>>,
  showMenu: boolean, setShowMenu: Dispatch<SetStateAction<boolean>>,
  actDesc: SchoolActivities | null,
  showActDesc: boolean,
  showAddPrompt: boolean, setShowAddPrompt: Dispatch<SetStateAction<boolean>>,
  setShowActDesc: Dispatch<SetStateAction<boolean>>,
  showEdit: boolean, setShowEdit: Dispatch<SetStateAction<boolean>>,

  selectedChoice: Quarter, setSelectedChoice: Dispatch<SetStateAction<Quarter>>,
  setActDesc: Dispatch<SetStateAction<SchoolActivities | null>>,
  activities: SchoolActivities[] | null, setActivities: Dispatch<SetStateAction<SchoolActivities[] | null>>,
  assignments: SchoolActivities[] | null, setAssignments: Dispatch<SetStateAction<SchoolActivities[] | null>>,
  projects: SchoolActivities[] | null, setProjects: Dispatch<SetStateAction<SchoolActivities[] | null>>,
  exams: SchoolActivities[] | null, setExams: Dispatch<SetStateAction<SchoolActivities[] | null>>,
  quarterAndSemChoices: Quarter[], setQuarterAndSemChoices: Dispatch<SetStateAction<Quarter[]>>,

  // NUMBERS
  menuPos: MenuPosition, setMenuPos: Dispatch<SetStateAction<MenuPosition>>

  typeOfWork: string, setTypeOfWork: Dispatch<SetStateAction<string>>,
  quarter: string, setQuarter: Dispatch<SetStateAction<string>>,
  semester: string, setSemester: Dispatch<SetStateAction<string>>,
  params: string,
  sortingType: string, setSortingType: Dispatch<SetStateAction<string>>

  // Functions
  defineTypeOfWork: (setToNull: boolean, status: "pending" | "completed", task?: SchoolActivities) => void,
  handleRightClick: (e: any, task: SchoolActivities | null, contextMenu: boolean) => void,
  handleSelectAll: (typeOfWorkArgs: string, bool: boolean) => void,
  saveToDatabase: (val: SchoolActivities[], typeOfWork: string) => void

  // REF
  menu: RefObject<HTMLDivElement | null>
}

export interface SubjectContext {
  selectedQuarter: string, setSelectedQuarter: Dispatch<SetStateAction<string>>,
  selectedSemester: string, setSelectedSemester: Dispatch<SetStateAction<string>>
}

export interface AddRecapContextType {
  showActPrompt: boolean, setShowActPrompt: Dispatch<SetStateAction<boolean>>,
  showAssPrompt: boolean, setShowAssPrompt: Dispatch<SetStateAction<boolean>>,
  showProjPrompt: boolean, setShowProjPrompt: Dispatch<SetStateAction<boolean>>,

  selectedDay: string, setSelectedDay: Dispatch<SetStateAction<string>>
  typeOfWork: string, setTypeOfWork: Dispatch<SetStateAction<string>>,
  quarter: string, setQuarter: Dispatch<SetStateAction<string>>,
  semester: string, setSemester: Dispatch<SetStateAction<string>>,
  subject: string, setSubject: Dispatch<SetStateAction<string>>,

  recap: WeeklyRecap, setRecap: Dispatch<SetStateAction<WeeklyRecap>>
}
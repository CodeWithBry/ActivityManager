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
  id: string;
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
  assignments: SchoolActivities[];
  petas: SchoolActivities[];
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
  setUserObject: React.Dispatch<React.SetStateAction<User | null>>,
  userData: UserData | null, setUserData: React.Dispatch<React.SetStateAction<UserData | null>>,

  // Boolean
  showSideBar: boolean, setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>,
  showLogForm: boolean, setShowLogForm: React.Dispatch<React.SetStateAction<boolean>>,
  showLogOutPrompt: boolean, setShowLogOutPrompt: React.Dispatch<React.SetStateAction<boolean>>,
  basicInfo: boolean, setBasicInfo: React.Dispatch<React.SetStateAction<boolean>>,

  // String and Numbers
  pathTo: string, setPathTo: React.Dispatch<React.SetStateAction<string>>,
  errorDescription: string, setErrorDescription: React.Dispatch<React.SetStateAction<string>>,

  // Objects and Arrays
  tabs: Tab[], setTabs: React.Dispatch<React.SetStateAction<Tab[]>>,



  // Functions
  pageDetector: (
    authInd: number | null,
    tabInd: number | null,
    bool: boolean) => void;
  signInWithFacebook: () => void,

  signInWithGoogle: () => void
}

export interface SubConContextType {
  canSelect: boolean, setCanSelect: Dispatch<SetStateAction<boolean>>,
  showMenu: boolean, setShowMenu: Dispatch<SetStateAction<boolean>>,
  actDesc: SchoolActivities | null,
  showActDesc: boolean,
  showAddPrompt: boolean, setShowAddPrompt: Dispatch<SetStateAction<boolean>>,
  setShowActDesc: React.Dispatch<React.SetStateAction<boolean>>,

  selectedChoice: Quarter, setSelectedChoice: Dispatch<SetStateAction<Quarter>>,
  setActDesc: React.Dispatch<React.SetStateAction<SchoolActivities | null>>,
  activities: SchoolActivities[] | null, setActivities: Dispatch<SetStateAction<SchoolActivities[] | null>>,
  assignments: SchoolActivities[] | null, setAssignments: Dispatch<SetStateAction<SchoolActivities[] | null>>,
  projects: SchoolActivities[] | null, setProjects: Dispatch<SetStateAction<SchoolActivities[] | null>>,
  quarterAndSemChoices: Quarter[], setQuarterAndSemChoices: Dispatch<SetStateAction<Quarter[]>>,

  // NUMBERS
  menuPos: MenuPosition, setMenuPos: Dispatch<SetStateAction<MenuPosition>>

  typeOfWork: string, setTypeOfWork: React.Dispatch<React.SetStateAction<string>>,
  quarter: string, setQuarter: React.Dispatch<React.SetStateAction<string>>,
  semester: string, setSemester: React.Dispatch<React.SetStateAction<string>>,
  params: string,
  sortingType: string, setSortingType: Dispatch<SetStateAction<string>>

  // Functions
  defineTypeOfWork: (setToNull: boolean, status: "pending" | "completed") => void,
  handleRightClick: (e: any, task: SchoolActivities | null, contextMenu: boolean) => void,
  handleSelectAll: (typeOfWorkArgs: string, bool: boolean) => void,

  // REF
  menu: RefObject<HTMLDivElement | null>
}

export interface SubjectContext {
  selectedQuarter: string, setSelectedQuarter: Dispatch<SetStateAction<string>>,
  selectedSemester: string, setSelectedSemester: Dispatch<SetStateAction<string>>
}
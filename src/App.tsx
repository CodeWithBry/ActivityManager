import { createContext, lazy, useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import s from "./App.module.css"

const Home = lazy(() => import('./Pages/Home/Home'));
const Subjects = lazy(() => import('./Pages/Subjects/Subjects'));
const Recap = lazy(() => import('./Pages/Recap/Recap.tsx'));
const Account = lazy(() => import('./Pages/Users/Account.tsx'))

import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';

import ErrorPrompt from './Authentication/ErrorPrompt/ErrorPrompt.tsx';
import ForgotPassword from './Authentication/ForgotPassword/ForgotPassword.tsx';
import LogIn from './Authentication/LogIn/LogIn.tsx'
import SignUp from './Authentication/SignUp/SignUp.tsx'

export const context = createContext({})

import type { Tab, AuthTab, ContextType, UserData, SchoolActivities } from './Interfaces/interface';
import LogOutPrompt from './Components/LogOutPrompt/LogOutPrompt.tsx';
import { FacebookAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, type User } from 'firebase/auth';
import { auth, firestore } from './Firebase/Firebase.tsx';
import { arrayUnion, doc, getDoc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { FirebaseError } from 'firebase/app';

function App() {
  // Navigation
  const navigation = useNavigate()
  // STATIC VARIABLES
  let variable = {} as ContextType
  const fromLocStor = JSON.parse(localStorage.getItem("User") as any)

  // **************** STATE VARIABLES *****************

  // BOOLEANS
  const [showSideBar, setShowSideBar] = useState<boolean>(false)
  const [showLogForm, setShowLogForm] = useState<boolean>(false)
  const [showLogOutPrompt, setShowLogOutPrompt] = useState<boolean>(false)
  const [basicInfo, setBasicInfo] = useState<boolean>(false)


  // STRING AND NUMERICAL VALUE
  const [pathTo, setPathTo] = useState<string>(window.location.href)
  const [errorDescription, setErrorDescription] = useState<string>("")

  // ARRAYS & OBJECTS
  const [userObject, setUserObject] = useState<User | null>(fromLocStor ? fromLocStor : null)
  const [userData, setUserData] = useState<UserData | null>(null)
  const [tabs, setTabs] = useState<Tab[]>([
    { pageName: "Home", path: "/", element: <Home />, keyId: Math.random() * 1, icon: "fa fa-home", focus: true },
    { pageName: "Subjects", path: `/subjects`, element: <Subjects />, keyId: Math.random() * 1, icon: "fa fa-book", focus: false },
    { pageName: "Recap", path: "/Recap", element: <Recap />, keyId: Math.random() * 1, icon: "	fa fa-check-square-o", focus: false },
    { pageName: "Account", path: "/account", element: <Account />, keyId: Math.random() * 1, icon: "	fa fa-user", focus: false },
  ])

  const [authTabs, setAuthTabs] = useState<AuthTab[]>([
    { path: "/login", element: <LogIn />, keyId: Math.random() * 1, icon: "fa fa-book", focus: false },
    { path: "/register", element: <SignUp />, keyId: Math.random() * 1, icon: "fa fa-home", focus: false },
    { path: "/forgot_password", element: <ForgotPassword />, keyId: Math.random() * 1, icon: "	fa fa-check-square-o", focus: false }
  ])

  // ********** FUNCTIONS ************

  // Reusable Function or Component

  function pageDetector(authInd: number | null, tabInd: number | null, bool: boolean) {
    setAuthTabs((arr: AuthTab[]) => arr.map((tab, i) => {
      if (i === authInd && authInd != null) {
        navigation(tab.path)
        return { ...tab, focus: true }
      } else {
        return { ...tab, focus: false }
      }
    }
    ))
    setTabs((arr: Tab[]) => arr.map((tab, i) => {
      return ({ ...tab, focus: i === tabInd && tabInd != null ? true : false })
    }))
    setShowLogForm(bool)
  }

  async function signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider
      const result = await signInWithPopup(auth, provider)
      handleUser(result.user)
    } catch (error) {
      if (error instanceof FirebaseError) setErrorDescription(error.code)
    }
  }



  const signInWithFacebook = async () => {
    const FBProvider = new FacebookAuthProvider

    FBProvider.addScope("public_profile")
    signInWithPopup(auth, FBProvider).then((result) => {
      const user = result.user;
      if (user) {
        setUserObject(user)
        handleUser(user)
        window.location.reload()
      }
    }).catch((error) => { if (error instanceof FirebaseError) setErrorDescription(error.code) })
  }

  async function handleUser(user: User | null) {
    const docRef = doc(firestore, "McCarthy", `${user?.uid}`);
    const userListRef = doc(firestore, "Main_Database", "Users")
    const getUserListData = await getDoc(userListRef)
    const getData = await getDoc(docRef);
    const initialUserData = {
      user: { Gmail: user?.email, firstName: "", middleInitial: "", lastName: "", uid: user?.uid },
      activities: [],
      assignments: [],
      petas: [],
      reviewers: []
    }
    if (!getData.exists()) {
      await setDoc(docRef, initialUserData);
      compareUserListAndUser()
    } else {
      compareUserListAndUser()
    }

    async function compareUserListAndUser() {
      if (getUserListData.data()) {
        const getUserLists = getUserListData.data()?.userList
        let isAccountExist = false
        for (let i = 0; i < getUserLists?.length; i++) {
          if (user?.uid === getUserLists[i]?.uid) {
            isAccountExist = true
            break;
          }
        }
        if (!isAccountExist) {
          await updateDoc(userListRef, {
            userList: arrayUnion(userData)
          })
        }
      }
    }

  }

  // ************* EFFECTS ************

  useEffect(() => {
    const unsubscribe_1 = onSnapshot(doc(firestore, "McCarthy", `${userObject?.uid}`), (snapshot: any) => {
      if (snapshot.exists()) {
        setUserData(snapshot.data());
        handleUser(userObject)
      } else {
        setUserData(null);
      }
    });

    return () => {
      unsubscribe_1();
    }
  }, [])


  useEffect(() => {
    const personalDatabase = doc(firestore, "McCarthy", `${userObject?.uid}`);
    const mainDatabase = doc(firestore, "Main_Database", "School_Activities");

    const unsubscribe_2 = onSnapshot(mainDatabase, async (snapshot: any) => {
      if (!snapshot.exists()) {
        setUserData(null);
        console.log("null")
        return;
      }

      const getUserData = await getDoc(personalDatabase);
      const origData = getUserData.data() as UserData | null;

      if (origData == null) {
        console.log(origData)
        return
      };

      // ✅ Data from Main DB
      const mainActivities: SchoolActivities[] = snapshot.data().Activity;
      const mainAssignments: SchoolActivities[] = snapshot.data().Assignment;
      const mainProjects: SchoolActivities[] = snapshot.data().Project;

      // ✅ Data from Personal DB
      const userActivities = origData.activities;
      const userAssignments = origData.assignments;
      const userProjects = origData.petas;

      // ✅ Find NEW items (exist in Main but not in Personal)
      const newActivities = mainActivities.filter(act =>
        !userActivities.some(u => u.id === act.id)
      );
      const newAssignments = mainAssignments.filter(ass =>
        !userAssignments.some(u => u.id === ass.id)
      );
      const newProjects = mainProjects.filter(proj =>
        !userProjects.some(u => u.id === proj.id)
      );

      // ✅ Find REMOVED items (exist in Personal but not in Main)
      const removedActivities = userActivities.filter(u =>
        !mainActivities.some(act => act.id === u.id)
      );
      const removedAssignments = userAssignments.filter(u =>
        !mainAssignments.some(ass => ass.id === u.id)
      );
      const removedProjects = userProjects.filter(u =>
        !mainProjects.some(proj => proj.id === u.id)
      );

      console.log("❌ Removed Items From the Main Database", { removedActivities, removedAssignments, removedProjects });
      // Compare removed activities to the existing activities in the personal data
      const filterRemovedActs = mainActivities.filter(orig => !removedActivities.some(act => orig.id == act.id))
      const filterRemovedAss = mainAssignments.filter(orig => !removedAssignments.some(act => orig.id == act.id))
      const filterRemovedProj = mainProjects.filter(orig => !removedProjects.some(act => orig.id == act.id))

      console.log("❌ Serialized User's Activities", { filterRemovedActs, filterRemovedAss, filterRemovedProj });
      await updateDoc(personalDatabase, {
        activities: removedActivities.length != 0 ? filterRemovedActs : [...newActivities, ...userActivities],
        assignments: removedAssignments.length != 0 ? filterRemovedAss : [...newAssignments, ...userAssignments],
        petas: removedProjects.length != 0 ? filterRemovedProj : [...newProjects, ...userProjects]
      })
      return setUserData({
        ...origData,
        activities: removedActivities.length != 0 ? filterRemovedActs : [...newActivities, ...userActivities],
        assignments: removedAssignments.length != 0 ? filterRemovedAss : [...newAssignments, ...userAssignments],
        petas: removedProjects.length != 0 ? filterRemovedProj : [...newProjects, ...userProjects],
      });
    });

    return () => {
      unsubscribe_2();
    };
  }, [userObject]);


  useEffect(() => {
    if (userData != null && userObject != null) {
      if (userData?.user.firstName == "") {
        navigation("/register")
        setBasicInfo(true)
      }
    }
  }, [userData, userObject])


  // ********* CONTEXT VARIRABLES ***********


  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      if (userObject == null) { setUserObject(user), localStorage.setItem("User", JSON.stringify(user)) }
      const docRef = doc(firestore, `McCarthy`, `${user?.uid}`)

      if (!userData) {
        getDoc(docRef).then((promise: any) => {
          if (promise.data()?.firstName == "" || promise.data()?.middleInitial == "" || promise.data()?.lastName == "") {
            navigation("/register")
          }
          handleUser(user)
          setUserData(promise.data())
        })
      }
    }
  })



  variable = {
    // Important Data such as userData, authData, sensitiveData
    userObject, setUserObject,
    userData, setUserData,
    // Boolean
    showSideBar, setShowSideBar,
    showLogForm, setShowLogForm,
    showLogOutPrompt, setShowLogOutPrompt,
    basicInfo, setBasicInfo,
    errorDescription, setErrorDescription,

    // String and Numbers
    pathTo, setPathTo,

    // Objects and Arrays
    tabs, setTabs,

    // Functions
    pageDetector,
    signInWithFacebook,
    signInWithGoogle,
    handleUser
  }

  return (
    <context.Provider value={variable}>
      <Navbar />
      <LogOutPrompt />
      <ErrorPrompt />
      <div
        className={s.sbartabWrapper}
        style={showLogForm ? { display: "none" } : { display: "flex" }}
        onContextMenu={(e) => { e.preventDefault() }}>
        <Sidebar />
        <Routes>
          {
            tabs?.map((tab) => {
              return <Route path={tab.path} element={tab.element} />
            })
          }
          <Route path='/subjects/:subjectName' element={<Subjects />} />
        </Routes>
      </div>
      <Routes>
        {
          authTabs?.map((tab) => {
            return <Route path={tab.path} element={tab.element} />
          })
        }
      </Routes>
    </context.Provider>
  )
}

export default App

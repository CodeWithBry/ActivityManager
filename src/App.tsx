import { createContext, useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import s from "./App.module.css"
import Home from './Pages/Home/Home';
import Subjects from './Pages/Subjects/Subjects';
import Recap from './Pages/Recap/Recap.tsx';
import Account from './Pages/Account/Account';

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
    console.log(bool, tabInd, authInd)
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



  const signInWithFacebook = async ()  => {
    const FBProvider = new FacebookAuthProvider

    FBProvider.addScope("public_profile")
    signInWithPopup(auth, FBProvider).then((result) => {
      const credential = FacebookAuthProvider.credentialFromResult(result);
      window.alert(result)
      console.log(credential)
      const user = result.user;
      if (user) {
        setUserObject(user)
        handleUser(user)
      }
    }).catch((error)=>{if(error instanceof FirebaseError) setErrorDescription(error.code)})
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
    function unsubscribe_2() {
      const personalDatabase = doc(firestore, "McCarthy", `${userObject?.uid}`)
      const mainDatabase = doc(firestore, "Main_Database", "School_Activities")
      if (userObject?.uid) {
        onSnapshot(mainDatabase, (snapshot: any) => {
          if (snapshot.exists()) {
            async function getDataFromFirestore() {
              const getUserData = await getDoc(personalDatabase);
              const origData = getUserData.data() as UserData | null;
              if (origData?.activities || origData?.assignments || origData?.petas) {
                const serializeAct: SchoolActivities[] = snapshot.data().Activity;
                const serializeAss: SchoolActivities[] = snapshot.data().Assignment;
                const serializeProj: SchoolActivities[] = snapshot.data().Project;

                // filter out activities that already exist (by description)
                const newActivities = serializeAct.filter(act =>
                  !origData.activities?.some(orig => orig.id === act.id)
                );
                const removedActivities = origData.activities?.filter(data =>
                  !serializeAct.some(orig => orig.id === data.id)
                ) || [];

                const newAssignments = serializeAss.filter(ass =>
                  !origData.assignments?.some(orig => orig.id === ass.id)
                );
                const removedAssignments = origData.assignments?.filter(data =>
                  !serializeAss.some(orig => orig.id === data.id)
                ) || [];

                const newProjects = serializeProj.filter(proj =>
                  !origData.petas?.some(orig => orig.id === proj.id)
                );
                const removedProjects = origData.petas?.filter(data =>
                  !serializeProj.some(orig => orig.id === data.id)
                ) || [];

                if (removedActivities.length != 0 || removedAssignments.length != 0 || removedProjects.length != 0) {
                  await updateDoc(personalDatabase, {
                    activities: [...removedActivities, ...origData.activities],
                    assignments: [...removedAssignments, ...origData.assignments],
                    petas: [...removedProjects, ...origData.petas],
                  })

                  setUserData({
                    ...origData,
                    activities: [...removedActivities, ...origData.activities],
                    assignments: [...removedAssignments, ...origData.assignments],
                    petas: [...removedProjects, ...origData.petas],
                  });
                } else {
                  setUserData({
                    ...origData,
                    activities: newActivities ? [...newActivities, ...origData.activities] : [],
                    assignments: newAssignments ? [...newAssignments, ...origData.assignments] : [],
                    petas: newProjects ? [...newProjects, ...origData.petas] : [],
                  });
                }

              }
            }

            getDataFromFirestore();
          } else {
            setUserData(null);
          }
        }
        );
      }
    }

    unsubscribe_2()

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

  useEffect(()=>{
    if(userData) {
      console.log(userData)
    }
  },[userData])

  // ********* CONTEXT VARIRABLES ***********


  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      if (userObject == null) { setUserObject(user), localStorage.setItem("User", JSON.stringify(user)) }
      const docRef = doc(firestore, `McCarthy`, `${user?.uid}`)

      if (!userData) {
        getDoc(docRef).then((promise: any) => {
          if (promise.data()?.firstName == "") {
            navigation("/register")
          }
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
    signInWithGoogle
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

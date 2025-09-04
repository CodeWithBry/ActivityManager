import { useContext, useEffect, useState } from "react"
import type { ContextType, WeekList, WeeklyRecap, Weeks } from "../../Interfaces/interface"
import s from "./Recap.module.css"
import { auth, firestore } from "../../Firebase/Firebase"
import { doc, getDoc, onSnapshot } from "firebase/firestore"
import { FirebaseError } from "firebase/app"
import Days from "./Days/Days"
import AddRecap from "./AddRecap/AddRecap"
import { context } from "../../App"

function Recap() {

  const { userData, pageDetector, userObject } = useContext(context) as ContextType

  const [showWeeks, setShowWeeks] = useState<boolean>(false)
  const [showAddRecap, setShowAddRecap] = useState<boolean>(false)
  const [editRecap, setEditRecap] = useState<boolean>(false)

  const [weeklyRecaps, setWeeklyRecaps] = useState<WeeklyRecap | null>(null)
  const [selectedWeek, setSelectedWeek] = useState<Weeks>({})
  const [weeksChoices, setWeekChoices] = useState<Weeks[]>([])

  async function switchRecap(recapWeek: string) {
    const recapDoc = doc(firestore, "Main_Database", "Recaps", `${recapWeek}`, `${recapWeek}`)
    const getRecapData = (await getDoc(recapDoc))
    const getData = getRecapData.data()
    if (!getData) return
    const keyInstance = recapWeek
    const getInstanceOf = getData[keyInstance as keyof typeof getData]
    setWeeklyRecaps(getInstanceOf)
  }

  useEffect(() => {
    async function getDataFromFirestore() {
      try {
        const listsOfRecapRef = doc(firestore, "Main_Database", "Recaps")
        const getLists = await getDoc(listsOfRecapRef)
        const getData = getLists.data() as WeekList[] | null

        if (!getData) return 0;
        const currentRecapRef = doc(firestore, "Main_Database", "Recaps", `${getData[getData.length - 1].monthAndDay}`, `${getData[getData.length - 1].monthAndDay}`)
        const getCurrentRecapData = (await getDoc(currentRecapRef)).data() as WeeklyRecap
        setWeeklyRecaps(getCurrentRecapData)
      } catch (error) {
        if (error instanceof FirebaseError) return
      }
    }
    if (auth.currentUser) getDataFromFirestore()
  }, [weeksChoices])

  useEffect(() => {
    const recapData = doc(firestore, "Main_Database", "Recaps")
    const snap = onSnapshot(recapData, (snapshot) => {
      console.log("Render!")
      const getListsOfDate = snapshot.data()?.ListsOfRecap
      if (!getListsOfDate) return
      setSelectedWeek(getListsOfDate[getListsOfDate.length - 1])
      async function getRecap() {
        setWeekChoices(getListsOfDate)
        const recapDoc = doc(firestore, "Main_Database", "Recaps", `${getListsOfDate[getListsOfDate.length - 1]?.monthAndDay}`, `${getListsOfDate[getListsOfDate.length - 1]?.monthAndDay}`)
        const getRecapData = (await getDoc(recapDoc))
        const getData = getRecapData.data()
        if (!getData) return
        const keyInstance = getListsOfDate[getListsOfDate.length - 1]?.monthAndDay
        const getInstanceOf = getData[keyInstance as keyof typeof getData]
        setWeeklyRecaps(getInstanceOf)
      }
      console.log(getListsOfDate)
      if (getListsOfDate.length != 0) setTimeout(() => getRecap(), 5000)
    })


    return () => {
      snap();
    }
  }, [])

  useEffect(() => {
    if (userObject?.uid) {
      pageDetector(null, 2, false);
    } else {
      pageDetector(0, null, true);
    }
  }, [userObject]);

  return (
    <div className={s.recapWrapper}>
      <AddRecap weeklyRecaps={weeklyRecaps} showAddRecap={showAddRecap} setShowAddRecap={setShowAddRecap} editRecap={editRecap} setEditRecap={setEditRecap} />
      <div className={s.top}>
        <h2>Weekly Recap</h2>
        <div className={s.weekWrapper}>
          <button
            onClick={() => { showWeeks ? setShowWeeks(false) : setShowWeeks(true) }}
            className={s.weekButton}
          >
            {selectedWeek.monthAndDay ? selectedWeek.monthAndDay : "Nothing"}
          </button>

          <ul className={showWeeks ? s.weeksDropdown : s.hideDropDown}>
            {weeksChoices?.map((week) => (
              <li
                key={week.monthAndDay}
                onClick={() => {
                  setSelectedWeek(week)
                  if (week.monthAndDay) switchRecap(week.monthAndDay)
                }}>
                {week.monthAndDay}
              </li>
            ))}
          </ul>
          {userData?.user.status == "Owner" &&
            <button
              className={s.createRecap}
              onClick={() => setShowAddRecap(true)}>
              Create Recap
            </button>}
          {userData?.user.status == "Owner" &&
            <button
              className={s.createRecap}
              onClick={() => setEditRecap(true)}>
              <i className="fa fa-edit"></i>
            </button>
          }
        </div>
      </div>
      <div className={s.daysWrapper}>
        {
          weeklyRecaps?.days.map(day => <Days key={Math.random() * 1} day={day} />)
        }
      </div>
    </div>
  )
}

export default Recap
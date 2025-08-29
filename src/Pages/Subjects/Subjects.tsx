import { createContext, useContext, useEffect, useState } from "react"
import s from "./Subjects.module.css"
import type { ContextType, SubjectsType } from "../../Interfaces/interface"
import Subject from "./Subject/Subject"
import subjectData from "../../../public/Subjects/subjects.json"
import { context } from "../../App"
import SubjectContent from "./SubjectContent/SubjectContent"
import { useParams } from "react-router-dom"

export const SubjectsContext = createContext({})

function Subjects() {

  const { pageDetector, userObject } = useContext(context) as ContextType
  const { subjectName } = useParams<{ subjectName: string }>()
  const [subjects] = useState<SubjectsType[]>(subjectData)
  const [selectedQuarter, setSelectedQuarter] = useState<string>("2nd")
  const [selectedSemester, setSelectedSemester] = useState<string>("1st")

  useEffect(() => {
    if (subjectName) pageDetector(null, 1, false)
    else pageDetector(null, 1, false)
  }, [subjectName]);

  useEffect(() => {
    if (userObject?.uid) {
      pageDetector(null, 1, false)
    } else {
      pageDetector(0, null, true)
    }
  }, [])

  const variable = {
    selectedQuarter, setSelectedQuarter,
    selectedSemester, setSelectedSemester
  }

  return (
    <>
      <SubjectsContext.Provider value={variable}>
        {
          subjectName ?
            <SubjectContent params={subjectName} subjects={subjects} /> :
            <div className={s.subjectsWrapper}>
              {
                subjects.map((sub) => {
                  return <Subject
                    key={Math.random() * 1}
                    subData={sub} />
                })
              }
            </div>
        }
      </SubjectsContext.Provider>
    </>
  )
}

export default Subjects
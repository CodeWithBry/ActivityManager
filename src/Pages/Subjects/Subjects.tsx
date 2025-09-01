import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import s from "./Subjects.module.css";
import type { ContextType, Quarter, SubjectsType } from "../../Interfaces/interface";
import Subject from "./Subject/Subject";
import subjectData from "../../../public/Subjects/subjects.json";
import { context } from "../../App";
import SubjectContent from "./SubjectContent/SubjectContent";

interface SubjectsContextType {
  selectedQuarter: string;
  setSelectedQuarter: React.Dispatch<React.SetStateAction<string>>;
  selectedSemester: string;
  setSelectedSemester: React.Dispatch<React.SetStateAction<string>>;
}

export const SubjectsContext = createContext<SubjectsContextType | null>(null);

function Subjects() {
  const { pageDetector, userObject } = useContext(context) as ContextType;
  const { subjectName } = useParams<{ subjectName: string }>();

  const [showChoices, setShowChoices] = useState(false);

  const [selectedQuarter, setSelectedQuarter] = useState("1st");
  const [selectedSemester, setSelectedSemester] = useState("1st");

  const [subjects] = useState<SubjectsType[]>(subjectData);
  const [selectedSemAndQuarter, setSelectedSemAndQuarter] = useState<Quarter>({
    quarter: "1st",
    sem: "1st",
  });

  const [quarterAndSemChoices] = useState<Quarter[]>([
    { quarter: "1st", sem: "1st" },
    { quarter: "2nd", sem: "1st" },
    { quarter: "3rd", sem: "2nd" },
    { quarter: "4th", sem: "2nd" },
  ]);

  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    pageDetector(null, 1, false);
  }, [subjectName]);

  useEffect(() => {
    if (userObject?.uid) {
      pageDetector(null, 1, false);
    } else {
      pageDetector(0, null, true);
    }
  }, [userObject]);

  const contextValue: SubjectsContextType = {
    selectedQuarter,
    setSelectedQuarter,
    selectedSemester,
    setSelectedSemester,
  };

  return (
    <SubjectsContext.Provider value={contextValue}>
      {subjectName ? (
        <SubjectContent params={subjectName} subjects={subjects} />
      ) : (
        <div
          ref={wrapperRef}
          className={`${s.subjectsWrapper}`}
        >
          <header
            ref={navRef}
            id="SubjectNavigation"
            className={`${s.top}`}
          >
            <h1>Subjects</h1>
            <div className={s.dropDownButton} onClick={() => setShowChoices((prev) => !prev)}>
              {selectedSemAndQuarter.sem} Semester: {selectedSemAndQuarter.quarter} Quarter
              <i className={showChoices ? "fa fa-angle-up" : "fa fa-angle-down"}></i>
              <div
                className={
                  showChoices
                    ? `${s.choicesBox} ${s.showChoices}`
                    : `${s.choicesBox} ${s.hideChoices}`
                }
              >
                {quarterAndSemChoices.map((choice) => (
                  <button
                    key={`${choice.sem}-${choice.quarter}`}
                    onClick={() => {
                      setSelectedSemAndQuarter(choice);
                      setSelectedQuarter(choice.quarter);
                      setSelectedSemester(choice.sem);
                    }}
                  >
                    {choice.sem} Sem: {choice.quarter} Quarter
                  </button>
                ))}
              </div>
            </div>
          </header>

          <section>
            {subjects.map((sub) => (
              <Subject key={sub.subjectTeacher} subData={sub} />
            ))}
          </section>
        </div>
      )}
    </SubjectsContext.Provider>
  );
}

export default Subjects;

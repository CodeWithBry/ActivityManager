import { useNavigate } from "react-router-dom";
import s from "./NameInputBox.module.css"
import { useContext, type Dispatch, type RefObject, type SetStateAction } from "react"
import { doc, updateDoc } from "firebase/firestore";
import { auth, firestore } from "../../../Firebase/Firebase";
import { context } from "../../../App";
import type { ContextType } from "../../../Interfaces/interface";

interface Props {
  basicInfo: boolean;
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  middleInitial: string;
  setMiddleInitial: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
  createAccount: () => void;
  firstnameRef: RefObject<HTMLSpanElement | null>;
  middleInitialRef: RefObject<HTMLSpanElement | null>;
  lastnameRef: RefObject<HTMLSpanElement | null>;
  checkBasicInputs: () => boolean;
}

function NameInputBox({ basicInfo, firstName,
  setFirstName, middleInitial, setMiddleInitial,
  lastName, setLastName, firstnameRef,
  middleInitialRef, lastnameRef, checkBasicInputs }: Props) {

  const { setUserData, userData } = useContext(context) as ContextType
  const navigation = useNavigate()

  async function updateData() {
    try {
      const docRef = doc(firestore, "McCarthy", `${auth?.currentUser?.uid}`)
      setUserData((prev) => {
        if (prev?.user != null) prev.user.firstName = firstName
        if (prev?.user != null) prev.user.middleInitial = middleInitial
        if (prev?.user != null) prev.user.lastName = lastName
        return prev
      })
      await updateDoc(docRef, {
        user: userData?.user
      })

      navigation("/")
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }

  if (basicInfo) return (
    <>
      <div className={s.signUpWrapper}>
        <div className={s.signUpBox}>
          <div className={s.top}>
            <h1>SIGN UP</h1>
            <span>12-McCarthy</span>
          </div>
          <div className={s.middle}>
            <label
              className={firstName ? `${s.inputBoxes} ${s.inputBoxesFocused}` : `${s.inputBoxes} ${s.inputBoxesNot}`}
              htmlFor="firstname">
              <input
                type="text"
                id="firstname"
                value={firstName ? firstName : ""}
                onChange={(e) => {
                  setFirstName(e.target.value)
                  if (firstnameRef.current) firstnameRef.current.innerText = ""
                }}
              />
              <span className={firstName ? s.focused : s.unfocus}>First Name</span>
            </label>
            <span ref={firstnameRef} className={s.violation}></span>
            <label
              className={middleInitial ? `${s.inputBoxes} ${s.inputBoxesFocused}` : `${s.inputBoxes} ${s.inputBoxesNot}`}
              htmlFor="middleInitial">
              <input
                type="text"
                id="middleInitial"
                value={middleInitial ? middleInitial : ""}
                onChange={(e) => {
                  setMiddleInitial(e.target.value)
                  if (middleInitialRef.current) middleInitialRef.current.innerText = ""
                }} />
              <span className={middleInitial ? s.focused : s.unfocus}>Middle Initial</span>
            </label>
            <span ref={middleInitialRef} className={s.violation}></span>
            <label
              className={lastName ? `${s.inputBoxes} ${s.inputBoxesFocused}` : `${s.inputBoxes} ${s.inputBoxesNot}`}
              htmlFor="lastName">
              <input
                type="text"
                id="lastName"
                value={lastName ? lastName : ""}
                onChange={(e) => {
                  setLastName(e.target.value)
                  if (lastnameRef.current) lastnameRef.current.innerText = ""
                }} />
              <span className={lastName ? s.focused : s.unfocus}>Last Name</span>
            </label>
            <span ref={lastnameRef} className={s.violation}></span>
            <div className={s.buttons}>
              <button
                onClick={() => {
                  const check = checkBasicInputs()
                  if (check) updateData()
                }}
                id={s.logInButton}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NameInputBox
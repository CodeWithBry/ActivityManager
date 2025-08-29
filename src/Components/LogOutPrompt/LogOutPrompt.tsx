import { useContext } from "react";
import s from "./LogOutPrompt.module.css"
import type { ContextType } from "../../Interfaces/interface";
import { context } from "../../App";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/Firebase";

function LogOutPrompt() {
    const { showLogOutPrompt, setShowLogOutPrompt, setUserObject, setUserData, setBasicInfo } = useContext(context) as ContextType

    async function handleLogOut() {

        try {
            await signOut(auth)
            setUserObject(null)
            setUserData(null)
            setShowLogOutPrompt(false)
            setBasicInfo(false)
            localStorage.removeItem("User")
        } catch (error) {
            setShowLogOutPrompt(false)
        }

    }

    if (showLogOutPrompt) return (
        <div 
            className={s.LogOutWrapper}>
            <div className={s.LogOutBox}>
                <h1>Sign Out?</h1>
                <p>Are you going to sign out?</p>
                <div className={s.buttons}>
                    <button
                        onClick={()=>{setShowLogOutPrompt(false)}}>No</button>
                    <button
                        onClick={()=>{ handleLogOut() }}>Yes</button>
                </div>
            </div>
        </div>
    )
}

export default LogOutPrompt
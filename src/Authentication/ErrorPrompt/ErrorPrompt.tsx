import { useContext } from "react"
import s from "./ErrorPrompt.module.css"
import { context } from "../../App"
import type { ContextType } from "../../Interfaces/interface"



export default function ErrorPrompt() {
    const {errorDescription, setErrorDescription} = useContext(context) as ContextType

    if(errorDescription.length != 0) return (
        <div className={s.errorWrapper}>
            <div className={s.errorBox}>
                <h1>Error Occured!</h1>
                <p>{errorDescription}</p>
                <div className={s.buttons}>
                    <button
                        onClick={() => { setErrorDescription("") }}>Try Again</button>
                </div>
            </div>
        </div>
    )
}
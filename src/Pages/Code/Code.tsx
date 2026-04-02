import { createContext, useState } from "react"
import s from "./Code.module.css"

export const CodeContext = createContext({});

function Code({ }) {
    const [note, setNote] = useState<string>("")


    const variable = {

    }

    return (
        <CodeContext.Provider value={variable}>
            <textarea
                className={s.textArea}
                onChange={(e) => { setNote(e.currentTarget.value), console.log(note) }}
                rows={5}>
                {note}
            </textarea>
            <p>
                {note.split("\n").map((line) => <>
                    {line}
                    <br />
                </>)}
            </p>
        </CodeContext.Provider>
    )
}

export default Code
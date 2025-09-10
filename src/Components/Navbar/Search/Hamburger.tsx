import { useEffect, useState, type Dispatch, type SetStateAction } from "react"
import s from "./Search.module.css"
import type { MenuChoices } from "../../../Interfaces/interface";


interface Props {
    setSortingType: Dispatch<SetStateAction<string>>;
}

export default function Hamburger({setSortingType}: Props) {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [menuChoices, setMenuChoices] = useState<MenuChoices[]>([
        {
            classname: "fa fa-ellipsis-h",
            functionName: "Pending"
        },
        {
            classname: "fa fa-check",
            functionName: "Completed"
        },
        {
            classname: "fa fa-sort-numeric-asc",
            functionName: "Newest-Oldest"
        },
        {
            classname: "fa fa-sort-numeric-desc",
            functionName: "Oldest-Newest"
        },
        {
            classname: "fa fa-sort-alpha-asc",
            functionName: "A-Z"
        },
        {
            classname: "fa fa-sort-alpha-desc",
            functionName: "Z-A"
        }
    ])
    const [selectedMenu, setSelectedMenu] = useState<MenuChoices | null>({
        classname: "fa fa-sort-alpha-asc",
        functionName: "A-Z"
    })

    useEffect(() => {
        if (selectedMenu) {
            setSortingType(selectedMenu?.functionName)
        }
    }, [selectedMenu])

    return (
        <button
            className={s.hamWrapper}
            onClick={() => { showMenu ? setShowMenu(false) : setShowMenu(true) }}>
            <p>
                Sort
                <i className={selectedMenu?.classname}></i>
                <i className={showMenu ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
            </p>
            <ul className={showMenu ? s.dropDownMenus : s.hideDropDown}>
                {
                    menuChoices.map((choice) => {
                        return <li
                            key={choice.functionName}
                            onClick={() => {
                                setMenuChoices(prev => prev.map((obj) => {
                                    if (choice.functionName == obj.functionName) {
                                        setSelectedMenu(obj)
                                    }
                                    return obj
                                }))
                            }} >
                            <i className={choice.classname}></i>
                            <p>{choice.functionName}</p>
                        </li>
                    })
                }
            </ul>
        </button>
    )
}
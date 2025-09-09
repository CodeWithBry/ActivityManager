import { useContext, useState, type Dispatch, type SetStateAction } from "react"
import s from "./Navbar.module.css"
import { context } from "../../App"
import { Link } from "react-router-dom"
import type { ContextType } from "../../Interfaces/interface"
import Search from "./Search/Search"


function Navbar() {

    const { showLogForm } = useContext(context) as ContextType

    const [hideSearch, setHideSearch] = useState(true)

    return (
        <div className={!showLogForm ? s.nav : s.navWithLogForm}>
            <div className={s.left}>
                <img src="./icon.jpg" id={s.iconImage} />
                <h1 id={s.title}>12 - MCCARTHY</h1>
            </div>
            <div className={s.right}>
                <div className={s.searchWrap}>
                    <div className={s.searchInput} onClick={() => setHideSearch(false)}>
                        <Search hideSearch={hideSearch} setHideSearch={setHideSearch} />
                        <i className="fa fa-search" id={s.searchLogo}></i>
                    </div>
                </div>

                <button
                    id={s.hamburgerButton}
                    onClick={() => { hideSearch ? setHideSearch(false) : setHideSearch(true) }} >
                    <i className="fa fa-navicon"></i>
                </button>
                <RightButtons setHideSearch={setHideSearch} />
            </div>

            <div className={hideSearch ? `${s.dropDown} ${s.hideSearch}` : `${s.dropDown} ${s.hideDropDown}  `}>
                <RightButtons setHideSearch={setHideSearch} />
                <button
                    onClick={() => {
                        setHideSearch(false)
                    }}>
                    Hide Menu
                </button>
            </div>
        </div>
    )
}

function Links() {
    const { userData } = useContext(context) as ContextType
    return <>
        {userData && <Link to={"/"} className={s.HyperLink}>
            <button className={s.authButts}>
                Home
            </button>
        </Link>}
        {
            !window.location.href.toLowerCase().includes("register") ?
                <Link to={"/register"} className={s.HyperLink}>
                    <button className={s.authButts}>
                        Sign Up
                    </button>
                </Link> :
                <Link to={"/login"} className={s.HyperLink}>
                    <button className={s.authButts}>
                        Log In
                    </button>
                </Link>
        }
    </>
}

type RightButtonProps = {
    setHideSearch: Dispatch<SetStateAction<boolean>>
}

function RightButtons({ setHideSearch }: RightButtonProps) {

    const { userObject, showLogForm, setShowLogForm, setShowLogOutPrompt } = useContext(context) as ContextType

    return <>
        {
            userObject?.uid ?
                <>
                    {
                        showLogForm ?
                            <Links /> :
                            <>
                                <button
                                    onClick={() => { setShowLogOutPrompt(true), setHideSearch(false) }}>
                                    Sign Out
                                </button>
                            </>
                    }
                </> :
                <>
                    {
                        showLogForm ?
                            <Links /> :
                            <>
                                <Link to={"/register"} id={s.signUpLink} className={s.Links}>
                                    <button className={s.authButts} id={s.signUp} onClick={() => {
                                        setShowLogForm(true)
                                        setHideSearch(false)
                                    }}>
                                        Sign Up
                                    </button>
                                </Link>
                                <Link to={"/login"} id={s.logInLink} className={s.Links}>
                                    <button className={s.authButts} id={s.logIn} onClick={() => {
                                        setShowLogForm(true)
                                        setHideSearch(false)
                                    }}>
                                        Log In
                                    </button>
                                </Link>
                            </>
                    }
                </>
        }
    </>
}

export default Navbar
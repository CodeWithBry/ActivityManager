import { useContext, useState, type Dispatch, type SetStateAction } from "react"
import s from "./Navbar.module.css"
import { context } from "../../App"
import { Link } from "react-router-dom"
import type { ContextType } from "../../Interfaces/interface"
// import Search from "./Search/Search"


function Navbar() {

    const { showLogForm } = useContext(context) as ContextType

    // const searchBarRef = useRef<any>(null)

    const [showSearchPrompt, setShowSearchPrompt] = useState(false)

    return (
        <div className={!showLogForm ? s.nav : s.navWithLogForm}>
            <div className={s.left}>
                <img src="./icon.jpg" id={s.iconImage} />
                <h1 id={s.title}>12 - MCCARTHY</h1>
            </div>
            <div className={s.right}>
                {/* <div className={s.searchWrapper} onClick={()=>setShowSearchPrompt(true)}>   
                    <Search searchInput={searchBarRef} showSearchPrompt={showSearchPrompt} setShowSearchPrompt={setShowSearchPrompt} />
                    <i className="fa fa-search" id={s.searchLogo}></i>
                </div> */}

                <button
                    id={s.hamburgerButton}
                    onClick={() => { showSearchPrompt ? setShowSearchPrompt(false) : setShowSearchPrompt(true) }} >
                    <i className="fa fa-navicon"></i>
                </button>
                <RightButtons setShowSearchPrompt={setShowSearchPrompt} />
            </div>

            <div className={showSearchPrompt ? `${s.dropDown} ${s.showSearchPrompt}` : `${s.dropDown} ${s.hideDropDown}  `}>
                <RightButtons setShowSearchPrompt={setShowSearchPrompt} />
                <button
                    onClick={() => {
                        setShowSearchPrompt(false)
                    }}>
                    Hide Menu
                </button>
            </div>
        </div>
    )
}

function Links() {
    const {userData} = useContext(context) as ContextType
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
    setShowSearchPrompt: Dispatch<SetStateAction<boolean>>
}

function RightButtons({ setShowSearchPrompt }: RightButtonProps) {

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
                                    onClick={() => { setShowLogOutPrompt(true), setShowSearchPrompt(false) }}>
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
                                        setShowSearchPrompt(false)
                                    }}>
                                        Sign Up
                                    </button>
                                </Link>
                                <Link to={"/login"} id={s.logInLink} className={s.Links}>
                                    <button className={s.authButts} id={s.logIn} onClick={() => {
                                        setShowLogForm(true)
                                        setShowSearchPrompt(false)
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
import { useContext, useState, type Dispatch, type SetStateAction } from "react"
import s from "./Navbar.module.css"
import { context } from "../../App"
import { Link } from "react-router-dom"
import type { ContextType } from "../../Interfaces/interface"
// import Search from "./Search/Search"


function Navbar() {

    const { showLogForm } = useContext(context) as ContextType

    // const searchBarRef = useRef<any>(null)

    const [showResults, setShowResults] = useState(false)

    // function handleSearching() {

    // }

    function handleBellClick() {

    }

    return (
        <div className={!showLogForm ? s.nav : s.navWithLogForm}>
            <div className={s.left}>
                <img src="./icon.jpg" id={s.iconImage} />
                <h1 id={s.title}>12 - MCCARTHY</h1>
            </div>
            <div className={s.right}>
                {/* <div className={s.searchWrapper}>   
                    <Search searchInput={searchBarRef} showResults={showResults} setShowResults={setShowResults} />
                    <i className="fa fa-search" id={s.searchLogo}></i>
                    <input
                        type="text"
                        id={s.searchInput}
                        ref={searchBarRef}
                        onFocus={()=>{setShowResults(true)}}
                        onBlur={()=>{setShowResults(false)}}
                        onKeyDown={(e) => {
                            if(e.key == "Enter" && searchBarRef?.current.length != 0) handleSearching()
                        }} placeholder="Search..." />
                    <button
                        onClick={() => {
                            handleSearching()
                        }}
                        id={s.searchButton}>
                        Search
                    </button>
                </div> */}

                <button
                    id={s.hamburgerButton}
                    onClick={() => { showResults ? setShowResults(false) : setShowResults(true) }} >
                    <i className="fa fa-navicon"></i>
                </button>
                <RightButtons handleBellClick={handleBellClick} setShowResults={setShowResults} />
            </div>

            <div className={showResults ? `${s.dropDown} ${s.showResults}` : `${s.dropDown} ${s.hideDropDown}  `}>
                <RightButtons handleBellClick={handleBellClick} setShowResults={setShowResults} />
                <button
                    onClick={() => {
                        setShowResults(false)
                    }}>
                    Hide Menu
                </button>
            </div>
        </div>
    )
}

function Links() {
    return <>
        <Link to={"/"} className={s.HyperLink}>
            <button className={s.authButts}>
                Home
            </button>
        </Link>
    </>
}

type RightButtonProps = {
    handleBellClick: () => void
    setShowResults: Dispatch<SetStateAction<boolean>>
}

function RightButtons({ handleBellClick, setShowResults }: RightButtonProps) {

    const { userObject, showLogForm, setShowLogForm, setShowLogOutPrompt } = useContext(context) as ContextType

    return <>
        {
            userObject?.uid ?
                <>
                    {
                        showLogForm ?
                            <Links /> :
                            <>
                                <button id={s.bell}
                                    onClick={() => { handleBellClick(), setShowResults(false) }}>
                                    <i className="fa fa-bell-o"></i>
                                    <p>Notifications</p>
                                    {/* {
                                        userData?.notifs?.length != 0 ?
                                            <span id={"notifIcon"}>{userData?.notifs <= 99 ? userData?.notifs : "99+"}</span> :
                                            null
                                    } */}
                                </button>
                                <button
                                    onClick={() => { setShowLogOutPrompt(true), setShowResults(false) }}>
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
                                        setShowResults(false)
                                    }}>
                                        Sign Up
                                    </button>
                                </Link>
                                <Link to={"/login"} id={s.logInLink} className={s.Links}>
                                    <button className={s.authButts} id={s.logIn} onClick={() => {
                                        setShowLogForm(true)
                                        setShowResults(false)
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
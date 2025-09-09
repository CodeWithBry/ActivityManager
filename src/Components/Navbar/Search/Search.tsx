import { useRef, type Dispatch, type SetStateAction } from "react";
import s from "./Search.module.css"

interface Props {
    hideSearch: boolean;
    setHideSearch: Dispatch<SetStateAction<boolean>>;
    
}

function Search({ setHideSearch, hideSearch }: Props) {
    const searchInput = useRef<HTMLInputElement | null>(null)

    return (
        <>
            <div className={hideSearch ? s.hideSearch : s.searchesWrapper}>
                <div className={s.top}>
                    <div className={s.mainNav}>
                        <h1 >Search Tab</h1>
                        <button onClick={(e) => {e.stopPropagation(), setHideSearch(true)}}> Close </button>
                    </div>
                    <div className={s.searchWrapper}>
                        <i className="fa fa-search" id={s.searchLogo}></i>
                        <input
                            type="text"
                            id={s.searchInput}
                            ref={searchInput}
                            onFocus={() => { setHideSearch(false) }}
                            onKeyDown={() => {
                                // if (e.key == "Enter" && searchInput?.current.length != 0) 
                            }} placeholder="Search..." />
                        <button
                            onClick={() => {
                                setHideSearch(true)
                            }}
                            id={s.searchButton}>
                            Search
                        </button>
                    </div>
                </div>
                {/* <div className={s.searches}>
                    <ul>{
                        filteredData && filteredData.map((act) => <li>{act.description}</li>)
                    }</ul>
                </div> */}
            </div>
        </>
    )
}

export default Search
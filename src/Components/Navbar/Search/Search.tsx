// import { useContext, useEffect, useState, type Dispatch, type SetStateAction } from "react";
// import s from "./Search.module.css";
// import { context } from "../../../App";
// import type { ContextType, SchoolActivities } from "../../../Interfaces/interface";

// interface Props {
//     showSearchPrompt: boolean;
//     setShowSearchPrompt: Dispatch<SetStateAction<boolean>>;
//     searchInput: any;
// }

// export default function Search({ showSearchPrompt, setShowSearchPrompt, searchInput }: Props) {
//     const { userData } = useContext(context) as ContextType

//     const [copyOfData, setCopyOfData] = useState<SchoolActivities[] | null>(null)
//     const [filteredData, setFilteredData] = useState<SchoolActivities[] | null>(null)

//     function handleSearching() {
//         setFilteredData(prev => {
//             if (!prev || !copyOfData) return null;

//             return copyOfData.filter(acts => searchInput.current.innerHTML.includes(acts.description))
//         })
//     }

//     useEffect(() => {
//         if (userData) setCopyOfData([...userData.activities, ...userData.assignments, ...userData.exams, ...userData.petas])
//     }, [userData])

//     if (showSearchPrompt) return (
//         <>
//             <div className={s.searchesWrapper}>
//                 <div className={s.top}>
//                     <div className={s.searchWrapper}>
//                         <i className="fa fa-search" id={s.searchLogo}></i>
//                         <input
//                             type="text"
//                             id={s.searchInput}
//                             ref={searchInput}
//                             onFocus={() => { setShowSearchPrompt(true) }}
//                             onKeyDown={(e) => {
//                                 if (e.key == "Enter" && searchInput?.current.length != 0) handleSearching()
//                             }} placeholder="Search..." />
//                         <button
//                             onClick={() => {
//                                 handleSearching()
//                             }}
//                             id={s.searchButton}>
//                             Search
//                         </button>
//                     </div>
//                     <button onClick={()=>setShowSearchPrompt(false)}> Close </button>
//                 </div>
//                 <div className={s.searches}>
//                     <ul>{
//                         filteredData && filteredData.map((act) => <li>{act.description}</li>)
//                     }</ul>
//                 </div>
//             </div>
//         </>
//     )
// }
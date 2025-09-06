// import { useContext, useState, type Dispatch, type SetStateAction } from "react";
// import s from "./Search.module.css";
// import { context } from "../../../App";
// import type { ContextType } from "../../../Interfaces/interface";

// interface Props {
//     showResults: boolean;
//     setShowResults: Dispatch<SetStateAction<boolean>>;
//     searchInput: any;
// }

// export default function Search({ showResults, setShowResults, searchInput }: Props) {
//     const { userData, userObject } = useContext(context) as ContextType

//     const [filteredData, setFilteredData] = useState<any>(null)

//     function handleSearching() {
//         if (userData)
//             for (let keys in userData) {
//                 console.log(keys)
//             }
//     }


//     if (showResults) return (
//         <>
//             <div className={s.searchesWrapper}>

//             </div>
//         </>
//     )
// }
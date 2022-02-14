import { createContext } from "react";
import BoardWriteContext from "../../src/components/units/21-context-api/BoardWrite.container";

export const ExampleContext = createContext(null)
export default function ContetxAPIPage(){

    return (
        <ExampleContext.Provider value={{ isEdit: true }}>
             <BoardWriteContext />
        </ExampleContext.Provider>
    )
}

// ==============================================================
// export const ExampleContext = createContext(null)
// export default function ContetxAPIPage(){
    
//     const myValues = {
//         isEdit: false
//     }

//     return (
//         <ExampleContext.Provider value={myValues}>
//              <BoardWriteContext />
//         </ExampleContext.Provider>
//     )
// }
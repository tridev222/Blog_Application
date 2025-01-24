import { useState , createContext, Children } from "react";

export const DataContext = createContext();

const DataProvider=({children})=>{

    const [account , setAccount]=useState({
        email:'',
        name:''
    });
    return(<DataContext.Provider
    value={{account , setAccount}}>
        {children}
    </DataContext.Provider>)
};
export default DataProvider;
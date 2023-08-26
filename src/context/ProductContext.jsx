import { createContext, useContext } from "react";
import { products } from "../data/data";

 const AppContext = createContext();

const AppProvider =({children})=>{
    return <AppContext.Provider value={products}>{children}</AppContext.Provider>;
};

const useProductContext =()=>{
    return useContext(AppContext);
}

export {AppProvider,AppContext,useProductContext};
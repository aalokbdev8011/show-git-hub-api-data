import { createContext, FunctionComponent, useEffect, useState } from "react";
import { ContextType, Repos } from "../type";

export const ContextData = createContext<ContextType | null>(null);

interface PropsType {
    children: JSX.Element,
};
const setValue = localStorage.getItem("set-search")
const ContextProvider: FunctionComponent<PropsType> = (props) => {

    const [queryData, setQueryData] = useState<string[]>([]);
    const [repoData, setRepoData] = useState<Repos[]>([])
    useEffect(() => {
        let getValue: string[]
        if (setValue) {
            getValue = JSON.parse(setValue)
            setQueryData(getValue)
        }
    }, [])

    return (
        <ContextData.Provider value={{ setQueryData: setQueryData, queryData: queryData, setRepoData: setRepoData, repoData: repoData }}>
            {props?.children}
        </ContextData.Provider>
    );
};

export default ContextProvider;
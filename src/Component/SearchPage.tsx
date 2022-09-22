import axios from "axios";
import { FunctionComponent, useContext, useState } from "react";
import { ContextData } from "../@contextAPI";
import { ContextType, GitData } from "../type";
import UserDetailsPage from "./UserDetailsPage";


const SearchPage: FunctionComponent = (props) => {
    const [gitData, setGitData] = useState<GitData | undefined>();
    const [query, setQuery] = useState<string>("");
    const { setQueryData, queryData } = useContext(ContextData) as ContextType;

    const handleSerach = async () => {
        let searchValue = [...queryData]
        searchValue.push(query)
        localStorage.setItem("set-search", JSON.stringify(searchValue))
        setQueryData(searchValue)
        try {
            const { data } = await axios.get(`/users/${query}`);
            setGitData(data);

        } catch (err) {
            console.log(err);
        }
    };
    const handleQuery = (e: any) => {
        setQuery(e.target.value);
    }
    return (
        <>
            <div className="search-header-div">
                <h2>
                    <span className="text-danger">Search</span>
                    &nbsp;<span>GitHub</span>
                    &nbsp;<span className="text-primary">User</span>
                </h2>
                <div className='title-text'></div>
                <div className="search d-flex justify-content-center mt-3">
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={handleQuery}
                    />
                    <button className="btn btn-secondary ms-2" onClick={handleSerach}>Search</button>
                </div>
            </div >
            <UserDetailsPage data={gitData} />
        </>
    );
};
export default SearchPage;

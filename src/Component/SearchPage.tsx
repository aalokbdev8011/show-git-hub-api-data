import axios from "axios";
import { FunctionComponent, useContext, useState } from "react";
import { Alert } from "react-bootstrap";
import { ContextData } from "../@contextAPI";
import { ContextType, GitData } from "../type";
import UserDetailsPage from "./UserDetailsPage";

const SearchPage: FunctionComponent = (props) => {
    const [gitData, setGitData] = useState<GitData | undefined>();
    const [query, setQuery] = useState<string>("");
    const [error, setErrorMsg] = useState(false)
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
            setErrorMsg(true)
            setTimeout(() => {
                setErrorMsg(false)
            }, 2000);
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
                {
                    error &&
                    <Alert key={"danger"} variant={"danger"} className="mx-auto" style={{ width: '420px' }}>
                        User Not Found
                    </Alert>}
            </div >
            <UserDetailsPage data={gitData} />
        </>
    );
};
export default SearchPage;
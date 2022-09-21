import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GitData } from "../type";
import HistoryPage from "./UserDetailsPage";

const SearchPage = () => {
    const [gitData, setGitData] = useState<GitData | undefined>();
    const [query, setQuery] = useState<String>("");

    const handleSerach = async () => {
        try {
            const { data } = await axios.get(`/users/${query}`);
            setGitData(data);
        } catch (err) {
            console.log(err);
        }
    };
    const handleQuery = (e: any) => {
        setQuery(e.target.value);
        localStorage.setItem("userName", e.target.value.toString())
    }
    return (
        <>
            <div className="header py-3">
                <div className="row mx-0 align-items-center justify-content-end">
                    <div className="col-12 col-sm-5 col-lg-4">
                        <h2>Git Hub Search URL</h2>
                    </div>
                    <div className="col-12 col-md-4">
                        <Link
                            className="d-flex align-items-center mx-auto me-sm-0 justify-content-center justify-content-md-end bg-primary text-white link-hs"
                            to="history"
                        >
                            History
                        </Link>
                    </div>
                </div>
            </div>
            <div>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={handleQuery}
                    />
                    <button onClick={handleSerach}>Search</button>
                </div>
            </div>
            <HistoryPage data={gitData} />
        </>
    );
};
export default SearchPage;

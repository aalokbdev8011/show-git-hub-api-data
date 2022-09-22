import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import '../src/assests/style/Style.css';
import { axiosSetup } from './@api/service';
import ContextProvider from './@contextAPI';
import './App.css';
import GitRepoModal from "./Component/GitRepoModal";
import HistoryPage from "./Component/HistoryPage";
import NavBar from './Component/NavBar';
import SearchPage from './Component/SearchPage';


axiosSetup();

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/repos/:url/repos" element={<GitRepoModal />} />
            <Route path="/history" element={<HistoryPage />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;

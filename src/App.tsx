import { axiosSetup } from './@api/service';
import './App.css';
import SearchPage from './Component/SearchPage';
import '../src/assests/style/Style.css';

axiosSetup();

function App() {
  return (
    <div className="App">
      <SearchPage />
      {/* <HistoryPage /> */}
    </div>
  );
}

export default App;

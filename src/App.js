import{
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import { RecoilRoot } from 'recoil';
import Home from  "./routes/Home";
import Detail from "./routes/Detail";
import Search from './routes/Search';
import Navbar from "./components/Navbar";
import Group from "./routes/Group";

function App() {
    return (
      <RecoilRoot>
        <Router basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Home />}  />
            <Route path={'/movie/:id'} element={<Detail />}  />
            <Route path={`/page/:group/:page`} element={<Group />} />
            <Route path={`/search/:search`} element={<Search />} />
          </Routes>
         </Router>
        </RecoilRoot>
  
    );
}

export default App;
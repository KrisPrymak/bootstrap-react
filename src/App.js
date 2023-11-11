import "bootstrap/dist/css/bootstrap.min.css";
import Navibar from "./components/Navibar";
import { Route, Routes } from "react-router-dom";
import Posts from "./components/Posts";
import AboutMe from "./components/AboutMe";
import UserPage from "./components/UserPage";

function App() {
  return (
    <div>
      <Navibar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/userPage/*" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;

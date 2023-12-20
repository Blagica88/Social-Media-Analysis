import Drawers from "./components/menu/Drawers";
import Influencers from "./components/Influencers";
import Login from "./components/registration/Login";
import MainScreen from "./components/MainScreen";
import Signup from "./components/registration/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/main" element={<MainScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/instagram" element={<MainScreen />} />
        <Route path="/influencers/:chartType" element={<MainScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

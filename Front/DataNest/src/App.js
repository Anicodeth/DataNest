import logo from './logo.svg';
import './App.css';
import MainPage from "./presentation/screens/main_page";
import SignIn from './presentation/screens/authentication/sign_in';
import SignUp from './presentation/screens/authentication/sign_up';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBoard from "./presentation/screens/dashboard/dash-board";

function App() {
  return (
     <Router>
         <>
        <Routes>
            <Route path="/chat" element={<MainPage />} />
            <Route path="/sign_in" element={<SignIn />} />
            <Route path="/sign_up" element={<SignUp />} />
            <Route path="/" element={<DashBoard />}/>
        </Routes>
         </>
     </Router>
 );
}

export default App;

import logo from './logo.svg';
import './App.css';
import MainPage from "./presentation/screens/main_page";
import SignIn from './presentation/screens/authentication/sign_in';
import SignUp from './presentation/screens/authentication/sign_up';


function App() {
  return (<>
      <MainPage />
    <SignIn />
    <SignUp />
  </>);
}

export default App;

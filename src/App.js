import "./scss/main.scss";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import LoginComponent from "./components/LoginComponent";
import Home from "./components/Home";
import Registration from "./components/Registration";
import LogOut from "./components/LogOut";
import TransmissionMain from"./components/TransmissionMain";

const App = () =>{
  return(
    <Router>
        <Route exact path="/" component={Home}/>
        <Route  path="/login" component={LoginComponent}/>
        <Route  path="/registration" component={Registration}/>
        <Route  path="/logOut" component={LogOut}/>
        <Route  path="/transmission" component={TransmissionMain}/>
    </Router>
  );
};
export default App;

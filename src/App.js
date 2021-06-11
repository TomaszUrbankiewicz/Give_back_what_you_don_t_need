import "./scss/main.scss";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import LoginComponent from "./components/LoginComponent";
import Home from "./components/Home";
import Registration from "./components/Registration";

const App = () =>{
  return(
    <Router>
        <Route exact path="/" component={Home}/>
        <Route  path="/login" component={LoginComponent}/>
        <Route  path="/registration" component={Registration}/>
    </Router>
  );
};
export default App;

import "./scss/main.scss";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory
} from 'react-router-dom';
import LoginComponent from "./components/LoginComponent";
import Home from "./components/Home";

const App = () =>{
  return(
    <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={LoginComponent}/>
    </Router>
  );
};
export default App;

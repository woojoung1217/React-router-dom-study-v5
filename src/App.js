
import { BrowserRouter, Route, Switch} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from "./pages/NotFound";
import Links from "./components/Links";
import NavLinks from "./components/NavLinks";
import Login from "./pages/Login";
function App() {
  return (
    <BrowserRouter>
      <Links/>
      <NavLinks/>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/profile/1" component={Profile}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/" exact component={Home}></Route>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

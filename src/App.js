
import { BrowserRouter, Route, Switch} from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from "./pages/NotFound";
import Links from "./components/Links";
function App() {
  return (
    <BrowserRouter>
      <Links/>
      <Switch>
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

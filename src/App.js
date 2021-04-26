import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App polarisBackgroundImage">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/" component={() => <Home></Home>}></Route>
          <Route
            exact
            path="/projects"
            component={() => <Projects></Projects>}
          ></Route>
          <Route exact path="/about" component={() => <About></About>}></Route>
          <Route exact path="/social" component={() => <Home></Home>}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

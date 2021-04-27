import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path="/" component={() => <Home></Home>}></Route>
          <Route
            path="/projects"
            component={() => <Projects></Projects>}
          ></Route>
          <Route path="/about" component={() => <About></About>}></Route>
          <Route path="/social" component={() => <Home></Home>}></Route>
          <Route path="/contact" component={() => <Contact></Contact>}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

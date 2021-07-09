import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";
import ContactMe from "./pages/ContactMe/ContactMe";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/About/AboutMe";

export const bgs = [
  "https://cdn.hipwallpaper.com/i/65/22/g876Ek.jpg",
  "https://cdn.hipwallpaper.com/i/65/22/g876Ek.jpg",
];

export default function App() {
  return (
    <Router>
      <div className="wrapper">
        <Sidebar />
        <Switch>
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={ContactMe} />
          <Route path="/about" component={AboutMe} />
          <Route path="/home" component={Home} />
          {/* <Route path="/about" />
          <Route path="/resume" />
          <Route path="/projects" component={Projects} />
  <Route path="/contact" /> */}
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

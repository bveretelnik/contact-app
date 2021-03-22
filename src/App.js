import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import EditContact from "./components/AddContact/EditContact";

function App() {
  return (
    <Router>
      <div className="ui container">
        <Header />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/edit" component={EditContact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Submit from "./Submit";
import NoMatch from "./NoMatch";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/submit" component={Submit} />
          <Route component={NoMatch} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      
      <Router>
        <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/Books" component={Books} />
          <Route exact path="/Books/:id" component={Detail} />
          <Route component={NoMatch} />
          </Switch>
          </>
      </Router>

    </div>
  );
}

export default App;

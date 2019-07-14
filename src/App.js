import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Today from "./components/today";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./App.sass";

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <Switch>
          <Route path="/today" component={Today} />
          <Redirect from="/" exact to="/today" />
        </Switch>
      </main>
    </div>
  );
}

export default App;

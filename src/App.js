import React from "react";
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./screens/Registration";
import Admin from "./screens/Admin";
import EventReports from "./screens/EventReports";
import './App.css';

//application router setup 
function App() {
  return (  
      
      <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/home">
            <Registration />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/reports">
            <EventReports />
          </Route>
      </Switch>   
            )
          }

export default App;

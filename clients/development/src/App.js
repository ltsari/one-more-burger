import React, { Component } from 'react';
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//import page
import RegistrationPage from "./views/common/register";
import LoginPage from "./views/common/login";
import AdminPage from "./views/administrator";
import BuyerPage from "./views/buyer";

class App extends Component {
  render() {
    return (
      <div className = "App">
          <Router>
            <Switch>
              <Route path="/register" component={RegistrationPage}/>
              <Route path="/login" component={LoginPage}/>
              <Route path="/admin" component={AdminPage}/>
              <Route path="/buyer" component={BuyerPage}/>
            </Switch>
          </Router>
      </div>
    );
  }
}


export default App;

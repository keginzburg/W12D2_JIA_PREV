import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";
import NavBar from "./navbar/navbar";
import CategoryIndex from "./category/category_index";
import LoginFormContainer from '../components/session/login_form_container';
import SignupFormContainer from '../components/session/signup_form_container';
import Main from './main';

const App = () => {
  return (
    <div>
      <header>
        <NavBar />
        <CategoryIndex />
      </header>
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={Main} />
      </Switch>
    </div>  
  )
};

export default App;
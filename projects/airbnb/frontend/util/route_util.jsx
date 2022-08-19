import React from "react";
import { connect } from "react-redux";
import { Route, withRouter, Redirect } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return <Route
    path={path}
    exact={exact}
    render={props => 
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
};

const mSTP = state => {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

export const AuthRoute = withRouter(
  connect(mSTP, null)(Auth)
);

// When instantiating an AuthRoute, it will look like so:
// <AuthRoute path="/login" component={LoginFormContainer} />
// We pass it a path and a component to render at that path.
// So our AuthRoute container component takes in a loggedIn status based on our state.session.id value.
// It then passes that to our Auth function above:


//const Auth = ({ component: Component, path, loggedIn, exact }) => {
// return <Route
//   path={path}
//   exact={exact}
//   render={props =>
//     !loggedIn ? <Component {...props} /> : <Redirect to="/" />
//   }
// />
// };

// This will destructure our accepted props into the component and path we originally passed in, the loggedIn status, and a truthy/falsey exact depending on if that has been flagged.
// It will then return a Route with those values set and either render the Component or a Redirect depending on if we're logged in.
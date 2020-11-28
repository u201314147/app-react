import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function AppRouter() {
  return (
    <div>
      <main>
        <Router>
          <Route exact path="/react">
            <Redirect to="/react/login" />
          </Route>
          <Route exact path="/react/login" component={Login} />
          <Route exact path="/react/register" component={Register} />
        </Router>
      </main>
    </div>
  );
}

export default AppRouter;

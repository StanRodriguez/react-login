import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Alert } from "react-bootstrap";

function App() {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userCreated, setUserCreated] = useState(false);

  return (
    <div className="App">
      <main>
        {userCreated ? (
          <Alert variant="primary">User created successfully</Alert>
        ) : (
          ""
        )}
        {isLoggedIn ? (
          <Home user={user} setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <Router>
            <Switch>
              <Route path="/login">
                <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
              </Route>
              <Route path="/signup">
                <SignUp setUserCreated={setUserCreated} />
              </Route>
              <Route path="/">
                <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
              </Route>
            </Switch>
          </Router>
        )}
      </main>
    </div>
  );
}

export default App;

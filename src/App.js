
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.comp"
import BugsList from "./components/bugs-list.comp";
import EditBug from "./components/edit-bug.comp";
import CreateBug from "./components/create-bug.comp";
import CreateUser from "./components/create-user.comp";

function App() {
  return (
      <Router>
        <div className="container">
          <Navbar />
          <br/>
          <Route path="/" exact component={BugsList} />
          <Route path="/edit/:id" component={EditBug} />
          <Route path="/create" component={CreateBug} />
          <Route path="/user" component={CreateUser} />
        </div>
      </Router>
  );
}

export default App;
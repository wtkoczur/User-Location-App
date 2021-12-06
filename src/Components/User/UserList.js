import { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import UserDetails from "../UserDetails/UserDetails";
import Home from "../Home/Home";
import Users from "./Users";

const styles = {
  listDetails: {
    margin: "0 auto",
    width: "33vw",
    display: "flex",
    justifyContent: "center"
  }
};

const UserList = () => {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users/:id">
          <UserDetails user={users} />
        </Route>
        <Route exact path="/list">
          {loading && <h3>loading...</h3>}
          <div style={styles.listDetails}>
            <Users data={users} />
          </div>

          <Link to="/">
            <p>Back</p>
          </Link>
        </Route>
      </Switch>
    </Router>
  );
};

export default UserList;

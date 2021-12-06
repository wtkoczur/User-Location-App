import { useState, useEffect } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

import User from './User';
import UserDetails from "../UserDetails/UserDetails";
import Home from "../Home/Home";

const styles= {
    listDetails: {
        margin: "0 auto",
        width: "33vw",
        display: "flex",
        justifyContent: "center"
    }
}

const UserList = () => {
    const [ users, setUsers ] = useState();
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=10")
        .then(res => {
            return res.json()
        })
        .then(data => {
            setUsers(data.results)
            //users && console.log("users: ", users)
            setLoading(false)
        })
        }, []);


    return (

        <Router>
             <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/users/:id">
                    <UserDetails user={users}/>
                </Route>
                <Route exact path="/list">
                    {loading && <h3>loading...</h3>}
                    <div style={styles.listDetails}>
                        <ul style={{listStyleType: 'none'}}>
                            {users && users.map((user) => (
                                <li key={user.login.uuid}>
                                    <Link to={`/users/${user.login.uuid}`} style={{textDecoration: 'none', color: "#000"}}>
                                        <User
                                            name= {`${user.name.last} ${user.name.first}`}
                                            picture={user.picture.thumbnail}
                                            place={user.location.country}
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <Link to="/">
                        <p>Back</p>
                    </Link>
                </Route>
            </Switch>
        </Router>

    )
}

export default UserList;

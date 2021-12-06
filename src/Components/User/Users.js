import React from "react";
import { Link } from "react-router-dom";
import User from "./User";

const Users = ({ data }) => {
  return (
    <ul style={{ listStyleType: "none" }}>
      {data &&
        data.map((user) => (
          <li key={user.login.uuid}>
            <Link
              to={`/users/${user.login.uuid}`}
              style={{ textDecoration: "none", color: "#000" }}
            >
              <User
                name={`${user.name.last} ${user.name.first}`}
                picture={user.picture.thumbnail}
                place={user.location.country}
              />
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default Users;

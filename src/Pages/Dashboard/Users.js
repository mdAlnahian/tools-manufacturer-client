import React, { useEffect, useState } from "react";
// import { useQuery } from 'react-query';
import Loading from "../../Shared/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const [users, setUsers, refetch, isLoading] = useState([]);
  useEffect(() => {
    fetch("https://sheltered-beach-60014.herokuapp.com/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-2xl text-center">All Users: {users.length}</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

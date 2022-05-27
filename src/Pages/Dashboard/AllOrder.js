import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AllOrder = () => {
        const [user] = useAuthState(auth);

        const [myOrders, setMyOrders] = useState([]);

        
      useEffect(() => {
        if (user) {
        //   console.log(user.email);
          fetch(`http://localhost:5000/order`, {
            // fetch(`http://localhost:5000/order?email=${user.email}`, {
            // method: "GET",
            // headers: {
            //   "content-type": "application/json",
            //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            // },
          })
            .then((res) => res.json())
            .then((data) => setMyOrders(data));
        }
      }, [user]);


    return (
      <div class="overflow-x-auto">
        <h2 className="text-2xl text-center pb-6">
          {" "}
          Our clients Have Confirmed {myOrders.length} Orders
        </h2>
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>serial</th>
              <th>Name</th>
              <th>email</th>
              <th>price</th>
              {/* <th>Cancel Order</th> */}
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {myOrders.map((myOrder, index) => (
              <tr key={myOrder._id}>
                <th>{index + 1}</th>
                <td>{myOrder.name}</td>
                <td>{myOrder.email}</td>
                <td>${myOrder.price}</td>
                {/* <td>
                  {" "}
                  <button
                    // onClick={() => handleDelete(myOrder._id)}
                    className="btn btn-xs btn-warning"
                  >
                    Cancel Order
                  </button>{" "}
                </td> */}
                {/* <td>{myOrder.treatment}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AllOrder;
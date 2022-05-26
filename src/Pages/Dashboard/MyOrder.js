import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrder = () => {

      const [user] = useAuthState(auth);

      const [myOrders , setMyOrders] = useState([]);

      useEffect(()=>{
        if(user){
            fetch("http://localhost:5000/order",{
                method:'GET',
                headers:{
                    'content-type':'application/json'
                }
            })
            .then(res => res.json())
            .then(data => setMyOrders(data))
        }
      },[]);

      const { id } = useParams();

      const handleDelete = ( id ) =>{
          const proceed =window.confirm('Are you Sure ?');
          if(proceed){
            const url = `http://localhost:5000/order/${id}`;
            fetch( url , {
              method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              const rest = myOrders.filter((item) => item._id !== id);
              setMyOrders(rest);
            });
          }
      }


    return (
      <div class="overflow-x-auto">
        <h2 className="text-2xl text-center pb-6"> You Have Confirmed {myOrders.length} Orders</h2>
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>serial</th>
              <th>Name</th>
              <th>email</th>
              <th>price</th>
              <th>Cancel Order</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {
                myOrders.map((myOrder , index) => <tr key={myOrder._id}>
                     <th>{index + 1}</th>
                        <td>{myOrder.name}</td>
                        <td>{myOrder.email}</td>
                        <td>${myOrder.price}</td>
                        <td> <button onClick={()=>handleDelete(myOrder._id)} className='btn btn-xs btn-warning'>Cancel Order</button> </td>
                        {/* <td>{myOrder.treatment}</td> */}
                             
                </tr>)
            }
          </tbody>
        </table>
      </div>
    ); 
};

export default MyOrder;
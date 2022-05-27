import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ManageItem = () => {

        const [items, setItems] = useState([]);

        useEffect(() => {
          fetch("http://localhost:5000/tool")
            .then((res) => res.json())
            .then((data) => setItems(data));
        }, []);

        const { id } = useParams();

        const deleteItem = (id) => {
                const proceed = window.confirm("Are you Sure ?");
                if(proceed){
                    const url = `http://localhost:5000/tool/${id}`;
                      fetch(url, {
                        method: "DELETE",
                    })
                    .then(res => res.json())
                    .then(data => {
                       console.log(data);
                       const rest = items.filter((item) => item._id !== id);
                      setItems(rest);
            });
          }
                }



    return (
      <div className=" pb-24 w-full">
        <h2 className="uppercase text-3xl text-center pt-6 pb-6">
          Running Popular Products!!
        </h2>

        <div>
          <table class="table w-full">
            <thead>
              <tr>
                <th>serial</th>
                <th>image</th>
                <th>Name</th>
                <th>
                  delete item
                </th>
              </tr>
            </thead>
            <tbody>
              {
                  items.map((item , index) => (
                      <tr key={item._id}>
                           <th>{index + 1}</th>
                            <td>
                             <img src={item.imageLink} alt="images" className="w-20 h-20" />
                            </td>
                            <td>{item.name}</td>
                            <td>
                            <button onClick={()=> deleteItem(item._id)} class="btn btn-xs btn-primary">Delete Item</button>
                            </td>

                      </tr>
                  ))
              }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageItem;

//    const handleDelete = (id) => {
//      const proceed = window.confirm("Are you Sure ?");
//      if (proceed) {
//        const url = `http://localhost:5000/order/${id}`;
//        fetch(url, {
//          method: "DELETE",
//        })
//          .then((res) => res.json())
//          .then((data) => {
//            console.log(data);
//            const rest = myOrders.filter((item) => item._id !== id);
//            setMyOrders(rest);
//          });
//      }
//    };

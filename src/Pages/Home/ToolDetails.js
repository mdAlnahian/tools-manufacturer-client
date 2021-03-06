import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading";

const ToolDetails = () => {
  const navigate = useNavigate();

  const [user, loading] = useAuthState(auth);

  const { id } = useParams();

  const [tool, setTool] = useState([]);

  useEffect(() => {
    const url = `https://sheltered-beach-60014.herokuapp.com/tool/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTool(data));
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    let availableQuantity = e.target.availableQuantity.value;
    if (availableQuantity < tool.minimumOrder) {
      return toast.error(`You Cant order less than ${tool.minimumOrder} item`, {
        position: toast.POSITION.TOP_CENTER,
      });
    } else if (availableQuantity > tool.availableQuantity) {
      return toast.error(
        `You Cant order more than ${tool.availableQuantity} item`,
        {
          position: toast.POSITION.TOP_CENTER,
        }
      );
    }
    //lets handle price
    const price = e.target.price.value * availableQuantity;
    // console.log(address, phone, availableQuantity);
    let order = { name, email, address, phone, availableQuantity, price };
    console.log(order);

    //now applying the post method
    const url = `https://sheltered-beach-60014.herokuapp.com/order`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`Order Recieved Successfully for ${tool.name}`, {
            position: toast.POSITION.TOP_CENTER,
          });
          navigate(`/purchase`);
        } else {
          return toast.error(`You have already placed order for ${tool.name}`, {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
  };

  return (
    <div>
      <div className=" pt-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* for tool/product details */}

          <div className="flex justify-center items-center">
            <div class="card lg:w-96 sm:max-w-sm bg-orange-100 shadow-xl">
              <figure>
                <img src={tool.imageLink} alt="img" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">
                  {tool.name}
                  <div class="badge badge-primary">NEW</div>
                </h2>
                <h3 className="">Description : {tool.description}</h3>
                <h2 className="text-2xl">Price per Item: ${tool.price}</h2>
                <h3 className="text-xl">Minimum Order : {tool.minimumOrder}</h3>
                <h3 className="text-xl">
                  Available Quantity : {tool.availableQuantity}
                </h3>
              </div>
            </div>
          </div>
          {/* for the form here */}

          <div className="flex justify-center items-center pt-6 pl-10 pr-2">
            <div className="container mx-auto pb-16">
              <h2 className="text-3xl mb-6">
                Confirm Your Order Here For :{" "}
                <span className="font-bold text-green-700">{tool.name}</span>
              </h2>
              <form onSubmit={handleConfirmOrder}>
                <div>
                  <label class="label">
                    <span class="label-text">What is your name?</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={user.displayName ? user.displayName : "RandomUser"}
                    class="input input-bordered input-primary w-full max-w-xs text-xl text-accent font-bold"
                    readOnly
                  />
                </div>
                <div>
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={user?.email || ""}
                    class="input input-bordered input-primary w-full max-w-xs text-accent font-bold mb-2"
                    readOnly
                  />
                </div>

                <div>
                  <label class="label">
                    <span class="label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    class="input input-bordered input-primary w-full max-w-xs text-accent font-bold mb-2"
                    required
                  />
                </div>

                <div>
                  <label class="label">
                    <span class="label-text">Phone Number</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Phone"
                    name="phone"
                    class="input input-bordered input-primary w-full max-w-xs text-accent font-bold mb-2"
                  />
                </div>

                <div>
                  <label class="label">
                    <span class="label-text">Product Quantiy</span>
                  </label>
                  <input
                    type="number"
                    placeholder={
                      " Minimum orderable quantity is " + tool.minimumOrder
                    }
                    name="availableQuantity"
                    class="input input-bordered input-primary w-full max-w-xs text-accent font-bold "
                  />
                  <label class="label">
                    <span class="label-text"></span>
                  </label>
                </div>
                <div>
                  <label class="label">
                    <span class="label-text">Product Price</span>
                  </label>
                  <input
                    // onBlur={handleOrderQuantity}
                    type="number"
                    placeholder="Prices of Your product"
                    name="price"
                    value={tool.price}
                    class="input input-bordered input-primary w-full max-w-xs text-accent font-bold"
                  />
                  <label class="label">
                    <span class="label-text mb-4">
                      Price will be updated based on Quantiy,{" "}
                      <span>Check dashboard????</span>{" "}
                    </span>
                  </label>
                </div>

                <div>
                  <button class="btn w-1/2 lg:w-1/4">Confirm Order</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetails;

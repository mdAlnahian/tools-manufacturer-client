import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tools = ({tool}) => {

    const {
      _id,
      imageLink,
      name,
      availableQuantity,
      description,
      minimumOrder,
      price 
    } =  tool ;

    const navigate = useNavigate();

    return (
      <div class="card lg:max-w-max md:max-w-md sm:max-w-sm bg-orange-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={imageLink} alt="images" class="w-1/3 rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="text-2xl">{name}</h2>
          <h2 className="text-xl">
            Available Quantity: {availableQuantity}
          </h2>
          <p>
            <span className="font-bold">Item Info:</span> {description}
          </p>
          <h2 className="text-xl">Minimum Order: {minimumOrder}</h2>
          <h2 className="text-xl">Per Unit Price: ${price}</h2>
          <div class="w-full">
            {/* <Link to="/purchase"> */}
              <button
                onClick={() => navigate(`/purchase/${_id}`)}
                class="btn btn-primary w-full"
              >
                Buy Now
              </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    );
};

export default Tools;



 
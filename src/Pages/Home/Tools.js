import React from 'react';
import { Link } from 'react-router-dom';

const Tools = ({tool}) => {

    return (
      <div class="card lg:max-w-max md:max-w-md sm:max-w-sm bg-orange-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={tool.imageLink} alt="images" class="w-1/3 rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="text-2xl">{tool.name}</h2>
          <h2 className="text-xl">
            Available Quantity: {tool.availableQuantity}
          </h2>
          <p>
            <span className="font-bold">Item Info:</span> {tool.description}
          </p>
          <h2 className="text-xl">Minimum Order: {tool.minimumOrder}</h2>
          <h2 className="text-xl">Per Unit Price: ${tool.price}</h2>
          <div class="w-full">
            <Link to="/purchase">
              <button class="btn btn-primary w-full">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Tools;
import React from 'react';

const Reviews = ({ review }) => {


  return (
    <div class="">
      <div className="card lg:max-w-lg md:max-w-md sm:max-w-sm bg-orange-200 shadow-xl">
        <div className="flex">
          <div class="avatar lg:mt-12 px-6 mt-16">
            <div class="w-20 h-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="https://api.lorem.space/image/face?hash=3174" alt="" />
            </div>
          </div>
          <div class="card-body items-center text-center">
            <h2 class="card-title uppercase">{review.name}</h2>
            <p> {review.description} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
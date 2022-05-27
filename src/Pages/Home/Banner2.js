import React from 'react';
import bg from "./bg.png";

const Banner2 = () => {
    return (
      <div>
        <>
          <div class="hero bg-orange-300 pt-12">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <img
                className="sm:w-full lg:max-w-sm rounded-lg shadow-xl"
                src={bg}
                //   class="max-w-sm rounded-lg"
                alt="Img"
              />
              <div>
                <h1 class="lg:text-5xl text-3xl font-bold">
                  Users get the best services from us!!!
                </h1>
                <p class="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button class="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </>
      </div>
    );
};

export default Banner2;
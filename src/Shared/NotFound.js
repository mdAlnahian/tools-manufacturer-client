import React from "react";
import bg from './404.jpg'

const NotFound = () => {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center pt-40">
        <div>
          <img className="w-full" src={bg} alt="" srcset="" />
        </div>
        <h1 className="font-bold ">
          <span className="text-red-600 text-3xl lg:text-9xl">404 ! ERROR</span>
        </h1>
      </div>
      <h2 className="text-xl text-2xl lg:text-5xl text-center font-bold">
        The page you are looking for is not available
      </h2>
    </div>
  );
};

export default NotFound;

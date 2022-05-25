import React, { useEffect, useState } from "react";
import Tools from "../Home/Tools";

const Purchase = () => {

  const [tools, setTools] = useState([]);

  useEffect(() => {
    // fetch('tools.json')
    fetch("http://localhost:5000/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <div className="h-screen lg:px-20 px-12">
      <div className="bg-orange-200 pb-24 w-full">
        <h2 className="uppercase text-3xl text-center pt-24 pb-24">
          Running Popular Products!!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-24 gap-6 lg:w-3/4 w-full lg:px-24 px-12 mx-auto">
          {tools.map((tool) => (
            <Tools key={tool._id} tool={tool}></Tools>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Purchase;

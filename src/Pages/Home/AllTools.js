import React, { useEffect, useState } from "react";
import Tools from "./Tools";

const AllTools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    // fetch('tools.json')
    fetch("https://sheltered-beach-60014.herokuapp.com/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <div className="bg-orange-200 pb-24 w-full">
      <h2 className="uppercase text-3xl text-center pt-24 pb-24">
        Running Popular Products!!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-24 gap-6 lg:w-3/4 w-full lg:px-24 px-12 mx-auto">
        {tools.slice(-6).map((tool) => (
          <Tools key={tool._id} tool={tool}></Tools>
        ))}
      </div>
    </div>
  );
};

export default AllTools;

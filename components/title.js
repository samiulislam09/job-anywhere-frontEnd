import React from "react";

function Title(props) {
  return (
    <div>
      <h2 className="text-xl md:text-4xl text-blue-600 font-bold text-center mt-8">
        {props.children}
      </h2>
      <div className="h-1 m-5 w-16 bg-blue-600 mx-auto rounded-sm"></div>
    </div>
  );
}

export default Title;

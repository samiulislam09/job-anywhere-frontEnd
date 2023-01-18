import React from "react";

function Title(props) {
  return (
    <h2 className="text-xl md:text-4xl text-blue-600 font-bold text-center my-8">
      {props.children}
    </h2>
  );
}

export default Title;

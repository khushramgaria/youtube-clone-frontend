import React from "react";

function Button(props) {
  return (
    <>
      <button 
      className="bg-blue-900 py-2 px-3 font-bold text-white rounded-lg hover:border hover:border-white"
      onClick={props.onClick}
      >
        {props.title}
      </button>
    </>
  );
}

export default Button;

import React from "react";

// reactstrap components
// import { Spinner } from "reactstrap";

// core components

export default function PageChange(props) {
  return (
    <div className="flex items-center justify-center h-screen">
    <div className="my-32 mx-auto max-w-sm text-center relative z-50 top-0">
      <div className="block mb-4">
        <i className="fas fa-solid fa-square animate-bounce text-black mx-auto text-6xl"></i>
      </div>
      <h4 className="text-lg font-medium text-black">
        Loading ...
      </h4>
    </div>
  </div>
  );
}

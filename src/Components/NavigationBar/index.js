import React from "react";
import { Link } from "react-router-dom";

function index() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/post">POST</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default index;

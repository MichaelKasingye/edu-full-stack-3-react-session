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
          <Link to="/contex-home">Contex Home</Link>
        </li>
        <li>
          <Link to="/custom-hook">custom hook</Link>
        </li>
        <li>
          <Link to="/contexAPI-search">custom search</Link>
        </li>
        <li>
          <Link to="/contexAPI-resuilt">custom resuilt</Link>
        </li>
        <li>
          <Link to="/redux-page">redux-page</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default index;

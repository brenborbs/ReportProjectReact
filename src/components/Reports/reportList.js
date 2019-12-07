import React from "react";
import { Link } from "react-router-dom";

const reportList = () => {
  return (
    <div className="m-4">
      <ul>
        <li>
          <Link to="/report/1">Report 1</Link>
        </li>
        <li>
          <Link to="/report/2">Report 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default reportList;

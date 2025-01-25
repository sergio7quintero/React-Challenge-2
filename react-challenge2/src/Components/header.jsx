import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div>
        <ul className="header1">
          <Link to="/easy">
            <li>Easy</li>
          </Link>
          <Link to="/medium">
            <li>Medium</li>
          </Link>
          <Link to="/hard">
            <li>Hard</li>
          </Link>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

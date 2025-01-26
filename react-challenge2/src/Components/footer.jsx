import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div class="copyright-wrapper">
        <p>
          Created and Designed by
          <a href="https://www.linkedin.com/in/sergio7quintero/" target="blank">
            {" "}
            Sergio Quintero
          </a>
        </p>
      </div>
      <Outlet />
    </div>
  );
}

import React from "react";

export const Navbar = () => {
  return (
    <>
      <ul class="nav ">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            About Us
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Quizes
          </a>
        </li>
        <li className="nav-item  mx-auto">
          <div className="nav-link font-weight-bold" href="#">
            <h3>Quiz Bunch </h3>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">
            <button type="button" class="rounded btn btn-sm btn-success">
              Sign In
            </button>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;

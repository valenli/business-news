import React from "react";
import bsLogo from "../assets/bsLogo.png";

const Navbar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {/* <span className="badge bg-light text-dark fs-4">商務時報</span> */}
          <img
            src={bsLogo}
            className="img-fluid"
            width="50"
            height="50"
            alt="logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory("technology")}
              >
                科技
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("business")}>
                商業
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("health")}>
                健康
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={() => setCategory("sports")}>
                運動
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onClick={() => setCategory("entertainment")}
              >
                娛樂
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BsSearch, BsPerson, BsCart3 } from "react-icons/bs";

export default function Home() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-3">
      <div className="container-fluid">

        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src="/audi.jpg" alt="audi" height="50" />
        </a>

        {/* Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto ms-3">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">O nas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Kontakt</a>
            </li>
          </ul>

          {/* Ikony */}
          <div className="d-flex gap-3 text-white fs-5">
            <BsSearch className="icon" />
            <BsPerson className="icon" />
            <BsCart3 className="icon" />
          </div>
        </div>
      </div>
    </nav>
  );
}
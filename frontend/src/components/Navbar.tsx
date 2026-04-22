import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-3">
      <div className="container-fluid">

        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" alt="TheFourthRing" height={50}/>
        </Link>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto ms-3">
            <li className="nav-item">
              <a className="nav-link text-white" href="">O nas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="">Kontakt</a>
            </li>
            <li className="nav-item">
                <button className="nav-link text-white bg-transparent" onClick={scrollToProducts}>
                    Produkty
                </button>
            </li>
          </ul>

          {/* Ikony */}
          <div className="d-flex gap-3 text-white fs-5">
            <i className="bi bi-search icon"></i>
            <i className="bi bi-heart icon" ></i>
                <Link to="/login" className="nav-link text-white">
                <i className="bi bi-person"></i>
            </Link>
            <i className="bi bi-cart3 icon"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}


const scrollToProducts = () => {
  document.getElementById("produkty")?.scrollIntoView({
    behavior: "smooth",
  });
};
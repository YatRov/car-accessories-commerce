import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css"
import { useNavigate } from "react-router-dom";

export default function Registration() {
    const navigate = useNavigate();
    
    const handleBack = () => {
    navigate("/login");
  };

  return (
    <section className="container-fluid vh-100 p-0">
      <div className="row h-100 m-0">
        {/*left*/}
        <div className="col-md-4 d-flex justify-content-center align-items-center bg-light">
          <div className="w-75">
            <p className="text-welcome">The Fourth Ring</p>
            <h1 className="welcome-title">Zarejetruj się</h1>

            <form className="form-custom">
              <label>Hasło</label>
              <input type="password" className="form-control_2" />
              <button type="submit" className="btn btn-dark btn-login w-100 mt-3">
                Utwórz
              </button>
              <button type="button" className="btn btn-outline-dark btn-register w-100 mt-2" onClick={handleBack}>
                Wstecz
              </button>
            </form>
          </div>
        </div>

        {/*right*/}
        <div className="col-md-8 d-none d-md-block p-0">
          <img
            src="https://images.unsplash.com/photo-1710011115876-301113e1bb61?q=80&w=1170&auto=format&fit=crop"
            alt="car"
            className="img-fluid vh-100 w-100 object-fit-cover"
          />
        </div>
      </div>
    </section>
  );
}
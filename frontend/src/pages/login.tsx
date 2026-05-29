import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css"
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();
    navigate("/registration");
  };

  return (
    <section className="container-fluid vh-100 p-0">
      <div className="row h-100 m-0">
        {/*left*/}
        <div className="col-md-4 d-flex justify-content-center align-items-center bg-light">
          <div className="w-75">
            <p className="text-welcome">The Fourth Ring</p>
            <h1 className="welcome-title">Witamy</h1>

            <form className="form-custom" onSubmit={handleSubmit}>
              <label>Adres e-mail</label>
              <input type="email" className="form-control_2" />
              <button type="submit" className="btn btn-dark btn-login w-100 mt-3">
                Dalej
              </button>
              <button type="button" className="btn btn-outline-dark btn-register w-100 mt-2">
                Zarejestruj się
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